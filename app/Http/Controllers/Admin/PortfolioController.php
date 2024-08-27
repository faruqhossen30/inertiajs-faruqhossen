<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Portfolio;
use App\Models\PortfolioCategory;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        $portfolios = Portfolio::query();

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $portfolios = $portfolios->where('name', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $portfolios = $portfolios->orderBy('created_at', $orderby);
        }

        $portfolios = $portfolios->paginate($show ?? 10)->appends($_GET);
        // $portfolios = Portfolio::paginate(10);
        return Inertia::render('Admin/Portfolio/Index', ['portfolios' => $portfolios]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        $tools = Tool::get();
        return Inertia::render('Admin/Portfolio/Create', ['categories' => $categories, 'tools' => $tools]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        DB::beginTransaction();
        try {
            $data = [
                'title' => $request->title,
                'slug' => Str::slug($request->title),
                'description' => $request->description,
                'author_id' => Auth::user()->id,
                'status' => $request->status
            ];

            if ($request->file('thumbnail')) {
                $file_name = $request->file('thumbnail')->store('portfolio');
                $data['thumbnail'] = $file_name;
            }

            $portfolio = Portfolio::create($data);
            $portfolio->categories()->attach($request->category_ids);
            $portfolio->tools()->attach($request->tool_ids);

            DB::commit();
            return to_route('portfolio.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $portfolio = Portfolio::with('categories')->firstWhere('id', $id);
        return $portfolio;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categories = Category::get();
        $tool = Tool::get();
        $portfolio = Portfolio::firstWhere('id', $id);

        return Inertia::render('Admin/Portfolio/Edit', ['portfolio' => $portfolio, 'categories' => $categories,'tool' => $tool]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        // return $request->all();
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        try {
            $data = [
                'title'       => $request->title,
                'slug'        => Str::slug($request->title),
                'description' => $request->description,
                'status'      => intval($request->status)
            ];

            $portfolio = Portfolio::firstwhere('id', $id);

            if ($request->file('thumbnail')) {
                if ($portfolio->thumbnail != null && Storage::exists($portfolio->thumbnail)) {
                    Storage::delete($portfolio->thumbnail);
                }

                $file_name = $request->file('thumbnail')->store('portfolio');
                $data['thumbnail'] = $file_name;
            }

            if (!empty($request->category_ids)) {
                $portfolio->categories()->detach();
                $portfolio->categories()->attach($request->category_ids);
            }

            if (!empty($request->tool_ids)) {
                $portfolio->tools()->detach();
                $portfolio->tools()->attach($request->tool_ids);
            }

            $portfolio->update($data);
        } catch (\Throwable $th) {
            //throw $th;
        }

        return to_route('portfolio.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $portfolio = Portfolio::firstwhere('id', $id);

        if ($portfolio->thumbnail != null && Storage::exists($portfolio->thumbnail)) {
            Storage::delete($portfolio->thumbnail);
        }
        $portfolio->delete();
        return redirect()->route('portfolio.index');
    }
}
