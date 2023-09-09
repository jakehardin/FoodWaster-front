import RecipeForm from '../../components/recipe/RecipeForm';
import { useAuth } from '../../utils/context/authContext';

const NewRecipe = () => {
  const { user } = useAuth();
  return (
    <div>
      <RecipeForm user={user} />
    </div>
  );
};

export default NewRecipe;
