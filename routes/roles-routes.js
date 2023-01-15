const router = require('express').Router();
const rolesControles = require("../app/controllers/roles-controllers")
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')


router.post("/add" /*, auth , roleCheck */ ,rolesControles.addRole);

router.get("/show-all" /*, auth , roleCheck */, rolesControles.showRoles);

router.get("/show-role/:roleId" /*, auth , roleCheck */, rolesControles.showRole);

// router.get("/users/:roleId" /*, auth , roleCheck */, rolesControles.roleUsers);

router.put("/update/:roleId" /*, auth , roleCheck */, rolesControles.updateRole);

router.delete("/remove/:roleId" /*, auth , roleCheck */, rolesControles.removeRole);
















module.exports = router;