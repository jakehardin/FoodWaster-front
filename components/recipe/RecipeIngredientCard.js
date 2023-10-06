import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { removeIngredientFromRecipe } from '../../utils/data/ingredientData';

function RecipeIngredientCard({ recipeIngredientObj, onUpdate }) {
  const recipeId = recipeIngredientObj.recipe.id;
  const ingredientId = recipeIngredientObj.ingredient.id;

  const removeIngredient = () => {
    removeIngredientFromRecipe(ingredientId, recipeId).then(() => onUpdate());
  };
  return (
    <Card className="card-design">
      {/* <Card.Img variant="top" src={recipeIngredientObj.ingredient.image} alt={customerBookObj.book.title} style={{ width: '200px', height: 'auto' }} /> */}
      <Card.Body>
        <Card.Title>{recipeIngredientObj.ingredient.name}</Card.Title>
        {/* <h3>{recipeIngredientObj.book.publisher}</h3> */}
        <Button onClick={removeIngredient}>Remove</Button> {/* Button to remove the book */}
      </Card.Body>
    </Card>
  );
}

// PropTypes
RecipeIngredientCard.propTypes = {
  recipeIngredientObj: PropTypes.shape({
    ingredient: PropTypes.shape({
      // image_url: PropTypes.string.isRequired, // 'imageUrl' is a required string
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    recipe: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RecipeIngredientCard;
