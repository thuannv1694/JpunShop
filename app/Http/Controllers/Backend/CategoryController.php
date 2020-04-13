<?php

namespace App\Http\Controllers\Backend;

use App\Models\Backend\Menu;
use App\Repositories\Backend\CategoryRepository;
use App\Repositories\Backend\MenuRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class CategoryController.
 */
class CategoryController extends Controller
{
    /**
     * @var CategoryRepository
     */
    protected $categoryRepository;

    /**
     * @var MenuRepository
     */
    protected $menuRepository;

    /**
     * CategoryRepository constructor.
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(
        CategoryRepository $categoryRepository,
        MenuRepository $menuRepository
    )
    {
        $this->categoryRepository = $categoryRepository;
        $this->menuRepository = $menuRepository;
    }

    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $categories = Menu::tree();
        return view('backend.category.index')->with(compact(['categories']));
    }

    public function addNewCategory(Request $request) {
        $resultData = $request->value;
        if (!isset($resultData['parent_id'])) {
            $parent_id = 0;
        } else {
            $parent_id = $resultData['parent_id'];
        }
        $this->menuRepository->create([
            'name'          => $resultData['name'],
            'parent_id'     => $parent_id,
        ]);
        $category = Menu::tree();
        return response()->json([
            'status' => 'success',
            'data' => $category
        ], 200);
    }

    public function remove(Request $request) {
        $id = $request->value;
        $this->menuRepository->where('id', $id)->deleteById($id);
        $category = Menu::tree();
        return response()->json([
            'status' => 'success',
            'data' => $category
        ], 200);
    }

    public function searchIdCategory(Request $request) {
        $category = $this->menuRepository->where('id', $request->id)->paginate(10);
        $result = [];
        $result['data'] = $category;
        $result['total'] = count($category);
        return response()->json([
            'message' => 'send success!',
            'data' => $category
        ], 200);
    }

    public function getById(Request $request) {
        $category = $this->menuRepository->where('id', $request->id)->first();
        $result = [];
        $result['data'] = $category;
        return response()->json([
            'message' => 'send success!',
            'data' => $category
        ], 200);

    }

    public function update(Request $request){
        $category = $this->menuRepository->where('id', $request->value['id'])->first();
        $category->update($request->value);
        $result = Menu::tree();
        $resultData['data'] = $result;
        if ($result) {
            return response()->json(['status' => 'success', 'data' => $resultData], 200);
        } else {
            return response()->json(['status' => 'error', 'data' => 'Something went wrongs!'], 500);
        }
    }
}
