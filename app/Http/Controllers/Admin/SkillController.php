<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::paginate(10);
        // return $skills;
        return Inertia::render('Admin/Skill/Index', ['skills' => $skills]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Skill/Create', ['categories' => $categories]);
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
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'category_id' => $request->category_id,
            'author_id' => Auth::user()->id,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('skill');
            $data['thumbnail'] = $file_name;
        }

        Skill::create($data);

        return to_route('skill.index');
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
        $categories = Category::get();
        $skill = Skill::where('id', $id)->first();
        return Inertia::render('Admin/Skill/Edit', ['skill' => $skill,'categories'=>$categories]);
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
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'category_id' => $request->category_id,
            'author_id' => Auth::user()->id,
        ];

        $skill = Skill::firstwhere('id', $id);
        if ($request->file('thumbnail')) {
            if ($skill->thumbnail != null && Storage::exists($skill->thumbnail)) {
                Storage::delete($skill->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('skill');
            $data['thumbnail'] = $file_name;
        }

        $skill->update($data);

        return to_route('skill.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $skill = Skill::firstwhere('id', $id);

        if ($skill->thumbnail != null && Storage::exists($skill->thumbnail)) {
            Storage::delete($skill->thumbnail);
        }
        $skill->delete();
        return redirect()->route('skill.index');
    }
}
