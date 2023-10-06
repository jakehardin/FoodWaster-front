import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createRecipe, updateRecipe } from '../../utils/data/recipeData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  description: '',
  completed: false,
  image: '',
};

const RecipeForm = ({ obj }) => {
  const [currentRecipe, setCurrentRecipe] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentRecipe({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        image: obj.image,
        completed: obj.completed,
        uid: user.uid,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    if (obj.id) {
      const recipeUpdate = {
        id: obj.id,
        description: currentRecipe.description,
        name: currentRecipe.name,
        image: currentRecipe.image,
        uid: user.uid,
        completed: Boolean(currentRecipe.completed),
      };

      updateRecipe(recipeUpdate)
        .then(() => router.push('/recipes'));
    } else {
      const recipes = {
        name: currentRecipe.name,
        description: currentRecipe.description,
        image: currentRecipe.image,
        uid: user.uid,
        completed: Boolean(currentRecipe.completed),
      };

      createRecipe(recipes).then(() => router.push('/recipes'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Recipe</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentRecipe.name} onChange={handleChange} type="string" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentRecipe.description} onChange={handleChange} type="string" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control name="image" required value={currentRecipe.image} onChange={handleChange} type="string" />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" required value={currentIngredient.price} onChange={handleChange} type="string" />
        </Form.Group> */}
        <Form.Check
          className="mb-3"
          type="switch"
          id="complete"
          name="complete"
          label="Complete?"
          checked={currentRecipe.completed}
          onChange={(e) => {
            setCurrentRecipe((prevState) => ({
              ...prevState,
              completed: e.target.checked,
            }));
          }}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
};

RecipeForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

RecipeForm.defaultProps = {
  obj: initialState,
};
export default RecipeForm;
