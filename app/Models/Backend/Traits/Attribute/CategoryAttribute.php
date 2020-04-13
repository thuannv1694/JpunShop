<?php


namespace App\Models\Backend\Traits\Attribute;


trait CategoryAttribute
{
    public function setCreatedAt($value)
    {
        $this->attributes['createdAt'] = strtotime($value->toDateTime()->format('Y-m-d H:i:s'));
    }

    public function setUpdatedAt($value)
    {
        $this->attributes['updatedAt'] = strtotime($value->toDateTime()->format('Y-m-d H:i:s'));
    }
}
