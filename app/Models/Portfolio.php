<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Portfolio extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'description_code',
        'thumbnail',
        'author_id',
        'status'
    ];

    public function categories(){
        return $this->belongsToMany(Category::class,'portfolio_categories');
    }

    public function tools(){
        return $this->belongsToMany(Tool::class,'portfolio_tools');
    }
}
