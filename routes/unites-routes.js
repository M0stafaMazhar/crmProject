const router = require('express').Router();
const unitsControles = require("../app/controllers/units-controllers")
const {auth} = require('../app/controllers/middleware/auth')
const {roleCheck} = require('../app/controllers/middleware/auth')




router.post("/add/:floorId" ,  auth , /*roleCheck , */ unitsControles.add)

router.get("/show-all" ,  /* auth , roleCheck , */ unitsControles.showAll)
router.get("/show-unit/:unitId" ,  /* auth , roleCheck , */ unitsControles.showUnit)

router.put("/update/:unitId" ,  /* auth , roleCheck , */ unitsControles.updateUnit)  

router.delete("/delete/:unitId" ,  /* auth , roleCheck , */ unitsControles.deleteUnit)                                           //admin & super




module.exports = router;