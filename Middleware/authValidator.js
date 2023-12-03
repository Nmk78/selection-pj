const JWT = require("jsonwebtoken")
require('dotenv').config();

const verifyToken = (req, res, next) => {
      const {authorization} = req.headers
      if (!authorization) {
            return res.status(401).json({
                  message: "Unauthorized"
            })
      }
      try {
            const token = authorization.split(' ')[1]
            verified = JWT.verify(token, process.env.JWT_secret)
            next()
      } catch (error) {
            res.status(500);
            res.json({error: error.message})
      }
}

module.exports = verifyToken;
