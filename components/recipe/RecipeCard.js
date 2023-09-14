/* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteRecipe } from '../../utils/data/recipeData';
// import { getSingleFoodType } from '../api/foodTypeData';

export default function RecipeCard({ recipeObj, onUpdate }) {
  // const [foodType, setFoodType] = useState({});
  const deleteThisRecipe = () => {
    if (window.confirm(`Delete ${recipeObj.name}}?`)) {
      deleteRecipe(recipeObj.id).then(() => onUpdate());
    }
  };

  // useEffect(() => {
  //   getSingleFoodType(ingredientObj.food_type).then(setFoodType);
  // }, [ingredientObj.food_type]);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        {/* <img src={ingredientObj.profile_image_url} alt="user" width="100px" height="100px" /> */}
        <h2>
          {recipeObj.name}
        </h2>
        {/* <h3>{foodType.name}</h3> */}
        {/* <p>{ingredientObj.date}</p> */}
        <Link href={`/recipes/${recipeObj.id}`} passHref>
          <Button variant="primary" className="m-2">Details</Button>
        </Link>
        <Link href={`/recipes/edit/${recipeObj.id}`} passHref>
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisRecipe} className="m-2">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

RecipeCard.propTypes = {
  recipeObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
