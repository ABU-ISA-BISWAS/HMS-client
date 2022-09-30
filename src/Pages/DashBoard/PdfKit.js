import React from 'react';
const PDFDocument = require('pdfkit');

const PdfKit = (dataCallback,endCallback) => {

    const doc = new PDFDocument();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc.fontSize(25).text('Some text with an embedded font!');
    doc.end()
    return (
        <div>
            
        </div>
    );
};

export default PdfKit;