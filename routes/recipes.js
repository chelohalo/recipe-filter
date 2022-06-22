var recipes = require("../recipes.json");
var router = require("express").Router();

/* GET recipes */
router.get("/shopping-list/", function (req, res, next) {
  const queries = req.query;
  const ids = queries.ids.split(",");
  console.log(ids);
  const result = ids.map((id) => recipes.find((recipe) => recipe.id == id));
  console.log(result);
//   res.send(`<p>HTML Data ${queries.ids}</p>`);
  res.send(JSON.stringify(result))
});

module.exports = router;
