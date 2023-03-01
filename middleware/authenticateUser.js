require('dotenv').config;

const {sign, verify} = require('jsonwebtoken');

function makeToken(consumer){
    return sign({
        emailAdd: consumer.emailAdd,
        conPass: consumer.conPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}

function confirmAToken(req, res, next) {
    try{
        const token = req.cookies["Registered Consumer"] !== null ? req.cookies["Registered Consumer"]: "New consumer, please enlist";
        const isConfirmed = null;
        if(token !== "New consumer, please enlist") {
            isConfirmed = verify(token, process.env.SECRET_KEY);
            if(isConfirmed) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "New consumer, please enlist"})
            }
        }else {
            res.status(400).json({err: "Please enlist as an user"});
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}

module.exports = {makeToken, confirmAToken};