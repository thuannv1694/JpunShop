<?php


namespace App\Models\Backend;

use App\Models\Backend\Traits\Attribute\CategoryAttribute;
use App\Models\Backend\Traits\Method\CategoryMethod;
use App\Models\Backend\Traits\Relationship\CategoryRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Category extends Model
{
    use CategoryAttribute,
        CategoryMethod,
        CategoryRelationship;
    public $timestamps = false;
    protected $guarded = ['id'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'slug',
        'createdBy'
    ];

    public static function boot() {
        parent::boot();

        // create a event to happen on creating
        static::creating(function($table)  {
            $table->createdBy = Auth::id();
        });

        // create a event to happen on updating
        static::updating(function($table)  {
            $table->updatedBy = Auth::id();
        });
    }
}
