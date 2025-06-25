<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\LoginRequest;
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

        $token = Auth::login($user);

        return response()->json([
            'access_token' => $token,
            'user'         => $user,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }

        return response()->json([
            'access_token' => $token,
            // 'token_type'   => 'bearer',
            // 'expires_in'   => JWTAuth::factory()->getTTL() * 60,
            'user'         => auth()->user(),
        ]);
    }

    public function logout()
    {
        // Auth::logout();
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Session closed successfully']);
    }
}
