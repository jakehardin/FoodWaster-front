// eslint-disable-next-line import/no-unresolved
import { clientCredentials } from '../client';

// Get FoodTypes
const getFoodTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/food_types`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// Get a single food_type
const getSingleRecipe = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Create foodType
const createRecipe = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update foodType
const updateRecipe = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

// Delete food_type
const deleteRecipe = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getFoodTypes,
  getSingleRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
