<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

use App\Models\Report;

class ReportController extends Controller
{
    public function store(Request $request){
        $input = $request->validate([
            'reporter' => ['required'],
            'temp' => ['required', 'min:0'],
            'volume' => ['required', 'min:0'],
            'datetime' => ['required'],
            'status' => ['required'],
        ]);

        Report::create($request->all());
        
        return Redirect::back();
    }
}
