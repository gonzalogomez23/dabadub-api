<?php

use App\Models\Post;
use Illuminate\Http\Request;
// use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
// use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // });
    Route::get('/user', function () {
        return response()->json(auth()->user());
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    // Route::apiResource('/users', UserController::class);

    // Route::post('/posts', [PostController::class, 'store']);
    // Route::put('/posts/{post}', [PostController::class, 'update']);
    // Route::delete('/posts/{post}', [PostController::class, 'destroy']);
});

Route::apiResource('/posts', PostController::class)->only(['index', 'show']);

Route::apiResource('/categories', CategoryController::class);