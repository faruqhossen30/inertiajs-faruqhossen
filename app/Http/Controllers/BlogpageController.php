<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogpageController extends Controller
{
    function index() : Response {
        return Inertia::render('BlogPage');
    }
}
