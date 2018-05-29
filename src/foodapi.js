const axios = require('axios');
// const { NUM_RECIPES } = require('../constants/constants.js');

const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/';
const config = {
  headers: {
    'X-Mashape-Key': process.env.X_MASHAPE_KEY ? process.env.X_MASHAPE_KEY : 'nI4Yz4VMeUmshqhgxKKou5sEx0mGp1WWcLrjsnYWnh2YrjXjgH',
    'X-Mashape-Host': process.env.X_MASHAPE_HOST ? process.env.X_MASHAPE_HOST : 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
  }
};

const searchRecipes = function (query, axiosInstance = axios) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${BASE_URL}search?query=${query}&number=${NUM_RECIPES}&offset=0&instructionsRequired=true&type=main+course`, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        const err = new Error(error);
        reject(err);
      });
  });
};

const getRecipe = function (id, axiosInstance = axios) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${BASE_URL}${id}/information`, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        const err = new Error(error);
        reject(err);
      });
  });
};

module.exports = {
  searchRecipes,
  getRecipe
};
