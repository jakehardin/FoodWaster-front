/* eslint-disable @next/next/no-img-element */ // Disable specific ESLint rule for the next line
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleIngredient } from '../../utils/data/ingredientData';
import AddToRecipe from '../../components/ingredient/addToRecipe';

const ViewIngredient = () => {
  const router = useRouter();
  const [ingredientDetails, setIngredientDetails] = useState({});
  const { id } = router.query;

  const ingredientId = +id;

  useEffect(() => {
    getSingleIngredient(ingredientId).then((ingredientData) => {
      setIngredientDetails(ingredientData);
    });
  }, [ingredientId]);

  useEffect(() => {
    if (ingredientDetails) {
      document.title = `${ingredientDetails.name}`;
    }
  }, [ingredientDetails]);

  return (
    <>
      <div className="mt-1 flex-wrap">
        <div className="d-flex flex-column">
          {/* <img
            src={bookDetails.image_url}
            alt={`Comic book cover of ${bookDetails.title}`}
            style={{ width: '300px', height: 'auto' }}
          /> */}
          <h3>
            {ingredientDetails.name}
          </h3>
          <p>Date Added: {ingredientDetails.date}</p>
        </div>
        <AddToRecipe id={ingredientId} />
      </div>
    </>
  );
};

export default ViewIngredient;
