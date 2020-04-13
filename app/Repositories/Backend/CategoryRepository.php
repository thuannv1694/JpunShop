<?php


namespace App\Repositories\Backend;

use App\Models\Backend\Category;
use App\Repositories\BaseRepository;

/**
 * Class DeviceRepository
 * @package App\Repositories\Backend
 */
class CategoryRepository extends BaseRepository
{
    public function __construct(Category $model)
    {
        $this->model = $model;
    }

}
