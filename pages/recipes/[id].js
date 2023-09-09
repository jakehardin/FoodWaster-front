/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; // Importing React, 'useState', and 'useEffect'
import { useRouter } from 'next/router'; // Importing 'useRouter' hook from 'next/router'
import { getSingleRecipe, getRecipeIngredients } from '../../utils/data/recipeData'; // Importing functions for fetching customer and customer's books data
import RecipeIngredientCard from '../../components/recipe/RecipeIngredientCard'; // Importing the 'CustomerBookCard' component

// Defining the 'ViewCustomer' component
const ViewRecipe = () => {
  const router = useRouter(); // Initializing the 'useRouter' hook
  const [recipeDetails, setRecipeDetails] = useState({}); // Initializing state for customer details
  const [recipeIngredients, setRecipeIngredients] = useState([]); // Initializing state for customer's books
  const { id } = router.query; // Extracting the 'id' parameter from the router's query

  // Effect to fetch and set the customer details
  useEffect(() => {
    getSingleRecipe(id).then((productData) => {
      setRecipeDetails(productData); // Updating 'customerDetails' state with fetched data
    });
  }, [id]);

  // Function to fetch customer's books and update state
  // Declared as async to indicate that it contains asynchronous operations that involve promises.
  const getIngredientsByRecipe = async () => {
    const ingredients = await getRecipeIngredients(id);
    // The await keyword pauses the execution of the function until the promise returned by getCustomerBooks(id) is resolved or rejected
    setRecipeIngredients(ingredients); // Updating 'customerBooks' state with fetched data
    // Once the promise is resolved and the data is available, you use the resolved value (books) to update the customerBooks state using the setCustomerBooks function
  };

  // Running the 'getBooksByCustomer' function when 'id' changes
  useEffect(() => {
    getIngredientsByRecipe();
  }, [id]);

  useEffect(() => {
    // Update document title with the book's title when 'customerDetails' changes
    if (recipeDetails) {
      document.title = `${recipeDetails.name}!`;
    }
  }, [recipeDetails]); // Re-run effect whenever 'customerDetails' changes

  // JSX to render the 'ViewCustomer' component
  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          {/* Displaying customer details */}
          <h3>
            {recipeDetails.name}
          </h3>
          <h5>{recipeDetails.description}</h5>
          <h3>Ingredients:</h3>
          {/* Mapping through customer's books and rendering 'CustomerBookCard' components */}
          {recipeIngredients.map((recipeIngredient) => (
            <section key={`recipeIngredient--${recipeIngredient.id}`} className="customerBooks">
              {/* Rendering 'CustomerBookCard' component and passing customer book details and 'getBooksByCustomer' as props */}
              <RecipeIngredientCard recipeIngredientObj={recipeIngredient} onUpdate={getIngredientsByRecipe} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewRecipe;
