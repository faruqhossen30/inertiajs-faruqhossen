<?php

namespace App\Http\Controllers;

use App\Models\Blog\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogpageController extends Controller
{
    function index(): Response
    {
        $category = null;
        if (isset($_GET['category']) && $_GET['category']) {
            $category = $_GET['category'];
        }

        $blogs = Blog::paginate(10);
        return Inertia::render('BlogPage', ['blogs' => $blogs, 'request' => $_GET]);
    }
    function singleBlog(): Response
    {
        return Inertia::render('SingleBlog');
    }
}
