<?php

namespace Database\Seeders;

use App\Models\PaymentGateway;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Faruq Hossen',
            'email' => 'user@gmail.com',
            'is_admin' => false,
            'is_user' => true,
            'password' => Hash::make('123')
        ]);
    }
}
