// eslint-disable-next-line import/no-unresolved
import { clientCredentials } from '../client';

// Get therapists
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

// Get a single therapist
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

// Create therapist
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

// Update therapist
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

// Delete therapist
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

// // Get therapist by favorite
// const favoriteIngredients = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/ingredients/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const favorites = Object.values(data).filter((item) => item.favorite);
//       resolve(favorites);
//     })
//     .catch(reject);
// });

// // FIXME: Get therapist by category
// const getTherapistsByCategory = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/therapists`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const usersTherapists = Object.values(data).filter((item) => item.category_id.id === id);
//       resolve(usersTherapists);
//     })
//     .catch(reject);
// });

// const getTherapistReviews = (therapistId) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/reviews?therapist_id=${therapistId}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'applications.json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

// Function to add a book to a customer's collection
const addIngredientToRecipe = (ingredientId, payload) => new Promise((resolve, reject) => {
  // Sending a POST request to the endpoint with the bookId and payload
  fetch(`${clientCredentials.databaseURL}/ingredients/${ingredientId}/addtorecipe`, {
    method: 'POST',
    body: JSON.stringify(payload), // Converting payload to JSON string and sending in the request body
    headers: {
      'Content-Type': 'application/json', // Specifying the content type as JSON
    },
  })
    .then((response) => response.json()) // Parsing the response data as JSON
    .then((data) => resolve(data)) // Resolving the promise with the response data
    .catch(reject); // If an error occurs during the fetch or parsing, rejecting the promise with the error
});

export {
  getIngredient,
  getSingleIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  // favoriteTherapists,
  // getTherapistsByCategory,
  // getTherapistReviews,
  addIngredientToRecipe,
};
