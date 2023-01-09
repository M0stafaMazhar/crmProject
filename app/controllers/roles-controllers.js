const Helper = require('../helpers/helpers')
const roleModel = require('../../db/models/roles-model')


class Role{
    static addRole = async (req , res)=>{
    try{
        const role = roleModel(...req.body)
        await role.save()
        Helper.resHandler(res , 200 , true , role , "role added successfully")
        
    }
    catch(err){
        Helper.resHandler(res , 500 , false , err , err.message) 
    }
    }
}


module.exports = Role