
const model = require('../models/data');

const healthCheck = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.healthCheck(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}


const toText = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.toText(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}




const saveLog = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.saveLog(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}












module.exports = {saveLog,toText, healthCheck};
