<?php


namespace App\Repositories\Backend;

use App\Models\Backend\Product;
use App\Repositories\BaseRepository;
use App\Repositories\SqlDBRepository;

/**
 * Class DeviceRepository
 * @package App\Repositories\Backend
 */
class ProductRepository extends BaseRepository
{
//    /**
//     * Specify Model class name.
//     *
//     * @return mixed
//     */
//    public function model()
//    {
//        return Product::class;
//    }

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

}
