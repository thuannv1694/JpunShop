<?php

namespace App\Http\Controllers\Backend;

use App\Repositories\Backend\ProductRepository;
use App\Models\Backend\Menu;
use App\Repositories\Backend\MenuRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

/**
 * Class ProductController.
 */
class ProductController extends Controller
{
    /**
     * @var ProductRepository
     */
    protected $productRepository;

    /**
     * @var MenuRepository
     */
    protected $menuRepository;
    /**
     * ProductRepository constructor.
     * @param ProductRepository $productRepository
     */
    public function __construct(
        ProductRepository $productRepository,
        MenuRepository $menuRepository
    ) {
        $this->productRepository = $productRepository;
        $this->menuRepository = $menuRepository;
    }

    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('backend.product.index');
    }
    public function created()
    {
        $menu = Menu::with('children')->where('parent_id', '=', 0)->get();
        return view('backend.product.created')->with(compact(['menu']));
    }

    public function uploadImage(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file')->getClientOriginalName();
            $extension = pathinfo($file, PATHINFO_EXTENSION);
            $target_file = md5_file($request->file('file'));
            $fileNameClient = $target_file . '.' . $extension;
            Storage::disk('public')->put($fileNameClient,  File::get($request->file('file')));
            return response()->json([
                'status' => 'success',
                'data' => $fileNameClient
            ], 200);
        } else {
            return response()->json(['status' => 'error', 'data' => 'No file to upload!'], 500);
        }
    }

    public function ajaxSave(Request $request)
    {
        if ($request->ajax()) {
            $productData = $request->value;
            if (isset($productData['productDescription'])) {
                $productDescription = $productData['productDescription'];
            } else {
                $productDescription = '';
            }
            $product = $this->productRepository->create([
                'productName'           => $productData['productName'],
                'productPrice'          => $productData['productPrice'],
                'menuID'                => $productData['menuID'],
                'productDescription'    => $productDescription,
                'productImage'          => $request->image,
            ]);

            return response()->json([
                'status' => 'success',
                'data'   => $product
            ], 200);
        }
    }

    public function ajaxSearch(Request $request)
    {
        if ($request->ajax()) {
            $product = $this->productRepository->with('categorie')->where('productName', '%' . $request->keyword . '%', 'like')->paginate(10);
        }
        $result = [];
        $result['data'] = $product;
        $result['total'] = count($product);
        return response()->json([
            'message' => 'send success!',
            'data' => $result
        ], 200);
    }

    public function searchIdProduct(Request $request)
    {
        $product = $this->productRepository->where('id', $request->id)->paginate(10);
        $result = [];
        $result['data'] = $product;
        $result['total'] = count($product);
        return response()->json([
            'message' => 'send success!',
            'data' => $product
        ], 200);
    }

    public function ajaxRemove(Request $request)
    {
        $product = $this->productRepository->where('id', $request->id)->first()->delete();
        $productData = $this->productRepository->all();
        return response()->json([
            'status' => 'success',
            'data' => $productData
        ], 200);
    }

    public function getById(Request $request)
    {
        $product = $this->productRepository->where('id', $request->id)->first();
        $result = [];
        $result['data'] = $product;
        return response()->json([
            'message' => 'send success!',
            'data' => $product
        ], 200);
    }

    public function edit($id)
    {
        $menu = Menu::with('children')->where('parent_id', '<>', 0)->get();
        $result = $this->productRepository->where('id', $id)->first();
        $product = json_encode($result);
        return view('backend.product.edit')->with(compact(['product', 'menu']));
    }

    public function update(Request $request)
    {
        $data = $request->value;
        $product = $this->productRepository->where('id', $request->id)->first();
        if (isset($data['productDescription'])) {
            $detail = $data['productDescription'];
        } else {
            $detail = '';
        }
        if (isset($request->image)) {
            $image = $request->image;
        } else {
            $image = $data['productImage'];
        }
        $productData = [
            'productName'           => $data['productName'],
            'productPrice'          => $data['productPrice'],
            'menuID'                => $data['menuID'],
            'productDescription'    => $detail,
            'productImage'          => $image,
        ];
        $result = $product->update($productData);
        if ($result) {
            return response()->json(['status' => 'success', 'data' => $product], 200);
        } else {
            return response()->json(['status' => 'error', 'data' => 'Something went wrongs!'], 500);
        }
    }
}
