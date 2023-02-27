const db = require('../config');

const {hash, compare, hashSync} = require('bcrypt');

const {makeToken} = require('../middleware/authenticateUser');

// =============Consumer Class=====================

class Consumer{
    login(req, res) {
        const {emailAdd, conPass} = req.body;
        const qRy = 
        `
        SELECT 
        `
    }
}