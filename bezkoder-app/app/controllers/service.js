const model = require('../models/service');

/**
 * @swagger
 * /api/service/generateTable:
 *   post:
 *     summary: Generate servers table
 *     description: Creates the servers table in the database
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Table generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: successful
 *                 result:
 *                   type: object
 *       500:
 *         description: Server error
 */
const generateTable = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/service/createService:
 *   post:
 *     summary: Create a new service
 *     description: Creates a new service/server entry in the database
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - server
 *               - client
 *             properties:
 *               server:
 *                 type: string
 *                 example: "api.example.com"
 *               client:
 *                 type: string
 *                 example: "ClientA"
 *     responses:
 *       200:
 *         description: Service created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: successful
 *                 result:
 *                   type: object
 *       500:
 *         description: Server error
 */
const createService = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/service/deleteService:
 *   post:
 *     summary: Delete a service
 *     description: Deletes a service from the database by ID
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: successful
 *                 result:
 *                   type: object
 *       500:
 *         description: Server error
 */
const deleteService = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/service/searchService:
 *   post:
 *     summary: Search services by client
 *     description: Retrieves all services associated with a specific client
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - client
 *             properties:
 *               client:
 *                 type: string
 *                 example: "ClientA"
 *     responses:
 *       200:
 *         description: Services found
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
 *                     properties:
 *                       id:
 *                         type: integer
 *                       server:
 *                         type: string
 *                       client:
 *                         type: string
 *       500:
 *         description: Server error
 */
const searchService = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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