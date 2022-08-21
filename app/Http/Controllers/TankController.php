<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use App\Models\Tank;
class TankController extends Controller
{
    public function index() {
        $tank = Tank::all();

        return Inertia::render('Tank/Index', [
            'data' => $tank
        ]);
    }

    public function show(Tank $tank) {
        $report = $tank->report->transform(fn($i) => [
            'id' => $i->id,
            'reporter' => $i->reporter,
            'datetime' => $i->datetime,
            'volume' => $i->volume,
            'temp' => $i->temp,
            'notes' => $i->notes,
            'status' => $i->status,
        ]);

        return Inertia::render('Tank/Detail', [
            'tank' => $tank,
            'report' => $report
        ]);
    }

    public function store(Request $request) {
        $input = $request->validate([
            'name' => ['required'],
            'volume' => ['required','min:0'],
            'capacity' => ['required', 'min:0'],
            'max_volume' => ['required', 'min:0'],
            'temp' => ['required', 'min:0'],
        ]);

        Tank::create([
            'name' => $input['name'],
            'volume' => $input['volume'],
            'capacity' => $input['capacity'],
            'max_volume' => $input['max_volume'],
            'temp' => $input['temp'],
        ]);

        return Redirect::to(route('tank'));
    }
}
