<?php


namespace App\Models\Backend\Traits\Attribute;


trait ProductAttribute
{
    public function setCreated_at($value)
    {
        $this->attributes['created_at'] = strtotime($value->toDateTime()->format('Y-m-d H:i:s'));
    }

    public function setUpdated_at($value)
    {
        $this->attributes['updated_at'] = strtotime($value->toDateTime()->format('Y-m-d H:i:s'));
    }
}
