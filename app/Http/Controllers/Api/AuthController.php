<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::guard('api')->login($user);

        return response()->json([
            'message' => 'Signup successful',
            'access_token' => $token,
            'user' => $user,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        Log::info('Credentials received:', $credentials);

        if (!$token = Auth::guard('api')->attempt($credentials)) {
            Log::info('Auth attempt failed.', $credentials);
            return response()->json([
                'errors' => [
                    'general' => ['Email or password is incorrect']
                ]
            ], 401);
        }

        Log::info('Token generated:', [$token]);

        return response()->json([
            'message' => 'Login successful',
            'access_token' => $token,
            'user' => auth('api')->user(),
        ]);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Logged out successfully']);
    }
}