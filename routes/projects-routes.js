const router = require('express').Router();
const projectController = require('../app/controllers/projects-controllers')
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')
const upload = require('../app/controllers/middleware/file-upload')



router.post('/add-project' , auth /*, roleCheck */, projectController.addProject)    //admin & superadmin

router.get('/show/all' , projectController.allProjects)
router.get('/show/:id' , projectController.showProject)
router.get("/bulding/:buldingId" , auth ,/*  roleCheck ,*/projectController.getBulding)

// router.get('/customers/:id' , auth /*, roleCheck */, projectController.projectCustomers)  admin & superadmin


router.put('/update/:id', auth ,/* roleCheck ,*/ projectController.editProject)      //admin & superadmin

router.delete('/delete/:id', auth, /*roleCheck,*/ projectController.deleteProject)  //admin & superadmin

router.post('/add-image/:id', auth,/*roleCheck,*/upload.array("avatar") , projectController.uploadImage) //admin & superadmin)













module.exports = router;