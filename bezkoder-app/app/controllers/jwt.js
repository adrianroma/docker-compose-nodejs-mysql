
const model = require('../models/jwt');

const generateToken = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.generateToken(data.file).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}

const refreshToken = (req, res) => {

    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
                 
        }else{
            req.body = JSON.stringify(req.body);
        }

        data = JSON.parse(req.body);

        model.refreshToken(data.token).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });

}


module.exports = {generateToken, refreshToken};
