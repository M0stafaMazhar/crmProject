

class Helper{
    static resHandler = (res , status , apiStatus , data , message)=>{
        res.status(status).send({
            apiStatus,
            data,
            message 
        })
    }
}



module.exports = Helper;