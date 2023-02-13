const router = require('express').Router();
const projectController = require('../app/controllers/projects-controllers')
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')
const upload = require('../app/controllers/middleware/file-upload')



router.post('/add-project' , auth , roleCheck , upload.array("avatar") /*, roleCheck */, projectController.addProject)    //admin & superadmin

router.get('/show-all-projects' , projectController.allProjects)
router.get('/show-project/:id' , projectController.showProject)

router.get("/bulding/:buldingId" , projectController.getBulding)
router.post("/add-bulding/:id", auth , roleCheck ,projectController.addBulding)
router.delete("/delete-bulding/:id", auth , roleCheck , projectController.deleteBulding)
router.post("/add-images/bulding/:id",auth , roleCheck ,  upload.array("avatar")  , projectController.addBuldingImage)
router.delete("/delete-images/bulding/:id/:index", auth , roleCheck , projectController.deleteBuldingImage)

// router.get('/customers/:id' , auth /*, roleCheck */, projectController.projectCustomers)  admin & superadmin


router.put('/edit-project/:id', auth , roleCheck , projectController.editProject)      //admin & superadmin

router.delete('/delete-project/:id', auth, roleCheck, projectController.deleteProject)  //admin & superadmin
router.delete('/delete-images/:id/:index', auth, roleCheck, projectController.deleteImage)

router.post('/add-images/:id', auth, roleCheck, upload.array("avatar") , projectController.uploadImage) //admin & superadmin)













module.exports = router;