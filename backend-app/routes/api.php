<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/animals', [AnimalsController::class, 'index']);
Route::get('/animals', [AnimalsController::class, 'store']);
Route::get('/animals/{id}', [AnimalsController::class, 'update']);
Route::get('/animals/{id}', [AnimalsController::class, 'delete']);
