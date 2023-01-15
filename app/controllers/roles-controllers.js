const helper = require('../helpers/helpers')
const roleModel = require('../../db/models/roles-model')


class Role{
    static addRole = async (req , res)=>{
    try{
        const role = roleModel(req.body)
        await role.save()
        helper.resHandler(res , 200 , true , role , "role added successfully")
        
    }
    catch(err){
        helper.resHandler(res , 500 , false , err , err.message) 
    }
    }

    static showRoles = async(req,res)=>{
        try{
        const rolesData = await roleModel.find()
        if(!rolesData) throw new Error("No roles to show")
        helper.resHandler(res , 200 , true , rolesData , "roles found")
        }
        catch(err){
            helper.resHandler(res , 500 , false, err , err.message)
        }
    }

    static showRole =async (req,res)=>{
        try{
            const roleData = await roleModel.findById(req.params.roleId);
            if(!roleData) throw new Error("Role not found");
            helper.resHandler(res , 200 , true, roleData , "role found")
        }
        catch(err){
            helper.resHandler(res , 500 , false, err , err.message)
        }
    }

    static updateRole = async(req,res)=>{
        try{
            const roleData = await roleModel.findById(req.params.roleId);
            if(!roleData) throw new Error("Role not found");
            Object.assign(roleData,req.body)
            await roleData.save();
            helper.resHandler(res , 200 , true, roleData , "role updated successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false, err , err.message)
        }
    }

    static removeRole = async(req,res)=>{
        try{
            const roleData = await roleModel.findByIdAndDelete(req.params.roleId);
            if(!roleData) throw new Error("Role not found");
            helper.resHandler(res , 200 , true, {} , "role removed successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false, err , err.message)
        }
    }

}


module.exports = Role