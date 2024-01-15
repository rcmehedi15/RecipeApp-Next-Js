"use client"
import React, { useState } from 'react';
import ingredients from '../../../ingredients.json'; // Importing ingredient options
import Select from 'react-select';

const Recipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
    instructions: '',
    optionalMedia: null,
  });

  const [validationErrors, setValidationErrors] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const handleIngredientsChange = (selectedIngredients) => {
    setRecipe({ ...recipe, ingredients: selectedIngredients });
    setValidationErrors({ ...validationErrors, ingredients: '' });
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setRecipe({ ...recipe, optionalMedia: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let isValid = true;
    const newValidationErrors = { ...validationErrors };

    if (recipe.title.trim() === '') {
      isValid = false;
      newValidationErrors.title = 'Title is required';
    }

    if (recipe.ingredients.length === 0) {
      isValid = false;
      newValidationErrors.ingredients = 'Select at least one ingredient';
    }

    if (recipe.instructions.trim() === '') {
      isValid = false;
      newValidationErrors.instructions = 'Instructions are required';
    }

    if (!isValid) {
      setValidationErrors(newValidationErrors);
      return;
    }

    // Handle form submission
    // Add your logic here to handle the recipe submission, e.g., API call

    // Reset form after submission
    setRecipe({
      title: '',
      ingredients: [],
      instructions: '',
      optionalMedia: null,
    });
    setValidationErrors({
      title: '',
      ingredients: '',
      instructions: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-8 bg-white shadow-lg rounded">
  <div className="mb-4">
    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
    <input
      type="text"
      id="title"
      name="title"
      value={recipe.title}
      onChange={handleInputChange}
      className={`w-full px-3 py-2 border ${validationErrors.title ? 'border-red-500' : 'border-gray-300'} rounded`}
    />
    <span className="text-red-500 text-xs italic">{validationErrors.title}</span>
  </div>

  <div className="mb-4">
  <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">
    Ingredients:
  </label>
  <Select
    id="ingredients"
    name="ingredients"
    isMulti
    value={recipe.ingredients.map((ingredient) => ({ value: ingredient.label, label: ingredient.label }))}
    options={ingredients.map((ingredient) => ({ value: ingredient.label, label: ingredient.label }))}
    onChange={(selectedOptions) => {
      const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
      handleIngredientsChange(selectedValues);
    }}
    className={`w-full ${validationErrors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded`}
  />
  <span className="text-red-500 text-xs italic">{validationErrors.ingredients}</span>
</div>

  <div className="mb-4">
    <label htmlFor="instructions" className="block text-gray-700 text-sm font-bold mb-2">Instructions:</label>
    <textarea
      id="instructions"
      name="instructions"
      value={recipe.instructions}
      onChange={handleInputChange}
      className={`w-full px-3 py-2 border ${validationErrors.instructions ? 'border-red-500' : 'border-gray-300'} rounded`}
    ></textarea>
    <span className="text-red-500 text-xs italic">{validationErrors.instructions}</span>
  </div>

  <div className="mb-4">
    <label htmlFor="optionalMedia" className="block text-gray-700 text-sm font-bold mb-2">Optional Image/Video:</label>
    <input
      type="file"
      id="optionalMedia"
      accept="image/*,video/*"
      onChange={handleMediaChange}
      className="w-full"
    />
  </div>

  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Submit</button>
</form>

  );
};

export default Recipe;
