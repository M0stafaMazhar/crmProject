const router = require('express').Router();
const unitsControles = require("../app/controllers/units-controllers")
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')
const upload = require('../app/controllers/middleware/file-upload')




router.post("/add-unit/:floorId" ,  auth , upload.array("avatar") ,/*roleCheck , */ unitsControles.add)

router.get("/show-all" , unitsControles.showAll)
router.get("/show-unit/:unitId" ,  unitsControles.showUnit)
router.get("/floor/:floorId" ,  unitsControles.floorUnits)

router.put("/edit-unit/:unitId" ,   auth , roleCheck ,  unitsControles.updateUnit)  

router.delete("/delete-unit/:unitId" ,   auth , roleCheck ,  unitsControles.deleteUnit)                                           //admin & super


router.post("/sell-unit/:unitId" ,  auth , roleCheck ,  unitsControles.sellUnit)
router.get("/activate-payment/:paymentId" , auth , roleCheck ,   unitsControles.changePaymentStat)

router.post('/add-images/:id', auth, roleCheck, upload.array("avatar") , unitsControles.uploadImage) //admin & superadmin)
router.delete('/delete-images/:id/:index', auth, roleCheck, unitsControles.deleteImage)

router.get('/payment/invoice/:paymentId', auth, roleCheck, unitsControles.invoice)



module.exports = router;