<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

use App\Models\Report;
use App\Models\Tank;

class ReportController extends Controller
{
    public function store(Request $request){

        $tank = Tank::findOrFail($request->tank_id);

        $input = $request->validate([
            'reporter' => ['required'],
            'temp' => ['required', 'min:0'],
            'volume' => ['required', 'min:0'],
            'datetime' => ['required'],
            'status' => ['required'],
        ]);

        Report::create($request->all());

        $tank->update([
            'volume' => $request->volume,
            'temp' => $request->temp,
            'status' => $request->status,
        ]);
        
        
        return Redirect::back();
    }
}
