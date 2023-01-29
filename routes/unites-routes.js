const router = require('express').Router();
const unitsControles = require("../app/controllers/units-controllers")
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')
const upload = require('../app/controllers/middleware/file-upload')




router.post("/add/:floorId" ,  auth , /*roleCheck , */ unitsControles.add)

router.get("/show-all" ,  /* auth , roleCheck , */ unitsControles.showAll)
router.get("/show-unit/:unitId" ,  /* auth , roleCheck , */ unitsControles.showUnit)
router.get("/floor/:floorId" , /* auth , roleCheck , */ unitsControles.floorUnits)

router.put("/update/:unitId" ,  /* auth , roleCheck , */ unitsControles.updateUnit)  

router.delete("/delete/:unitId" ,  /* auth , roleCheck , */ unitsControles.deleteUnit)                                           //admin & super


router.post("/sell/:unitId" ,  auth ,/* roleCheck , */ unitsControles.sellUnit)
router.put("/payment/activate/:paymentId" , auth ,/* roleCheck , */  unitsControles.changePaymentStat)

router.post('/add-image/:id', auth,/*roleCheck,*/upload.array("avatar") , unitsControles.uploadImage) //admin & superadmin)



module.exports = router;