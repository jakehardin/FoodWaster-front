import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import RecipeCard from '../components/recipe/RecipeCard';
import { getMyRecipes } from '../utils/data/recipeData';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const showRecipes = () => {
    getMyRecipes(user.uid).then((data) => setRecipes(data));
  };
  useEffect(() => {
    showRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <article className="ingredients">
        <h1>Recipes</h1>

        <Button
          className="white-button"
          onClick={() => {
            router.push('/recipes/new');
          }}
        >
          Add Recipe
        </Button>
        {recipes.map((recipe) => (
          <section key={`recipe--${recipe.id}`} className="post">
            <RecipeCard key={recipe.uid} recipeObj={recipe} onUpdate={showRecipes} isMine={recipe.uid === user.uid} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
