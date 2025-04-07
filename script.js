const jwt = require('jsonwebtoken');
 const encrypt = (payload, secret) => {
   // your code here and return token
   const token = jwt.sign(payload, secret, { expiresIn: '1m' }); // expires in 1 minute
   return token;
 };
 
 module.exports = encrypt;
 module.exports = encrypt;