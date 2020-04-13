<?php


namespace App\Repositories\Backend;

use App\Models\Backend\Menu;
use App\Repositories\BaseRepository;

/**
 * Class DeviceRepository
 * @package App\Repositories\Backend
 */
class MenuRepository extends BaseRepository
{
    public function __construct(Menu $model)
    {
        $this->model = $model;
    }

}
