<?php

namespace  App\Repositories;
use Illuminate\Database\Eloquent\Collection;

/**
 * Class SqlDBRepository
 */
abstract class SqlDBRepository
{
    /**
     * The repository model.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    /**
     * SqlDBRepository constructor.
     */
    public function __construct()
    {
        return $this->makeModel();
    }

    /**
     * Specify Model class name.
     *
     * @return mixed
     */
    abstract public function model();

    /**
     * @return mixed
     */
    public function makeModel()
    {
        return $this->model = resolve($this->model());
    }

    /**
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getModel(): \Illuminate\Database\Eloquent\Model
    {
        return $this->model;
    }
}
