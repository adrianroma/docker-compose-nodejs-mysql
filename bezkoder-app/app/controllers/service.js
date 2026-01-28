const model = require('../models/service');

const generateTable = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.generateTable(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

const createService = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.createService(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

const deleteService = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.deleteService(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

const searchService = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.searchService(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

module.exports = {generateTable,createService, deleteService, searchService};