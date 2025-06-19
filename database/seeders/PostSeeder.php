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
                'title' => 'The Future of Artificial Intelligence',
                'slug' => Str::slug('The Future of Artificial Intelligence'),
                'description' => 'How AI is shaping industries and what to expect in the coming years.',
                'content' => 'Artificial intelligence continues to evolve, transforming businesses, healthcare, and everyday life. Discover the key advancements in AI and their potential impact.',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 1, // Technology
            ],
            [
                'title' => 'Top Digital Marketing Strategies for 2025',
                'slug' => Str::slug('Top Digital Marketing Strategies for 2025'),
                'description' => 'Stay ahead of the competition with these cutting-edge marketing techniques.',
                'content' => 'From AI-driven advertising to influencer marketing, the digital marketing landscape is constantly changing. Learn the most effective strategies for 2025.',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 2, // Marketing and Sales
            ],
            [
                'title' => 'The Psychology Behind Consumer Decisions',
                'slug' => Str::slug('The Psychology Behind Consumer Decisions'),
                'description' => 'Understanding the psychological triggers that influence buying behavior.',
                'content' => 'Cognitive biases, emotions, and social proof play a major role in purchasing decisions. Explore how psychology shapes consumer behavior.',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 6, // Psychology
            ],
            [
                'title' => 'How to Improve Productivity with Simple Habits',
                'slug' => Str::slug('How to Improve Productivity with Simple Habits'),
                'description' => 'Practical tips to get more done in less time.',
                'content' => 'Small changes in daily routines can lead to significant improvements in productivity. Learn how to optimize your workflow and focus better.',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 5, // Productivity
            ],
            [
                'title' => 'The Impact of Art and Design in Branding',
                'slug' => Str::slug('The Impact of Art and Design in Branding'),
                'description' => 'Why visual identity is crucial for brand success.',
                'content' => 'Colors, typography, and composition play a vital role in brand perception. Discover how great design can boost a company’s reputation.',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 3, // Arts & Design
            ],
            [
                'title' => 'The Role of Mental Health in Workplace Productivity',
                'slug' => Str::slug('The Role of Mental Health in Workplace Productivity'),
                'description' => 'How mental well-being affects efficiency and success.',
                'content' => 'Burnout and stress can reduce workplace performance. Learn strategies to maintain mental health while excelling in your career.',
                'published' => true,
                'created_at' => now(),
                'updated_at' => now(),
                'category_id' => 6, // Psychology
            ],
        ]);
        
    }
}
