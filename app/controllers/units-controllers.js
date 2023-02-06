const helper = require('../helpers/helpers');
const unitModel = require('../../db/models/units-model');
const projectModel = require('../../db/models/projects-model');
const {unlink} = require('fs')

class Unit{
    static add = async (req,res)=>{
        try{
            const projectData = await projectModel.findOne({"buldings.floors._id":req.params.floorId})
            if(!projectData) throw new Error("project does not exist")
            const unitData =  unitModel({floorId : req.params.floorId , ...req.body})
            req.files.forEach(f => unitData.unitImages.push(f.filename) )
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

    static sellUnit = async (req , res)=>{
        try{
            const unitData = await unitModel.findById(req.params.unitId)
            if(!unitData) throw new Error("unit not found")
            if(unitData.status == true) throw new Error("unit sold already")
            unitData.customerId = req.body.customerId
            unitData.downPayment = req.body.downPayment

            const paymentValue = (unitData.price - unitData.downPayment) / req.body.numOfPayments

            let payments = Array.apply(null, Array(req.body.numOfPayments))

            unitData.payments =  payments.map( (p , index) => p = {paymentNum : index+1,
                                                                    paymentValue : paymentValue })

            unitData.employeeId = req.user._id
            unitData.status = true

            await unitData.save()

            helper.resHandler(res , 200, true , unitData , "unit sold successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static changePaymentStat = async(req ,res)=>{
        try{
            const unitData = await unitModel.findOne({"payments._id" : req.params.paymentId})
            if(!unitData)throw new Error("No such unit")

            const paymentIndex = unitData.payments.findIndex(p => p._id.toString() == req.params.paymentId) 
            unitData.payments[paymentIndex].paymentStat = !unitData.payments[paymentIndex].paymentStat

            await unitData.save()

            helper.resHandler(res , 200 , true , unitData , "payment status changed successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static uploadImage = async (req, res)=>{
        try{
        const unitData = await unitModel.findById(req.params.id)
        if(!unitData) throw new Error("unit does not exist")
        req.files.forEach(f => unitData.unitImages.push(f.filename) )
        await unitData.save()
        
        helper.resHandler(res , 200 , true , unitData , "images added successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static floorUnits = async(req, res)=>{
        try{
            const unitsData = await unitModel.find({floorId: req.params.floorId})
            if(!unitsData.length) throw new Error(`Unable to find units`)
            helper.resHandler(res , 200 , true , unitsData , "floor Units")
            
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static deleteImage = async(req, res)=>{
        try{
        const unitData = await unitModel.findById(req.params.id)
        if(!unitData) throw new Error("Project not found")
        const filename = unitData.unitImages[req.params.index]
        unlink("public/images/uploads/"+filename , (err)=>{
            if(err) console.log(err);
        })
        unitData.unitImages.splice(req.params.index , 1)
        unitData.save()
        helper.resHandler(res , 200 , true , unitData , "image deleted")
        
        }
        catch(err) {
        helper.resHandler(res , 500 , false , err , err.message)
        }

    }
}





module.exports = Unit;