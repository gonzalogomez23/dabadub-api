<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->truncate();

        DB::table('posts')->insert([
            [
                'title' => 'How to Move to Dublin',
                'slug' => Str::slug('How to Move to Dublin'),
                'description' => 'A complete guide to moving to Dublin, Ireland.',
                'content' => 'Moving to Dublin can be an exciting but challenging experience. Here is a step-by-step guide to help you settle in.',
                'image' => 'move-to-dublin.jpg',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 1,
            ],
            [
                'title' => 'Top 10 Cafes in Dublin',
                'slug' => Str::slug('Top 10 Cafes in Dublin'),
                'description' => 'Discover the best places to grab a coffee in Dublin.',
                'content' => 'From cozy corners to vibrant spaces, here are the top cafes in Dublin to satisfy your caffeine cravings.',
                'image' => 'top-cafes-dublin.jpg',
                'published' => true,
                'category_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Job Hunting in Ireland',
                'slug' => Str::slug('Job Hunting in Ireland'),
                'description' => 'Tips and tricks to find a job in Ireland quickly.',
                'content' => 'The Irish job market is competitive, but with the right approach, you can secure a great job. Here’s how.',
                'image' => 'job-hunting-ireland.jpg',
                'published' => true,
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
