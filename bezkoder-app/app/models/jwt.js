
const TokenGenerator = require('./TokenGenerator');
const jwt = require('jsonwebtoken');


const generateToken = async (info) => {



const tokenGenerator = new TokenGenerator('a', 'a', { algorithm: 'HS256', keyid: '1', noTimestamp: false, expiresIn: '2m', notBefore: '2s' })
let token = tokenGenerator.sign({ myclaim: 'something' }, { audience: 'myaud', issuer: 'myissuer', jwtid: '1', subject: 'user' })

console.log(jwt.decode(token, { complete: true }))

return {token:token,expires:'2 minutes'};

}


const refreshToken = async (token) => {  


    const tokenGenerator = new TokenGenerator('a', 'a', { algorithm: 'HS256', keyid: '1', noTimestamp: false, expiresIn: '2m', notBefore: '2s' })

    let token2 = tokenGenerator.refresh(token, { verify: { audience: 'myaud', issuer: 'myissuer' }, jwtid: '2' })

    console.log(jwt.decode(token2, { complete: true }))

    return {token:token2,expires:'2 minutes'};
}


module.exports = {generateToken,refreshToken};