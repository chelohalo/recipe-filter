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
  console.log("ids", ids)
   console.log("find: ", ids.map(id => recipes[id]? true: false ))
  const validIds = ids.map(id => recipes[id]? true: false )
  if (!validIds.includes(true)) {   
    res.status(404).send("NOT_FOUND")}

 
  

    const ingredients = ids.map(id => recipes.find(recipe => recipe.id == id).ingredients);
    res.send(JSON.stringify(ingredients)) 

});

module.exports = router;
