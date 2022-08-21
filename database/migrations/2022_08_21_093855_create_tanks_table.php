<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tanks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('volume')->default(0);
            $table->bigInteger('capacity')->default(0);
            $table->bigInteger('max_volume')->default(0);
            $table->integer('temp')->default(0);
            $table->enum('status', ['normal', 'refuelling', 'less_target'])->default('normal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tanks');
    }
};
