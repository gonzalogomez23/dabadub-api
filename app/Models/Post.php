<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    // protected static function booted()
    // {
    //     static::creating(function ($post) {
    //         $post->slug = Str::slug($post->title);
    //     });
    // }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'slug',
        'description',
        'content',
        'image',
        'published',
    ];

    // public function category()
    // {
    //     return $this->belongsTo(Category::class);
    // }

    public function getRouteKeyName()
    {
        return 'slug';
    }

}
