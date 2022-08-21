<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $table = 'reports';
    protected $fillable = [
        'tank_id',
        'reporter',
        'temp',
        'volume',
        'datetime',
        'notes',
        'status',
    ];

    public function tank() {
        return $this->belongsTo(Tank::class, 'tank_id');
    }
}
