const model = require('../models/user');

/**
 * @swagger
 * /api/user/generateTable:
 *   post:
 *     summary: Generate users table
 *     description: Creates the users table in the database
 *     tags: [Users]
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
 * /api/user/createUser:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user in the database
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - client
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securePassword123"
 *               client:
 *                 type: string
 *                 example: "ClientA"
 *     responses:
 *       200:
 *         description: User created successfully
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
const createUser = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/user/checkPassword:
 *   post:
 *     summary: Check user password
 *     description: Validates user credentials
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securePassword123"
 *     responses:
 *       200:
 *         description: Password check result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: successful
 *                 result:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Server error
 */
const checkPassword = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/user/deleteUser:
 *   post:
 *     summary: Delete a user
 *     description: Deletes a user from the database by ID
 *     tags: [Users]
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
 *         description: User deleted successfully
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
const deleteUser = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/user/checkPasswordAndModulesAndServices:
 *   post:
 *     summary: Check password and retrieve user data with modules and services
 *     description: Validates credentials and returns user data along with associated modules and services
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securePassword123"
 *     responses:
 *       200:
 *         description: User data with modules and services
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
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       client:
 *                         type: string
 *                       module_id:
 *                         type: integer
 *                       module:
 *                         type: string
 *                       descripcion:
 *                         type: string
 *                       active:
 *                         type: boolean
 *                       server_id:
 *                         type: integer
 *                       server:
 *                         type: string
 *       500:
 *         description: Server error
 */
const checkPasswordAndModulesAndServices = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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