'use strict';

const url = "http://localhost:5000/";

angular.module('app')
  .service('dataService',function ($http){
    this.getRecipes = ()=>{
      return new Promise(function (res,rej){
        fetch(url+`api/recipes`)
          .then(function(response){
            res(response.json())
          })
      });
    }

    this.getCategories = ()=>{
      return new Promise((res,rej)=>{
        fetch(url+`api/categories`)
          .then(response => res(response.json()))
      })
    }

    this.getFoodItems = ()=>{
      return new Promise((res,rej)=>{
        fetch(url+`api/fooditems`)
          .then(response => res(response.json()))
      })
    }

    this.getRecipesByCategory = (category)=>{
      return new Promise((res,rej)=>{
        fetch(url+`api/recipes?category=${category}`)
          .then(response => res(response.json()))
      })
    }

    this.getSingleRecipe = (id)=>{
      return new Promise((res,rej)=>{
        fetch(url+`api/recipes/${id}`)
          .then(response => res(response.json()))
      })
    }

    //update recepie
    this.updateSingleRecipe = (id)=>{
      return new Promise((res,rej)=>{

      })
    }

    //create recipe
    this.createRecipe = (recipe)=>{
      return new Promise((res,rej)=>{

      })
    }

    this.deleteSingleRecipe = (id)=>{
      return new Promise((res,rej)=>{
        let init = {method:'delete'};
        fetch(url+`api/recipes/${id}`,init)
          .then(response => res())
          //send back nothing because the api comes back w nothing
      })
    }

  })
