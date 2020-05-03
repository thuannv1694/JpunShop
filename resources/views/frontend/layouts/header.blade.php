<!DOCTYPE html>
@langrtl
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @endlangrtl
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title', app_name())</title>
        <meta name="description" content="@yield('meta_description', 'Laravel Boilerplate')">
        <meta name="author" content="@yield('meta_author', 'Anthony Rappa')">
    @yield('meta')

    {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
    @stack('before-styles')

    <!-- Check if the language is set to RTL, so apply the RTL layouts -->
        <!-- Otherwise apply the normal LTR layouts -->
        {{ style(mix('css/frontend.css')) }}

        @stack('after-styles')
    </head>
    <body style="background-color: #fffcee" class="app header-fixed sidebar-fixed aside-menu-off-canvas sidebar-lg-show">
    <div id="app" class="app-body">
        @include('includes.partials.read-only')
        @include('includes.partials.logged-in-as')
        @include('frontend.includes.header')
        <div class="container">
            @include('includes.partials.messages')
            @yield('content')
        </div>
        @include('frontend.includes.footer')
    </div>

    @stack('before-scripts')
    {!! script(mix('js/manifest.js')) !!}
    {!! script(mix('js/vendor.js')) !!}
    {!! script(mix('js/frontend/vue.js')) !!}
    {!! script(mix('js/frontend.js')) !!}
    @stack('after-scripts')
    @include('includes.partials.ga')
    </body>
    </html>
