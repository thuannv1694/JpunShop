<?php

use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\ProductController;


// All route names are prefixed with 'admin.'.
Route::redirect('/dashboard', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('category', [CategoryController::class, 'index'])->name('category');
Route::post('category/addNewCategory', [CategoryController::class, 'addNewCategory'])->name('category.addNewCategory');
Route::post('category/remove', [CategoryController::class, 'remove'])->name('category.remove');
Route::get('category/search', [CategoryController::class, 'ajaxSearch'])->name('category.search');
Route::get('category/searchIdCategory', [CategoryController::class, 'searchIdCategory'])->name('category.searchIdCategory');
Route::get('category/getById', [CategoryController::class, 'getById'])->name('category.getById');
Route::post('category/update', [CategoryController::class, 'update'])->name('category.update');
//product
Route::get('product', [ProductController::class, 'index'])->name('product');
Route::get('product/created', [ProductController::class, 'created'])->name('product.created');
Route::post('product/uploadImage', [ProductController::class, 'uploadImage'])->name('product.uploadImage');
Route::post('product/save', [ProductController::class, 'ajaxSave'])->name('product.save');
Route::get('product/search', [ProductController::class, 'ajaxSearch'])->name('product.search');
Route::get('product/searchIdProduct', [ProductController::class, 'searchIdProduct'])->name('product.searchIdProduct');
Route::post('product/remove', [ProductController::class, 'ajaxRemove'])->name('product.remove');
Route::get('product/getById', [ProductController::class, 'getById'])->name('product.getById');
Route::get('product/edit/{id}', [ProductController::class, 'edit'])->name('product.edit');
Route::post('product/update', [ProductController::class, 'update'])->name('product.update');
