const mongoose = require("mongoose"); 

const rolesSchema = new mongoose.Schema({
        roleName:{
            type:"string",
            required:true,
            trim:true,
            lowercase:true
        },

        urls:[{
            url:{
                type: String,
                lowercase: true,
                trim:true,
                require:true

            },

            method:{
                type: String,
                uppercase: true,
                trim: true,
                require:true

            },

            params:[{
                type: String,
                trim: true,
                lowercase: true
            }],

            query:[{
                type: String,
                trim: true,
                lowercase: true
            }]

        }],
    
} , {timestamps: true})

rolesSchema.virtual("usersList" , {
    ref : "users",
    localField : "_id",
    foreignField : "roleId",
    match:{isMine: true}
} , {timestamps: true})







const Role = mongoose.model('roles', rolesSchema);



module.exports = Role