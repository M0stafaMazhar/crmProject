const Helper = require('../helpers/helpers');
const userModel = require('../../db/models/user-model');


class UserControles{
    static register = async(req ,res)=>{
        try{
            const userData = userModel(req.body)
            await userData.save();
    
            Helper.resHandler(res , 200 , true , userData ,  "user added successfully")
            }
        catch(err){
            Helper.resHandler(res , 500 , false , err ,  err.message)
        }
    }

    static logIn = async(req ,res)=>{
        try{
            const userData = await userModel.loginUser(req.body.userName , req.body.password)
            const token = await userData.generateToken();
            Helper.resHandler(res , 200 , true , {userData , token} , "logged in successfully")
            }
        catch(err){
            Helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static logOut = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter (a => a.token != req.token)
            await req.user.save()
            Helper.resHandler(res, 200, true, {} , "logged out successfully")
        }
        catch(err){
            Helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static myProfile = async(req , res)=>{
        try{
            Helper.resHandler(res, 200, true, req.user,  "user's profile ")
        }
        catch(err){
            Helper.resHandler(res, 500, false, err, err.message)
        }
    }

    static showUser = async(req, res)=>{
        try{
            const userType = req.url.split('/')[1]
            const userData = await userModel.findOne({_id : req.params.id , "role.roleName" : userType})
            if(!userData) throw new Error("User not found")
            Helper.resHandler(res, 200, true, userData,  userType + " profile")
        }
        catch(err){
            Helper.resHandler(res, 500, false, err, err.message)
        }
    }

    static editMyProfile = async(req, res)=>{
        try{
            Object.assign(req.user , req.body)
            await req.user.save()
            Helper.resHandler(res, 200, true, req.user,  "profile updated")
        }
        catch(err){
            Helper.resHandler(res, 500, false, err, err.message)
        }
    }

    static editUser = async(req,res)=>{
        try{
            const userType = req.url.split('/')[2]
            const userData = await userModel.findOne({_id : req.params.id , "role.roleName" : userType})
            if(!userData) throw new Error("User not found")
            Object.assign(userData, req.body)
            await userData.save()
            Helper.resHandler(res, 200, true, userData,  userType+" edited successfully")
        }
        catch(err){
            Helper.resHandler(res, 500, false, err, err.message)
        }
    }

    static deleteUser = async(req,res)=>{
        try{
            const userType = req.url.split('/')[2]
            const userData = await userModel.findOneAndDelete({_id : req.params.id , "role.roleName" : userType})
            if(!userData) throw new Error("User not found")
            Helper.resHandler(res, 200, true, {} , userType+" deleted successfully")
        }
        catch(err){
            Helper.resHandler(res, 500, false, err, err.message)
        }
    }

}


module.exports = UserControles;