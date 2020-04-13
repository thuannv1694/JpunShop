<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductTypeAttributeValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_type_attribute_value', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('product_type_id')->unsigned();
            $table->bigInteger('attribute_value_id')->unsigned();
            $table->foreign('product_type_id')->references('id')->on('product_type');
            $table->foreign('attribute_value_id')->references('id')->on('attribute_value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_type_attribute_value');
    }
}
