// eslint-disable-next-line import/no-unresolved
import { clientCredentials } from '../client';

// Get ingredients
const getIngredient = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients`, {
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

// Get a single ingredient
const getSingleIngredient = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Create ingredient
const createIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients`, {
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

// Update ingredient
const updateIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

// Delete ingredient
const deleteIngredient = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const addIngredientToRecipe = (ingredientId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients/${ingredientId}/addtorecipe`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeIngredientFromRecipe = (ingredientId, recipeId) => new Promise((resolve, reject) => {
  const requestBody = JSON.stringify({ recipeId });

  fetch(`${clientCredentials.databaseURL}/ingredients/${ingredientId}/removefromrecipe`, {
    method: 'DELETE',
    body: requestBody,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getMyIngredients = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/ingredients?uid=${uid}`, {
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

export {
  getIngredient,
  getSingleIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  addIngredientToRecipe,
  removeIngredientFromRecipe,
  getMyIngredients,
};
