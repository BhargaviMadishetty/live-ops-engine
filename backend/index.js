const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
// const SERVER_PORT = process.env.PORT || 8080;
const app = express();
const userRoutes = require("../backend/Components/routes/user-routes");
const offerRoutes = require("../backend/Components/routes/offer-routes");
mongoose.connect("mongodb+srv://madishetty1999:bindu@cluster0.1ekfvwn.mongodb.net/?retryWrites=true&w=majority").then(()=> {
    console.log("successfull connected to db");
}).catch(()=> {
    console.log("failed to connect to database");
});
app.use(bodyparse.json());
app.listen(8080, ()=> {
    console.log("Server started at Port !");
});
app.use("/user", userRoutes);
app.use("/offer", offerRoutes);