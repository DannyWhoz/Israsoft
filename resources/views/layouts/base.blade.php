<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @vite('resources/css/app.css')
    <title>Alloy Airsoft</title>
</head>
@if ($message = session()->get('success'))
    <x-elems.alert class="bg-[#02DF8F]">
        {{ $message }}
    </x-elems.alert>
@endif
@if ($message = session()->get('error'))
    <x-elems.alert class="bg-red-500">
        {{ $message }}
    </x-elems.alert>
@endif
<body class="h-[100vh] flex flex-col bg-[#111111]">
    <header>
        <x-page.container>
            @auth
                @if (Route::is('admin') || Route::is('players'))
                    @include('includes.admin-header')
                @else
                    @include('includes.header')
                @endif
            @endauth
            @guest
                @include('includes.header')
            @endguest
        </x-page.container>
    </header>

    <main class="flex items-center">
        <x-page.container>
            @yield('content')
        </x-page.container>
    </main>

    <footer>
        <x-page.container>
            @unless (Route::is('admin') || Route::is('players'))
                @include('includes.footer')
            @endunless
        </x-page.container>
    </footer>
</body>

@if (Route::is('game'))
    <script src="{{ asset('js/map.js') }}"></script>
@elseif (Route::is('admin'))
    <script src="{{ asset('js/admin.js') }}"></script>
@else
    <script src="{{ asset('js/main.js') }}"></script>
@endif

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5BMgYqx4r4s70XywuwblM-k1qi2ErGA0&callback=initMap"></script>
</html>
