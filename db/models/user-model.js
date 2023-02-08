const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); 
const validator = require("validator");

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        unique: true,
        trim : true,
        lowercase: true,
        required: true,
        // length: 14,
    },
    
    fName:{
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },

    lName:{
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },

    userType:{
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },

    password:{
        type: String,
        required: true,
        trim: true,
        required: true
    },

    phone:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isMobilePhone(value , "ar-EG")) throw new Error("invalid phone number")
        }
    },

    role:{
        roleName:{
            type: String,
            trim: true,
            lowercase: true,
            default: "customer"
        },

            roleId:{
            type:mongoose.Types.ObjectId,
            default:"63a8bcd00fe536e5580764ce",
            trim: true,
            ref:"roles" 
        }
    },

    tokens:[{token:{
        type: String,
        }   
    }],

    receipts:[],

} , {timestamps: true})


userSchema.virtual("mySales" , {
    ref : "units",
    localField : "_id",
    foreignField : "employeeId",
    match:{isMine: true}
} , {timestamps: true})



userSchema.virtual("customerUnits" , {
    ref : "units",
    localField : "_id",
    foreignField : "customerId",
    match:{isMine: true}
} , {timestamps: true})


userSchema.pre('save', async function(){
    if(this.isModified("password")){
        this.password = await bcryptjs.hash(this.password, 5)
    }
})

userSchema.statics.loginUser = async(userName, password)=>{
    const userData = await User.findOne({userName});
    if(!userData) throw new Error("invalid credentials");
    const validatePassword = await bcryptjs.compare(password , userData.password);
    if(!validatePassword) throw new Error("invalid credentials");
    return userData;
}



userSchema.methods.generateToken = async function(){
    const userData = this;
    const token = jwt.sign({_id: this._id} , process.env.PASS);
    userData.tokens = userData.tokens.concat({token})
    await userData.save();
    return token;
}



userSchema.methods.toJSON = function(){
    const data = this.toObject();
    delete data.password;
    delete data.__v;
    delete data.tokens;
    return data;
}

const User = mongoose.model('users', userSchema);



module.exports = User