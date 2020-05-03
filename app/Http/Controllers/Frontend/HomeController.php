<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Menu;
use App\Models\Backend\Product;
use App\Repositories\Backend\MenuRepository;
use App\Repositories\Backend\ProductRepository;
use Menu as GlobalMenu;

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
        $product = Menu::with('hasManyProduct')->orderBy('created_at', 'desc')->get()->take(10);
        return view('frontend.index')->with(compact(['menus', 'product']));
    }

    public function productDetail()
    {
        $menus = Menu::with('children')->where('parent_id', '=', 0)->get();
        
        return view('frontend.product.detail')->with(compact(['menus']));
    }
}
