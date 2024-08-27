<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tools = Tool::query();

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $tools = $tools->where('name', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $tools = $tools->orderBy('created_at', $orderby);
        }

        $tools = $tools->paginate($show ?? 10)->appends($_GET);

        // $tools = Tool::paginate(10);
        return Inertia::render('Admin/Tool/Index', ['tools' => $tools]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Tool/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name'        => $request->name,
            'slug'        => Str::slug($request->name),
            'category_id' => $request->category_id,
            'author_id'   => Auth::user()->id,
            'status'      => $request->status,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('category');
            $data['thumbnail'] = $file_name;
        }

        Tool::create($data);

        return to_route('tools.index');
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
        $tool = Tool::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/Tool/Edit', ['tool' => $tool,'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name'        => $request->name,
            'slug'        => Str::slug($request->name),
            'category_id' => $request->category_id,
            'author_id'   => Auth::user()->id,
            'status'      => $request->status,
        ];
        $tool = Tool::firstwhere('id', $id);

        if ($request->file('thumbnail')) {
            if ($tool->thumbnail != null && Storage::exists($tool->thumbnail)) {
                Storage::delete($tool->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('tool');
            $data['thumbnail'] = $file_name;
        }

        $tool->update($data);

        return to_route('tools.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tool = Tool::firstwhere('id', $id);

        if ($tool->thumbnail != null && Storage::exists($tool->thumbnail)) {
            Storage::delete($tool->thumbnail);
        }
        $tool->delete();
        return redirect()->route('tools.index');
    }
}
