const express = require('express')
const app = express()


const easyinvoice = require('easyinvoice');




app.get('/', function (req, res){
    const data = {
        "images": {
            // The logo on top of your invoice
            "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
            // The invoice background
            "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
        },
        // Your own data
        "sender": {
            "company": "Sample Corp",
            "address": "Sample Street 123",
            "zip": "1234 AB",
            "city": "Sampletown",
            "country": "Samplecountry"
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        // Your recipient
        "client": {
            "name": "mostafa mazhar",
            "address": "Clientstreet 456",
            "city": "Clientcity",
            // "custom2": "custom value 2",
            // "custom3": "custom value 3"
        },
        "information": {
            // Invoice number
            "number": "2021.0001",
            // Invoice data
            "date": "12-12-2021",
        },
        // The products you would like to see on your invoice
        // Total values are being calculated automatically
        "products": [
            {
                "description": "Product 3",
                "price": 20000
            }
        ],
        // The message you would like to display on the bottom of your invoice
        "bottom-notice": "Kindly pay your invoice within 15 days.",
        // Settings to customize your invoice
        "settings": {
            "currency": "EGP",
        }
    }
    
    
    easyinvoice.createInvoice(data, function (result) {
        easyinvoice.download('myInvoice.pdf', result.pdf);
        //	you can download like this as well:
        //	easyinvoice.download();
        //	easyinvoice.download('myInvoice.pdf');   
    });
})






app.listen(3000 , ()=>{console.log("working")})