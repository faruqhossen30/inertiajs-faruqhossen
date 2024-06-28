<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UserController extends Controller
{
   /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate();
        return Inertia::render('Admin/Users/Index',['users'=> $users]);
    }


       /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::firstWhere('id',$id);
        return Inertia::render('Admin/Users/show',['user'=> $user] );
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::where('id', $id)->delete();
        return redirect()->route('users');
    }
}
