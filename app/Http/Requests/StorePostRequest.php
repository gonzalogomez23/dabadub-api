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
            'title' => ['required', 'string', 'min:3', 'max:255', 'unique:posts,title'],
            'description' => ['required', 'string', 'min:3', 'max:500'],
            'content' => ['required', 'string', 'min:3'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:4096'],
            'published' => ['nullable', 'boolean'],
            'category_id' => ['nullable', 'integer', 'exists:categories,id'],
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

    // Convert checkbox values before validation.
    protected function prepareForValidation()
    {
        // $this->merge([
        //     'published' => filter_var($this->published, FILTER_VALIDATE_BOOLEAN),
        // ]);
        if ($this->has('category_id') && $this->input('category_id') === '0') {
            $this->merge([
                'category_id' => null,
            ]);
        };
    }
}
