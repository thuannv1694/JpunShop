<?php


namespace App\Models\Backend;

use App\Models\Backend\Traits\Attribute\MenuAttribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Menu extends Model
{
    use MenuAttribute;
    public $timestamps = false;
    protected $guarded = ['id'];

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'parent_id',
        'createdBy',
        'updatedBy'
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

    public function hasManyProduct() {

		return $this->hasMany(Product::class, 'menuID', 'id');
	}

    public function parent()
    {
        return $this->hasOne(Menu::class,'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id', 'id');
    }

    public static function tree()
    {
        return static::with(implode('.', array_fill(0, 100, 'children')))->where('parent_id', '=', 0)->get();
    }
}
