<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;


class GoogleauthController extends Controller
{
    function redirect()
    {
        return Socialite::driver('google');
    }
    function callbackGoogle()
    {
        try {
            $google_user = Socialite::driver('google')->user();

            $user = User::firstWhere('google_id', $google_user->getId());
            if (!$user) {
                $new_user = User::create([
                    'name' => $google_user->getName(),
                    'email' => $google_user->getEmail(),
                    'google_id' => $google_user->getId(),
                ]);

                Auth::login($new_user);
                return 'welcome';
            } else {
                Auth::login($user);
                return 'welcome';
            }
        } catch (\Throwable $th) {
        }
    }
}
