// eslint-disable-next-line import/no-unresolved
import { clientCredentials } from '../client';

// Get recipes
const getRecipe = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes`, {
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

// Get a single recipe
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

// Create recipe
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

// Update recipe
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

// Delete recipe
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

const getRecipeIngredients = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes/${id}/get_ingredients`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getMyRecipes = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/recipes?uid=${uid}`, {
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
  getRecipe,
  getSingleRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeIngredients,
  getMyRecipes,
};
