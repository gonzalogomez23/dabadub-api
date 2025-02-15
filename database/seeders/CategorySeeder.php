<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('categories')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('categories')->insert([
            [
                'title' => 'Technology',
                'slug' => Str::slug('Technology'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Marketing and sales',
                'slug' => Str::slug('Marketing and sales'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Arts & Design',
                'slug' => Str::slug('Arts & Design'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Finance and investment',
                'slug' => Str::slug('Finance and investment'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Productivity',
                'slug' => Str::slug('Productivity'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Psychology',
                'slug' => Str::slug('Psychology'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Health',
                'slug' => Str::slug('Health'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
        
    }
}


