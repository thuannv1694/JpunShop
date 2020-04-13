@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.people.index.title'))

@section('content')
    @stack('before-scripts')

    @stack('after-scripts')

    <product-list />
@endsection
