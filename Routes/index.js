const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./API");

router.use("/api", apiRoutes);
//whatever we're sending get on that route = *
//any route that we could go to that is not already pre-defined will have 
//that file sent to it.
router.get("*", (req, res) =>
//telling path model to join our current directory name
res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
