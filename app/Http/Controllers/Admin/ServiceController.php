<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $services = Service::query();

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $services = $services->where('name', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $services = $services->orderBy('created_at', $orderby);
        }

        $services = $services->paginate($show ?? 10)->appends($_GET);
        // $services = Service::paginate(10);
        return Inertia::render('Admin/Service/Index',['services'=> $services]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $packages = Package::get();
        return Inertia::render('Admin/Service/Create',['packages'=>$packages]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $request->all();
        // $request->validate([
        //     'title'=> 'required',
        //     'short_description'=> 'required',
        // ]);

        $data=[
            'title'=> $request->title,
            'slug'=> Str::slug($request->name),
            'short_description'=> $request->short_description,
            'description_code'=> $request->description_code,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('service');
            $data['thumbnail'] = $file_name;
        }

        Service::create($data);
        return to_route('service.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
