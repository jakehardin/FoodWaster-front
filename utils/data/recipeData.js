// eslint-disable-next-line import/no-unresolved
import { clientCredentials } from '../client';

// Get therapists
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

// Get a single therapist
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

// Create therapist
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

// Update therapist
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

// Delete therapist
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

export {
  getRecipe,
  getSingleRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  // favoriteTherapists,
  // getTherapistsByCategory,
  // getTherapistReviews,
};
