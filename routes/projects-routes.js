const router = require('express').Router();
const projectController = require('../app/controllers/projects-controllers')
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')



router.post('/add-project' , auth /*, roleCheck */, projectController.addProject)    //admin & superadmin

router.get('/show/all' , projectController.allProjects)
router.get('/show/:id' , projectController.showProject)


router.put('/update/:id', auth ,/* roleCheck ,*/ projectController.editProject)      //admin & superadmin
router.delete('/delete/:id', auth, /*roleCheck,*/ projectController.deleteProject)  //admin & superadmin













module.exports = router;