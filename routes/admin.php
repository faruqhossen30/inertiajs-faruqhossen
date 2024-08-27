<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ServiceController;

use App\Http\Controllers\Admin\Blog\BlogcategoryController;
use App\Http\Controllers\Admin\PackageController;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\ToolController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('admin/login', [AuthenticatedSessionController::class, 'create'])->name('adminlogin');
Route::post('admin/login', [AuthenticatedSessionController::class, 'store']);

Route::group(['prefix' => 'admin', 'middleware' => ['auth','admin']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // Service
    Route::resource('service', ServiceController::class);
    Route::resource('category', CategoryController::class);
    Route::post('category/{id}', [CategoryController::class, 'update'])->name('categoryupdate');

    Route::resource('tools', ToolController::class);
    Route::post('tools/{id}', [ToolController::class, 'update'])->name('toolupdate');

    Route::resource('skill', SkillController::class);
    Route::post('skill/{id}', [SkillController::class, 'update'])->name('skillupdate');

    Route::resource('portfolio', PortfolioController::class);
    Route::post('portfolio/{id}', [PortfolioController::class, 'update'])->name('portfolioupdate');

    Route::resource('blogcategory', BlogcategoryController::class);
    Route::resource('package', PackageController::class);
    Route::get('user/list', [UserController::class,'index'])->name('users');
    Route::get('user/show/{id}', [UserController::class,'show'])->name('user.show');
    Route::delete('user/delete/{id}', [UserController::class,'destroy'])->name('user.destroy');
});
