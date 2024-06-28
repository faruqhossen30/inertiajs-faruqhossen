<?php

namespace Database\Seeders;

use App\Models\Package;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* `agency`.`packages` */
        $packages = array(
            array('id' => '1', 'name' => 'Basic', 'slug' => 'basic', 'description' => NULL, 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '2', 'name' => 'Standard', 'slug' => 'standard', 'description' => NULL, 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '3', 'name' => 'Premium', 'slug' => 'premium', 'description' => NULL, 'created_at' => NULL, 'updated_at' => NULL)
        );

        Package::insert($packages);
        
    }
}
