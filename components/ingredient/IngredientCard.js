/* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteIngredient } from '../../utils/data/ingredientData';
// import { getSingleFoodType } from '../api/foodTypeData';

export default function IngredientCard({ ingredientObj, onUpdate }) {
  // const [foodType, setFoodType] = useState({});
  const deleteThisIngredient = () => {
    if (window.confirm(`Delete ${ingredientObj.name}}?`)) {
      deleteIngredient(ingredientObj.id).then(() => onUpdate());
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
          {ingredientObj.name}
        </h2>
        {/* <h3>{foodType.name}</h3> */}
        <p>{ingredientObj.date}</p>
        <Link href={`/ingredients/${ingredientObj.id}`} passHref>
          <Button variant="primary" className="m-2">Details</Button>
        </Link>
        <Link href={`/ingredients/edit/${ingredientObj.id}`} passHref>
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisIngredient} className="m-2">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

IngredientCard.propTypes = {
  ingredientObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    // food_type: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
