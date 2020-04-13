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
    {{ style(mix('css/backend.css')) }}

    @stack('after-styles')
</head>

<body class="app header-fixed sidebar-fixed aside-menu-off-canvas sidebar-lg-show">
    <div class="app-body" id="app"> 
        <cui-menu-header :user="{{ Auth::user() }}" >
            @if(in_array(\Route::current()->getName(), ['admin.movie.edit', 'admin.season.edit']))
                @include('includes.partials.messages')
                <div class="cui-layout-content">
                    <div class="cui-utils-content">
                        @yield('content')
                    </div>
                </div>
                @else
                    <div class="cui-layout-content">
                        {{ Breadcrumbs::render() }}
                        @include('includes.partials.messages')
                        <div class="cui-utils-content">
                            @yield('content')
                        </div>
                    </div>
                @endif
        </cui-menu-header>
    </div><!--app-body-->

    <div class="cui-layout-footer">
        @include('backend.includes.footer')
    </div>
    <!-- Scripts -->
    @stack('before-scripts')
    {!! script(mix('js/manifest.js')) !!}
    {!! script(mix('js/vendor.js')) !!}
    {!! script(mix('js/vue.js')) !!}
    {!! script(mix('js/backend.js')) !!}
    @stack('after-scripts')
</body>
</html>