const model = require('../models/user');

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

const createUser = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.createUser(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}


const checkPassword = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.checkPassword(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}


const deleteUser = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.deleteUser(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

const checkPasswordAndModulesAndServices = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.checkPasswordAndModulesAndServices(data).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

module.exports = {generateTable, createUser,checkPassword,deleteUser, checkPasswordAndModulesAndServices};