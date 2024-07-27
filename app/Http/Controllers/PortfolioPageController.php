<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioPageController extends Controller
{
    function index(): Response
    {
        $category = null;
        if (isset($_GET['category']) && $_GET['category']) {
            $category = $_GET['category'];
        }

        $portfolios = Portfolio::when($category, function ($query) use ($category) {
            return $query->whereHas('categories', function ($q) use ($category) {
                return $q->where('category_id', $category);
            });
        })->paginate(6);

        return Inertia::render('PortfolioPage', ['portfolios' => $portfolios, 'request' => $_GET]);
    }
    function singlePortfolio(string $slug): Response
    {
        $portfolio = Portfolio::firstWhere('slug', $slug);
        return Inertia::render('SinglePortfolio', ['portfolio' => $portfolio]);
    }
}
