// Import necessary dependencies and modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap'; // Importing UI components from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js
import { addIngredientToRecipe } from '../../utils/data/ingredientData'; // Importing a function to add a book to a customer
import { getRecipe } from '../../utils/data/recipeData'; // Importing a function to get customers by store ID
// import { useAuth } from '../../utils/context/authContext'; // Importing authentication context

// Initial state for the current customer
const initialState = {
  recipe_id: 0,
};

// React functional component
export default function AddToRecipe({ id, obj }) {
  // State variables
  const [recipes, setRecipes] = useState([]); // State for storing customer data
  const [currentRecipe, setCurrentRecipe] = useState(initialState); // State for the current customer
  const router = useRouter(); // Router instance from Next.js
  // const { user } = useAuth(); // Using the user object from the authentication context

  const showRecipes = () => {
    getRecipe().then((data) => setRecipes(data));
  };
  useEffect(() => {
    showRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update 'currentCustomer' state by merging the new value for the changed input field
    setCurrentRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare payload for adding book to customer
    const payload = {
      recipeId: Number(currentRecipe.recipeId),
      ingredientId: Number(id),
    };
    // Call the 'addBookToCustomer' function and navigate to customer's page after completion
    addIngredientToRecipe(id, payload).then(() => router.push(`/recipes/${currentRecipe.recipeId}`));
  };

  // JSX to render the component
  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Customer">
        <Form.Select
          aria-label="Customer"
          name="customerId"
          className="mb-3"
          onChange={handleChange}
          value={currentRecipe.recipeId}
          required
        >
          <option value="">Select a Recipe</option>
          {/* Map over customers and create an option element for each */}
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
        <Button type="submit">Add To Customer</Button>
      </div>
    </Form>
  );
}

// PropTypes for the component's props
AddToRecipe.propTypes = {
  id: PropTypes.number.isRequired, // 'id' is a required number
  obj: PropTypes.shape({
    id: PropTypes.number,
    recipe_id: PropTypes.number,
    ingredient_id: PropTypes.number,
  }),
};

// Default props for the component
AddToRecipe.defaultProps = {
  obj: initialState, // Default 'obj' is the initial state object
};

// Summary: this component creates a form that enables users to associate a book with a selected customer by choosing the customer from a dropdown list. The form submission triggers an action to add the book to the chosen customer, and the component provides a user interface for this process.
