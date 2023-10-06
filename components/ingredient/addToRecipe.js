import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addIngredientToRecipe } from '../../utils/data/ingredientData';
import { getRecipe } from '../../utils/data/recipeData';

const initialState = {
  recipe_id: 0,
};

export default function AddToRecipe({ id, obj }) {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getRecipe().then(setRecipes);

    if (obj.id) {
      setCurrentRecipe({
        id: obj.id,
        recipeId: obj.recipe_id,
        ingredientId: obj.ingredient_id,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      recipeId: Number(currentRecipe.recipeId),
      ingredientId: Number(id),
    };
    addIngredientToRecipe(id, payload).then(() => router.push(`/recipes/${currentRecipe.recipeId}`));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Add to Recipe">
        <Form.Select
          aria-label="Add to Recipe"
          name="recipeId"
          className="mb-3"
          onChange={handleChange}
          value={currentRecipe.recipeId}
          required
        >
          <option value="">Select a Recipe</option>
          {/* Map over recipes */}
          {recipes.map((recipe) => (
            <option
              key={recipe.id}
              value={recipe.id}
            >
              {recipe.name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <div>
        <Button className="white-button" type="submit">Add To Recipe</Button>
      </div>
    </Form>
  );
}

// PropTypes
AddToRecipe.propTypes = {
  id: PropTypes.number.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    recipe_id: PropTypes.number,
    ingredient_id: PropTypes.number,
  }),
};

// Default Props
AddToRecipe.defaultProps = {
  obj: initialState,
};
