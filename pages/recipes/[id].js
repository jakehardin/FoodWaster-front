/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleRecipe, getRecipeIngredients } from '../../utils/data/recipeData';
import RecipeIngredientCard from '../../components/recipe/RecipeIngredientCard';

const ViewRecipe = () => {
  const router = useRouter();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    getSingleRecipe(id).then((productData) => {
      setRecipeDetails(productData);
    });
  }, [id]);

  const getIngredientsByRecipe = async () => {
    const ingredients = await getRecipeIngredients(id);
    setRecipeIngredients(ingredients);
  };

  useEffect(() => {
    getIngredientsByRecipe();
  }, [id]);

  useEffect(() => {
    if (recipeDetails) {
      document.title = `${recipeDetails.name}!`;
    }
  }, [recipeDetails]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <h3>
            {recipeDetails.name}
          </h3>
          <h5>{recipeDetails.description}</h5>
          <h3>Ingredients available:</h3>
          {recipeIngredients.map((recipeIngredient) => (
            <section key={`recipeIngredient--${recipeIngredient.id}`} className="white-button">
              <RecipeIngredientCard recipeIngredientObj={recipeIngredient} onUpdate={getIngredientsByRecipe} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewRecipe;
