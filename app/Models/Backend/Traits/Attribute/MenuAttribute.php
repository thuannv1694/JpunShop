<?php


namespace App\Models\Backend\Traits\Attribute;


trait MenuAttribute
{
    public function setCreated_at($value)
    {
        $this->attributes['created_at'] = strtotime($value->toDateTime()->format('yyyy-MM-dd HH:ii:ss'));
    }

    public function setUpdated_at($value)
    {
        $this->attributes['updated_at'] = strtotime($value->toDateTime()->format('yyyy-MM-dd HH:ii:ss'));
    }
}
