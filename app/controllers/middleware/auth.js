const Helper = require('../../helpers/helpers')
const jwt = require("jsonwebtoken");
const userModel = require('../../../db/models/user-model');
const roleModel = require('../../../db/models/roles-model');



const auth = async (req, res, next) => {
    try{
        const token = req.header("authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, "password");
        const userData = await userModel.findOne({_id: decoded._id, "tokens.token":token})
        if (!userData) throw new Error("un authorized access")
        req.user = userData
        req.token = token
        next()

    }
    catch(e){
        
        Helper.resHandler(res , 500 , false , e , e.message)
    }
}


const roleCheck = async (req, res, next) => {
    try{
        const role = await roleModel.findById(req.user.role.roleId)
        if(!role) throw new Error("undefined role")
        console.log(req.url.split("/")[1]);

        if(!role.urls.some( r => r.url == req.url.split("/")[1] 
            && r.method == req.method 
            && (!r.parrams || r.params.some( p => req.params.includes(p))) 
            // && (!r.query || r.query.includes(Object.keys(req.query))) 
            )) throw new Error("forbidden url")
        req.role = role
        next()
    }
    catch(e){
        Helper.resHandler(res , 500 , false , e , e.message)
    }
}



module.exports = {auth , roleCheck}