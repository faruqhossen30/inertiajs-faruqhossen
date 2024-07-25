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

        // return $category;
        $portfolios = Portfolio::paginate();

        return Inertia::render('PortfolioPage', ['portfolios' => $portfolios]);
    }
    function singlePortfolio(string $slug): Response
    {
        $portfolio = Portfolio::firstWhere('slug', $slug);
        return Inertia::render('SinglePortfolio', ['portfolio' => $portfolio]);
    }
}
