import IngredientForm from '../../components/ingredient/IngredientForm';
import { useAuth } from '../../utils/context/authContext';

const NewIngredient = () => {
  const { user } = useAuth();
  return (
    <div>
      <IngredientForm user={user} />
    </div>
  );
};

export default NewIngredient;
