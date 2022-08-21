<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tank extends Model
{
    use HasFactory;

    protected $table = 'tanks';
    protected $fillable = [
        'name',
        'volume',
        'capacity',
        'max_volume',
        'temp',
        'status',
    ];

}
