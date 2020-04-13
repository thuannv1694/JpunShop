@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.product.created'))

@section('content')
    @stack('before-scripts')

    @stack('after-scripts')

    <product-detail-created :menu="{{ $menu }}"/>

@endsection
