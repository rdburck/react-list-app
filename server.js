const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./Routes");

const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGO_DB_URL || "mongodb://localhost:27017/Example", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

const db = require("./models");

const PORT = process.env.PORT || 3010;
//line below helps so that we don't have to parse the json in the testRoutes.js file. 
//it's middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if(process.env.NODE_EV === 'production') {
	app.use(express.static('client/build'));
}
app.use(routes);

// app.post("/api/test/data", (req, res) => {
// 	console.log(req);
// 	db.Test.create(req.body)
// 		.then((data) => {
// 			console.log("data", data);
// 			res.json(data);
// 		})
// 		.catch((err) => console.log(err));
// });

// app.get("/api/test/data", (req, res) => {
// 	db.Test.find({})
// 		.then((data) => {
// 			res.json(data);
// 		})
// 		.catch((err) => console.log(err));
// });

// app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
 