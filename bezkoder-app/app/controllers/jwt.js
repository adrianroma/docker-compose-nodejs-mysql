const model = require('../models/jwt');

/**
 * @swagger
 * /api/generate_token:
 *   post:
 *     summary: Generate JWT token
 *     description: Generates a new JWT token with 2 minutes expiration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 example: "user_data"
 *     responses:
 *       200:
 *         description: Token generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 expires:
 *                   type: string
 *                   example: "2 minutes"
 *       500:
 *         description: Server error
 */
const generateToken = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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

/**
 * @swagger
 * /api/refresh_token:
 *   post:
 *     summary: Refresh JWT token
 *     description: Refreshes an existing JWT token with new expiration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 expires:
 *                   type: string
 *                   example: "2 minutes"
 *       500:
 *         description: Server error
 */
const refreshToken = (req, res) => {
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString();
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
