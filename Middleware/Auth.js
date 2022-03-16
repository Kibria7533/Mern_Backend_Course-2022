const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    
    try {
        const token = authorization.split(' ')[1];
        console.log(token,'oooo')
        const decoded =jwt.verify(token, 'mysecret');
        const { data,id } = decoded;
        req.data = data;
        req.id=id;
        next();
    } catch(err) {
        next("Authentication failure!");
    }
};

module.exports = checkLogin;