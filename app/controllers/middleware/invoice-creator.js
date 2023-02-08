const PDFDocument = require('pdfkit');









class Invoice{
    static create(res , user , payment , unit){
const doc = new PDFDocument;
doc.image('public/480px-Wikimedia-logo.png', 40, 40, {width: 75})
doc.fontSize(12).text('contact details', 460, 100);

doc.fontSize(20).text('INVOICE', 270, 145);
doc.fillColor('gray').fontSize(13).text(`Name : ${user.fName} ${user.lName}`, 60 , 200)
doc.fontSize(13).text(`National id : ${user.userName}`, 320 , 200)
doc.fontSize(13).text(`Payment number : ${payment.paymentNum}`, 60 , 220)
doc.fontSize(13).text(`Value : ${payment.paymentValue} EGP`, 320 , 220)
// doc.fontSize(13).text(`Payment Date : ${payment.paymentDate}`, 60 , 240)
doc.fontSize(13).text(`Payment id : ${payment._id}`, 60 , 260)
doc.fontSize(13).text(`Payment method : Cash`, 60 , 280)
doc.fontSize(12).text(`Payment for unit number ${unit.unitNum},`, 60 , 310)
/*floor ${floorNum}, bulding ${buldingNum}, ${projectName} , ${city}.*/
doc.end();
doc.pipe(res.writeHead(200 , {"Content-Type": "application/pdf"  , "Content-Disposition": "attachment; filename=invoice.pdf"}))
// .writeHead(200 , {"Content-Type": "application/pdf" }), "Content-Disposition": "attachment; filename=invoice.pdf"})
}

}


module.exports = Invoice