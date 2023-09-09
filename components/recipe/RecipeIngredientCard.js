// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'; // Importing Card and Button components from react-bootstrap
import { removeIngredientFromRecipe } from '../../utils/data/ingredientData'; // Importing function to remove a book from a customer

// React functional component for rendering a customer's book card
function RecipeIngredientCard({ recipeIngredientObj, onUpdate }) {
  // Extracting customerId and bookId from customerBookObj to make code look more legible
  const recipeId = recipeIngredientObj.recipe.id;
  const ingredientId = recipeIngredientObj.ingredient.id;

  // Event handler for removing a book from the customer
  const removeIngredient = () => {
    // Call the 'removeBookFromCustomer' function to remove the book using bookId and customerId
    removeIngredientFromRecipe(ingredientId, recipeId).then(() => onUpdate());
  };

  // JSX to render the customer's book card
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

// PropTypes for the component's props
RecipeIngredientCard.propTypes = {
  // id: PropTypes.number.isRequired,
  recipeIngredientObj: PropTypes.shape({
    ingredient: PropTypes.shape({
      // image_url: PropTypes.string.isRequired, // 'imageUrl' is a required string
      // publisher: PropTypes.string.isRequired, // 'publisher' is a required string
      name: PropTypes.string.isRequired, // 'title' is a required string
      id: PropTypes.number.isRequired, // 'id' is a required number
    }),
    recipe: PropTypes.shape({
      id: PropTypes.number, // 'id' is a number
    }),
  }).isRequired, // 'customerBookObj' is a required object with specific nested shapes
  onUpdate: PropTypes.func.isRequired, // 'onUpdate' is a required function
};

export default RecipeIngredientCard;
