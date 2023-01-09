const router = require('express').Router();
const rolesControles = require("../app/controllers/roles-controllers")
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')


router.post("/add" , rolesControles.addRole);

// router.post("/remove" , rolesControles.removeRole);

// router.post("/update" , rolesControles.updateRole);

// router.post("/show-roles" , rolesControles.showRoles);

// router.post("/show-role/:role" , rolesControles.showRole);










module.exports = router;