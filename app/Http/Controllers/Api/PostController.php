<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostCollection;
use App\Http\Requests\StorePostRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        $categorySlug = $request->query('category_slug');
        $posts = Post::query()
            // ->with('category')
            ->when($categorySlug, function ($query, $categorySlug) {
                $query->whereHas('category', function ($q) use ($categorySlug) {
                    $q->where('slug', $categorySlug);
                });
            })
            ->get();
            $posts = new PostCollection($posts);
            // $posts = PostResource::collection($posts);
            // dd($posts);
        return $posts;
    }

    

    /**
     * Store a newly created resource in storage.
     */

    public function store(StorePostRequest $request)
    {
        $data = $request->validated();

        try {
            if ($request->hasFile('image')) {
                $data['image'] = $request->file('image')->store('posts', 'public');
            }

            $data['slug'] = Str::slug($data['title']);

            $post = Post::create($data);
            
            return response()->json([
                'message' => 'Post created successfully.',
                'data' => $post,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create post.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $post = Post::where('slug', $slug)->firstOrFail();
        return new PostResource($post);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {

        $data = $request->validated();

        try {
            if ($request->hasFile('image')) {
                if ($post->image) {
                    Storage::disk('public')->delete($post->image);
                }

                $data['image'] = $request->file('image')->store('posts', 'public');
            }

            if (isset($data['title']) && $data['title'] !== $post->title) {
                $data['slug'] = Str::slug($data['title']);
            }

            $post->update($data);

            return response()->json([
                'message' => 'Post updated successfully.',
                'data' => $post,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to update post.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        try {
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }

            $post->delete();

            return response()->json([
                'message' => 'Post deleted successfully.'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to delete post.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
