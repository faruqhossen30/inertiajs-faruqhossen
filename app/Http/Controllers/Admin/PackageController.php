<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $packages = Package::query();

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $packages = $packages->where('name', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $packages = $packages->orderBy('created_at', $orderby);
        }

        $packages = $packages->paginate($show ?? 10)->appends($_GET);
        // $packages = Package::paginate();
        return Inertia::render('Admin/Package/Index',['packages'=> $packages]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return Inertia::render('Admin/Package/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name'        => 'required',
            'description' => 'required'
        ]);

        $data=[
            'name'        => $request->name,
            'slug'        => Str::slug($request->name),
            'description' => $request->description,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('package');
            $data['thumbnail'] = $file_name;
        }

        Package::create($data);

        return to_route('package.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $pac = Package::where('id', $id)->first();
        return Inertia::render('Admin/Package/Edit', ['pac'=>$pac]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name'        => 'required',
            'description' => 'required'
        ]);

        $data = [
            'name'=> $request->name,
            'slug'=> Str::slug($request->name),
            'description' => $request->description,
        ];

        if($request->file('thumbnail')){
            $file_name = $request->file('thumbnail')->store('thumbnail/package');
            $data['thumbnail'] = $file_name;
        }

        Package::firstwhere('id', $id)->update($data);
        return to_route('package.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Package::where('id', $id)->delete();
        return redirect()->route('package.index');
    }
}
