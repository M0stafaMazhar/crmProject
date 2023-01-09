const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
        trim:true
    },

    projectLocation:{
        type:String,
        required:true,
        trim:true
    },

    projectType:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true,
        trim:true
    },

    projectImages:[{
        type:String,
        required:true,
        trim:true
    }],

    buldings:[{
        buldingNum:{
            type:String,
            required:true,
            trim:true
        },

        buldingImages:[{
            type:String,
            required:true,
            trim:true
        }],

        floors:[{
            floorNum:{
                type:String,
                required:true,
                trim:true
            }
        }]
    }],
} , {timestamps:true})


projectSchema.virtual("unitsList" , {
    ref : "units",
    localField : "byldings.floors._id",
    foreignField : "floorId",
    match:{isMine: true}
} , {timestamps: true})




const Project = mongoose.model('projects',projectSchema);


module.exports = Project;


