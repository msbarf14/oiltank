<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use App\Http\Controllers\TankController;

Route::get('/', function () {
   return Redirect::to('/login');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/tank', [TankController::class, 'index'])->name('tank');
    Route::get('/tank/detail/{tank:id}', [TankController::class, 'show'])->name('tank.detail');
    Route::post('/tank', [TankController::class, 'store'])->name('tank.store');
});
