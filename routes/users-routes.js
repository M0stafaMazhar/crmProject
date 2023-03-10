const router = require('express').Router();
const userControles = require("../app/controllers/user-controllers")
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')


router.post('/add-user', auth , roleCheck , userControles.register);
router.post('/login', userControles.logIn); 
router.get('/logout', auth ,userControles.logOut);

router.get('/myProfile', auth ,userControles.myProfile);
router.get("/show-user/:id" , auth , roleCheck , userControles.showUser);                         //admin & superadmin
// router.get("/admin/:id", auth ,/* roleCheck ,*/ userControles.showUser);                            //superadmin only
router.get("/show-all-users" , auth ,  roleCheck , userControles.getAllUsers)

router.put("/edit/myprofile" , auth , roleCheck , userControles.editMyProfile);               //superadmin only
router.put("/edit/customer/:id" , auth , roleCheck , userControles.editUser);                //superadmin & admin
router.put("/edit-user/:id" , auth , roleCheck , userControles.editUser)                   //superadmin 

router.delete("/delete-user/:id" , auth , roleCheck , userControles.deleteUser);      //superadmin & admin
router.delete("/delete/admin/:id" , auth ,/* roleCheck ,*/ userControles.deleteUser);        // Superadmin only












module.exports = router;