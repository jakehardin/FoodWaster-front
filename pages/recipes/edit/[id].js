import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleRecipe } from '../../../utils/data/recipeData';
import RecipeForm from '../../../components/recipe/RecipeForm';

export default function EditRecipe() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleRecipe(id).then(setEditItem);
  }, [id]);

  return (<RecipeForm obj={editItem} />);
}
