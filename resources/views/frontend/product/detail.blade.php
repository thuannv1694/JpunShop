@extends('frontend.layouts.header')

@section('title', app_name() . ' | ' . __('strings.backend.people.index.title'))

@section('content')
    @stack('before-scripts')

    @stack('after-scripts')

    <home-product />
@endsection
