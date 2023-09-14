/* eslint-disable @next/next/no-img-element */ // Disable specific ESLint rule for the next line
import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect from React
import { useRouter } from 'next/router'; // Importing the router from Next.js
import { getSingleIngredient } from '../../utils/data/ingredientData'; // Importing function for fetching book data
import AddToRecipe from '../../components/ingredient/addToRecipe'; // Importing the 'AddToCustomer' component

// React functional component for viewing book details
const ViewIngredient = () => {
  const router = useRouter(); // Router instance from Next.js
  const [ingredientDetails, setIngredientDetails] = useState({}); // State for book details
  const { id } = router.query; // Extracting 'id' from the query parameters (primary key for book)

  const ingredientId = +id; // Convert id to a number

  useEffect(() => {
    // Fetch book details using 'getSingleBook' function based on the extracted 'bookId'
    getSingleIngredient(ingredientId).then((ingredientData) => {
      setIngredientDetails(ingredientData); // Update 'bookDetails' state with fetched data
    });
  }, [ingredientId]); // Re-run effect whenever 'bookId' changes

  useEffect(() => {
    // Update document title with the book's title when 'bookDetails' changes
    if (ingredientDetails) {
      document.title = `${ingredientDetails.name}`;
    }
  }, [ingredientDetails]); // Re-run effect whenever 'bookDetails' changes

  return (
    <>
      {/* Container for book details */}
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          {/* Display book cover image */}
          {/* <img
            src={bookDetails.image_url}
            alt={`Comic book cover of ${bookDetails.title}`}
            style={{ width: '300px', height: 'auto' }}
          /> */}
          <h3>
            Name: {ingredientDetails.name}
          </h3>
          <p>Date: {ingredientDetails.date}</p>
        </div>
        {/* Include the 'AddToCustomer' component and pass the 'id' prop */}
        <AddToRecipe id={ingredientId} />
      </div>
    </>
  );
};

// Export the component as the default export
export default ViewIngredient;
