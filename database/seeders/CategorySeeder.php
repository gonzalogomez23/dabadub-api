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
                'title' => 'Living spaces',
                'slug' => Str::slug('Living spaces'),
                'icon' => 'HomeModernIcon',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Work',
                'slug' => Str::slug('Work'),
                'icon' => 'BriefcaseIcon',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Procedure',
                'slug' => Str::slug('Procedure'),
                'icon' => 'ClipboardDocumentListIcon',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
