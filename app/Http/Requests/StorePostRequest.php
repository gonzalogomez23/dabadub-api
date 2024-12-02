<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'title' => ['required', 'string', 'max:255', 'unique:posts,title'],
            'description' => ['required', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'published' => ['nullable', 'boolean'],
        ];
    }

    // public function messages()
    // {
    //     return [
    //         'title.required' => 'The title is required.',
    //         'title.unique' => 'This title has already been used.',
    //         'description.required' => 'The description is required.',
    //         'content.required' => 'The content is required.',
    //     ];
    // }
}
