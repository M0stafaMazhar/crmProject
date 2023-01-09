const mongoose = require('mongoose');
const UnitSchema = mongoose.Schema({
    floorId:{
        type: mongoose.Types.ObjectId,
        ref: "projects",
        trim: true,
        required: true
    },

    unitNum:{
        type: String,
        trim: true,
        required: true
    },

    unitDescription:{
        type: String,
        trim: true,
        required: true
    },

    unitSize:{
        type: Number,
        trim: true,
        required: true
    },

    price:{
        type: Number,
        trim: true,
        required: true
    },

    unitImages:[{
        type: String,
        trim: true,
        required: true
    }],

    status:{
        type: Boolean,
        default: false
    },

    customerId:{
        type: mongoose.Types.ObjectId,
        ref: "users",
        trim: true
    },

    employeeId:{
        type: mongoose.Types.ObjectId,
        ref: "users",
        trim: true
    },

    downPayment:{
        type: Number,
        trim: true,
    },

    payments:[{
        paymentNum:{
            type:Number,
            trim: true,
            required: true
        },

        paymentValue:{
            type:Number,
            trim: true,
            
        }

    }],

} , {timestamps:true})






const Unit = mongoose.model("units" , UnitSchema);


module.exports = Unit;



