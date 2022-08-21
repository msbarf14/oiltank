<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use DB;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Tank;
use App\Models\Report;

class DashboardController extends Controller
{
    public function __invoke() {
        $today = today(); 

        $tank = Tank::with(['report' => function($i) {
            $today = today(); 
            return $i->whereMonth('datetime', '=', $today->month);
        }])->get();
        
        $dataset = [];

        foreach ($tank as $key => $value) {
            
            $reportSet = $value->report
            ->groupBy(function($date){
                return Carbon::parse($date->datetime)->format('d-m-Y');
            })->mapWithKeys(function($item, $key){
                return [$key => $item->sum('volume')];
            });

            $tempSet = $value->report
            ->groupBy(function($date){
                return Carbon::parse($date->datetime)->format('d-m-Y');
            })->mapWithKeys(function($item, $key){
                return [$key => $item->first()->temp];
            });;

            $dataset[] = [
                'label' => $value->name,
                'tank' => [
                    'id' =>  $value->id,
                    'volume' =>  $value->volume,
                    'temp' =>  $value->temp,
                    'max_volume' =>  $value->max_volume,
                    'cap' =>  $value->capacity,
                ],
                'data' => $reportSet,
                'temp' => $tempSet
            ];
        }
        
        return Inertia::render('Dashboard', [
            'tanks' => $dataset,
            'month' => $today->format('F, Y')
        ]);
    }
}
