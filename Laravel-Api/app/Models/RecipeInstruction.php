<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeInstruction extends Model
{
    use HasFactory;

    protected $fillable = ['recipe_id', 'instruction_content'];

    public function Recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
