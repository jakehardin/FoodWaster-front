import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import IngredientCard from '../components/ingredient/IngredientCard';
import { getIngredient } from '../utils/data/ingredientData';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const [ingredients, setIngredients] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const showIngredients = () => {
    getIngredient().then((data) => setIngredients(data));
  };
  useEffect(() => {
    showIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <article className="ingredients">
        <h1>Ingredients</h1>

        <Button
          onClick={() => {
            router.push('/ingredients/new');
          }}
        >
          Add Ingredient
        </Button>
        {ingredients.map((ingredient) => (
          <section key={`ingredient--${ingredient.id}`} className="post">
            <IngredientCard key={ingredient.id} ingredientObj={ingredient} onUpdate={getIngredient} isMine={ingredient.uid === user.uid} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
