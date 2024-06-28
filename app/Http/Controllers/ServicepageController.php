<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ServicepageController extends Controller
{
    function index() : Response {
        return Inertia::render('ServicePage');
    }

    function SingleService() : Response {
        return Inertia::render('Service');
    }
}
