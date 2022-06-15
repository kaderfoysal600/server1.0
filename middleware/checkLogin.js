const jwt = require('jsonwebtoken')
const checkLogin = (req, res , next) => {
    const {authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const { userName, userId} = decode;
        res.userName = userName;
        res.userId = userId;
        next()
    } catch {
        next('authentication failure!')
    }
}
module.exports = checkLogin