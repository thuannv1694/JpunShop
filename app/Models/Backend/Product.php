<?php


namespace App\Models\Backend;

use App\Models\Backend\Traits\Attribute\ProductAttribute;
use App\Models\Backend\Traits\Method\ProductMethod;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    use ProductAttribute,
        ProductMethod;
        
    protected $guarded = ['id'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'productName',
        'productDescription',
        'productPrice',
        'productImage',
        'isHot',
        'menuID',
        'createBy',
        'updateBy'
    ];

    function menus() {
        return $this->hasMany(Menu::class, 'id', 'menuID');
    }

    public static function boot() {
        parent::boot();

        // create a event to happen on creating
        static::creating(function($table)  {
            $table->createBy = Auth::id();
        });

        // create a event to happen on updating
        static::updating(function($table)  {
            $table->updateBy = Auth::id();
        });
    }
}
