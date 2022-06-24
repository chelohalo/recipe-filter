var recipes = require("../recipes.json");
var router = require("express").Router();

/* GET recipes */
router.get("/shopping-list/", function (req, res, next) {
  
  const queries = req.query;

  if(!queries.hasOwnProperty('ids') || queries.ids === "") {
    res.status(400).send({
      status: 400, 
      message: "ids not found."
    })
  } 
  
  const ids = queries.ids.split(",");
  // const ids = [1,12, 3]
  const validIds = ids.map(id => recipes[id]? true: false )
  if (!validIds.includes(true)) {   
    res.status(404).send("NOT_FOUND")
    return 
  }


  const ing = []
  ids.forEach(id => {
    const recipe = recipes.find(recipe => recipe.id == id)
    if(recipe) {
      recipe.ingredients.forEach(ingredient => {
        ing.push(ingredient)
      })
    }    
  })
  console.log("ingredients:", ing)

  res.json(ing);

  //  console.log("find: ", ids.map(id => recipes[id]? true: false ))

  

    
  //   console.log('depuratedIds',depuratedIds)
  //   const ingredients = ids.map(id => recipes[id-1].ingredients);
  //   const shoppingList = ingredients.reduce((acc, curr) => acc.concat(curr), []);

  //   console.log('depuratedIds',depuratedIds)
  //   console.log(typeof(ingredients))
  //   res.send(shoppingList)

});

module.exports = router;
