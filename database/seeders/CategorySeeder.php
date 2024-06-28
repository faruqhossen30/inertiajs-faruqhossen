<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = array(
            array('id' => '1','name' => 'Web Design','slug' => 'web-design','thumbnail' => NULL,'author_id' => '1','status' => '1','created_at' => '2024-06-28 04:32:30','updated_at' => '2024-06-28 04:32:30'),
            array('id' => '2','name' => 'Wed Development','slug' => 'wed-development','thumbnail' => NULL,'author_id' => '1','status' => '1','created_at' => '2024-06-28 04:32:41','updated_at' => '2024-06-28 04:32:41'),
            array('id' => '3','name' => 'SEO','slug' => 'seo','thumbnail' => NULL,'author_id' => '1','status' => '1','created_at' => '2024-06-28 04:32:58','updated_at' => '2024-06-28 04:32:58'),
            array('id' => '4','name' => 'Bug Fix','slug' => 'bug-fix','thumbnail' => NULL,'author_id' => '1','status' => '1','created_at' => '2024-06-28 04:33:30','updated_at' => '2024-06-28 04:33:30'),
            array('id' => '5','name' => 'Theme Development','slug' => 'theme-development','thumbnail' => NULL,'author_id' => '1','status' => '1','created_at' => '2024-06-28 04:33:44','updated_at' => '2024-06-28 04:33:44')
          );

          Category::insert($categories);
    }
}
