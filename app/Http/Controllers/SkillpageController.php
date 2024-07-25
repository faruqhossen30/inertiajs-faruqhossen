<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SkillpageController extends Controller
{
    function index(): Response
    {
        $category = null;
        if( isset($_GET['category']) && $_GET['category']){
            $category = $_GET['category'];
        }

        // return $category;
        $skills = Skill::when($category, function($query) use($category){
            return $query->where('category_id', $category);
        })->paginate();

        return Inertia::render('SkillPage', ['skills' => $skills,'request'=>$_GET]);
    }
}
