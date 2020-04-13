@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.product.edit'))

@section('content')
    @stack('before-scripts')

    @stack('after-scripts')

    <product-detail-edit 
        :product="{{ $product }}"
        :menu="{{ $menu }}"
        
    />

@endsection