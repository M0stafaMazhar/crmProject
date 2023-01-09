require("../db/dbConnect")

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
const userRoutes = require("../routes/users-routes");
const roleRoutes = require("../routes/roles-routes");
const projectsRoutes = require("../routes/projects-routes");



app.use ("/api/user/" , userRoutes);
app.use ("/api/role/" , roleRoutes);
app.use("/api/project/" , projectsRoutes);








app.all("*" , (req, res) => {
    res.status(404).send({
        apiStatus : false,
        message:"invalid URL"
    });
})


module.exports = app;