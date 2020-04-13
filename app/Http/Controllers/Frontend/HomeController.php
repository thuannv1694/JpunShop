<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Menu;
use App\Models\Backend\Product;
use App\Repositories\Backend\MenuRepository;
use App\Repositories\Backend\ProductRepository;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */

    /**
     * @var MenuRepository
     */
    protected $menuRepository;

    /**
     * @var ProductRepository
     */
    protected $productRepository;  

    public function __construct(
        MenuRepository $menuRepository,
        ProductRepository $productRepository
    ) 
    {
        $this->menuRepository = $menuRepository;
        $this->productRepository = $productRepository;
    }

    public function index()
    {
        $menus = Menu::with('children')->where('parent_id','=',0)->get();
        $product = $this->productRepository->where('isHot',1)->orderBy('created_at', 'desc')->get()->take(10);
        // $product = Product::with('categories')->orderBy('created_at', 'desc')->get()->take(10);
        // dd($productData);
        // $product = $productData->where('isHot', 1)->take(10);
        // dd($product);
        return view('frontend.index')->with(compact(['menus', 'product']));
    }
}
