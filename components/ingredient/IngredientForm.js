import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { createIngredient, updateIngredient } from '../../utils/data/ingredientData';
import { getFoodTypes } from '../../utils/data/foodTypeData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  food_type: '',
  date: '',
  image: '',
};

const IngredientForm = ({ obj }) => {
  const [currentIngredient, setCurrentIngredient] = useState(initialState);
  const [foodTypes, setFoodTypes] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentIngredient({
        id: obj.id,
        name: obj.name,
        image: obj.image,
        food_type: obj.food_type,
        date: obj.date,
        uid: user.uid,
      });
    }
  }, [obj, user]);

  useEffect(() => {
    getFoodTypes().then(setFoodTypes);

    if (obj.id) setCurrentIngredient(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentIngredient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    if (obj.id) {
      const ingredientUpdate = {
        id: obj.id,
        name: currentIngredient.name,
        image: currentIngredient.image,
        uid: user.uid,
        food_type: currentIngredient.food_type,
      };

      updateIngredient(ingredientUpdate)
        .then(() => router.push('/ingredients'));
    } else {
      const currentDate = new Date().toISOString().split('T')[0];
      const ingredients = {
        name: currentIngredient.name,
        date: currentDate,
        image: currentIngredient.image,
        food_type: currentIngredient.food_type,
        uid: user.uid,
      };

      createIngredient(ingredients).then(() => router.push('/ingredients'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Ingredient</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentIngredient.name} onChange={handleChange} type="string" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control name="image" required value={currentIngredient.image} onChange={handleChange} type="string" />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" required value={currentIngredient.price} onChange={handleChange} type="string" />
        </Form.Group> */}
        <FloatingLabel controlId="floatingSelect" label="Topic">
          <Form.Select
            aria-label="topic"
            name="food_type"
            onChange={handleChange}
            className="mb-3"
            value={currentIngredient.food_type} // FIXME: modify code to remove error
            required
          >
            <option value="">Select a Food Type</option>
            {
              foodTypes.map((foodtype) => (
                <option
                  key={foodtype.id}
                  value={foodtype.id}
                >
                  {foodtype.name}
                </option>
              ))
            }
          </Form.Select>
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
};

IngredientForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    food_type: PropTypes.number,
    image: PropTypes.string,
  }),
};

IngredientForm.defaultProps = {
  obj: initialState,
};
export default IngredientForm;
