require("../db/dbConnect")

const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(cors())
app.use('/public', express.static('public'))


const userRoutes = require("../routes/users-routes");
const roleRoutes = require("../routes/roles-routes");
const projectsRoutes = require("../routes/projects-routes");
const unitRoutes = require("../routes/unites-routes")



app.use ("/api/user/" , userRoutes);
app.use ("/api/role/" , roleRoutes);
app.use("/api/project/" , projectsRoutes);
app.use ("/api/unit/", unitRoutes);








app.all("*" , (req, res) => {
    res.status(404).send({
        apiStatus : false,
        message:"invalid URL"
    });
})


module.exports = app;