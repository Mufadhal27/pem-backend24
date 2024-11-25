<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Models\User;
use Illuminate\Support\facedes\Hash;
use Illuminate\Support\facedes\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {
        $input = [
            'nama' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        $user = User::create($input);

        $data = [
            'message' => 'User is created succesfully'
        ];

        return response()->json($data, 200);
    }

    #membuat fitur login

    public function login(Request $request) {
        #Menangkap input user 
        $input = [
            'email' => $request->email, 
            'password' => $request->password
        ];
        
        #Melakukan autentikasi
        if (Auth::attempt($input)) {
            #Membuat token  
            $token = Auth::user()->createToken('auth_token');
            
            $data = [
                'message' => 'Login successfully', 
                'token' => $token->plainTextToken 
            ];
            
            #Mengembalikah response JSON 
            return response()->json($data, 200);
        } else {
            $data = [ 
                'message' => 'Username or Password is wrong'
            ];
            
            return response()->json($data, 401);
        }
    }
}