(function(){
  'use strict';
  angular.module('app')
  .controller('RecipeDetailController',function ($scope,$routeParams,dataService){
    //load only if we are opening a previously created item
    if(typeof $routeParams.id != 'undefined'){
      dataService.getSingleRecipe($routeParams.id).then(resp=>{
        $scope.recipe = resp;
        $scope.$apply();
      })
    }

    $scope.saveRecipe = ()=>{
      console.log('save');
    }

    $scope.cancelRecipe = ()=>{
      console.log('cancel');
    }

    $scope.setCategory = ()=>{
      $scope.recipe.category = $scope.categorySelected.name;
    }

    $scope.deleteIngredient = (ingredient)=>{
      console.log("heeeey",ingredient)
      // dataService.deleteSingleRecipe(id).then(res=>{
      //
      // });
    }

    dataService.getCategories().then(function(json){
      $scope.categories = json;
      //check if we are editing a recipe
      if(typeof $scope.recipe != 'undefined'){
        let index = $scope.categories.findIndex(cat =>{
          return cat.name === $scope.recipe.category;
        })
        $scope.categorySelected = $scope.categories[index];
      }
      $scope.$apply();
    })

    dataService.getFoodItems().then(function(json){
      $scope.foodItems = json;
      console.log(json)
      $scope.$apply()
    });


  })
})();
