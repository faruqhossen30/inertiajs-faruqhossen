<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $categories = Category::query();

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $categories = $categories->where('name', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $categories = $categories->orderBy('created_at', $orderby);
        }

        $categories = $categories->paginate($show ?? 10)->appends($_GET);
        // $categories = Category::paginate(10);
        // return $categories;
        return Inertia::render('Admin/Category/Index', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request->all();

        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'author_id' => Auth::user()->id,
            'status' => $request->status,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('category');
            $data['thumbnail'] = $file_name;
        }

        Category::create($data);

        return to_route('category.index');
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
        $category = Category::where('id', $id)->first();
        return Inertia::render('Admin/Category/Edit', ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        // return $request->all();
        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'author_id' => Auth::user()->id,
            'status' => $request->status,
        ];

        $category = Category::firstwhere('id', $id);
        if ($request->file('thumbnail')) {
            if ($category->thumbnail != null && Storage::exists($category->thumbnail)) {
                Storage::delete($category->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('category');
            $data['thumbnail'] = $file_name;
        }

        Category::firstwhere('id', $id)->update($data);
        return to_route('category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Category::where('id', $id)->delete();
        return redirect()->route('category.index');
    }
}
