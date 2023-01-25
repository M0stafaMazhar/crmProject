const projectModel = require('../../db/models/projects-model')
const unitModel = require('../../db/models/units-model')
const helper = require('../helpers/helpers')


class Projects{
    static addProject = async (req , res)=>{
        try{
            const projectData = await projectModel(req.body)
            projectData.save()
            helper.resHandler(res , 200 , true , projectData , "Project added successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static allProjects = async (req , res)=>{
        try{
            const projects = await projectModel.find()
            if(!projects.length) throw new Error("No projects to show yet")
            helper.resHandler(res , 200 , true , projects , "all Projects")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static showProject = async(req,res)=>{
        try{
            const projectData = await projectModel.findById(req.params.id)
            if(!projectData) throw new Error("project not found")
            helper.resHandler(res , 200 , true , projectData , "Project found")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static editProject = async(req,res)=>{
        try{
            const projectData = await projectModel.findById(req.params.id)
            if(!projectData) throw new Error("project not found")
            Object.assign(projectData , req.body)
            await projectData.save()
            helper.resHandler(res , 200 , true , projectData , "Project updated successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static deleteProject = async(req,res)=>{
        try{
            const projectData = await projectModel.findByIdAndDelete(req.params.id)
            if(!projectData) throw new Error("project not found")
            helper.resHandler(res , 200 , true , {} , "Project deleted successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }
    }

    static uploadImage = async (req, res)=>{
        try{
        const projectData = await projectModel.findById(req.params.id)
        if(!projectData) throw new Error("project does not exist")
        req.files.forEach(f => projectData.projectImages.push(f.filename))
        await projectData.save()

        helper.resHandler(res , 200 , true , projectData , "images added successfully")
        }
        catch(err){
            helper.resHandler(res , 500 , false , err , err.message)
        }


       

    }
}



module.exports = Projects