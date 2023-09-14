import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleIngredient } from '../../../utils/data/ingredientData';
import IngredientForm from '../../../components/ingredient/IngredientForm';

export default function EditRecipe() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleIngredient(id).then(setEditItem);
  }, [id]);

  return (<IngredientForm obj={editItem} />);
}
