<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecipeRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'name' => 'required',
        ];

        // Check if it's an update request
        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            // Make the photo field optional
            $rules['photo'] = 'sometimes';
        } else {
            // For create requests, require the photo field
            $rules['photo'] = 'required';
        }

        return $rules;
    }
}
