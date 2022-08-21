<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TankController extends Controller
{
    public function index() {
        return Inertia::render('Tank/Index');
    }

    public function show() {
        return Inertia::render('Tank/Detail');
    }
}
