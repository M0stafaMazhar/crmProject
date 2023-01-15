const helper = require('../helpers/helpers');
const unitModel = require('../../db/models/units-model');
const projectModel = require('../../db/models/projects-model');

class Unit{
    static add = async (req,res)=>{
        try{
            const projectData = await projectModel.findOne({"buldings.floors._id":req.params.floorId})
            if(!projectData) throw new Error("project does not exist")
            const unitData =  unitModel({floorId : req.params.floorId , ...req.body})
            await unitData.save()
            helper.resHandler(res , 200 , true , unitData , "unit added successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static showAll = async (req , res)=>{
        try{
            const unitsData = await unitModel.find()
            if (!unitsData) throw new Error("no units found")
            helper.resHandler(res , 200 , true , unitsData , "units found")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static showUnit = async (req , res)=>{
        try{
            const unitData = await unitModel.findById(req.params.unitId)
            if (!unitData) throw new Error("unit not found")
            helper.resHandler(res , 200 , true, unitData , "unit found")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static updateUnit = async (req , res)=>{
        try{
            const unitData = await unitModel.findById(req.params.unitId)
            if (!unitData) throw new Error("unit not found")

            Object.assign(unitData , req.body)
            await unitData.save()
            helper.resHandler(res , 200 , true, unitData , "unit updated successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static deleteUnit = async (req , res)=>{
        try{
            const unitData = await unitModel.findByIdAndDelete(req.params.unitId)
            if (!unitData) throw new Error("unit not found")

            helper.resHandler(res , 200 , true, {} , "unit deleted successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }
}





module.exports = Unit;