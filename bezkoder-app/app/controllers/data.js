const model = require('../models/data');

/**
 * @swagger
 * /api/health:
 *   post:
 *     summary: Health check endpoint
 *     description: Checks database connection and returns sample data
 *     tags: [Health]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               check:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Successful health check
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: successful
 *                 result:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Server error
 */
const healthCheck = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/text:
 *   post:
 *     summary: Convert data to text file
 *     description: Writes provided data to a text file
 *     tags: [Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Sample text content"
 *     responses:
 *       200:
 *         description: Text file created successfully
 *       500:
 *         description: Server error
 */
const toText = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/log:
 *   post:
 *     summary: Save log data
 *     description: Saves log information to a file
 *     tags: [Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Log message"
 *               level:
 *                 type: string
 *                 example: "info"
 *     responses:
 *       200:
 *         description: Log saved successfully
 *       500:
 *         description: Server error
 */
const saveLog = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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
