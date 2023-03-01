const db = require('../config');

const {hash, compare, hashSync} = require('bcrypt');

const {makeToken} = require('../middleware/authenticateUser');

// =============Consumer Class=====================

class Consumer{
    login(req, res) {
        const {emailAdd, conPass} = req.body;
        const qRy = 
        `
        SELECT DEFAULT, firstName, lastName, gender, cellphoneNumber, emailAdd, conPass, conRole, conProf, loginDate
        FROM Consumers
        WHERE emailAdd = ${emailAdd};
        `;

        db.query(qRy, async(err, data)=> {
            if(err) throw err;
            if((!data) || (data == null)) {
                res.status(401).json({err: 'Please enter the correct email address.'})
            }else{
                await compare(conPass, data[0].conPass, (cErr, cData)=> {
                    if(cErr) throw cErr;

                    const jwToken = makeToken({
                        emailAdd, conPass
                    });

                    res.cookie('Valid Consumer.', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if(cOutcome) {
                        res.status(200).json({
                            msg: 'Successfully accessed.',
                            jwToken,
                            result: data[0]
                        })
                    }else{
                        res.status(401).json({
                            err: 'Password entered is invalid or not registered.'
                        })
                    }
                })
            }
        })
    }
    fetchConsumers(req, res) {
        const qRy = 
        `
        SELECT DEFAULT, firstName, lastName, gender, cellphoneNumber, emailAdd, conRole, conProf, loginDate
        FROM Consumers;
        `;

        db.query(qRy, (err, data)=> {
            if(err) throw err;
            else res.status(200).json({results:data})
        })
    }
    fetchConsumers(req, res) {
        const qRy = 
        `
        SELECT DEFAULT, firstName, lastName , gender, cellphoneNumber, emailAdd, conRole , conProf, loginDate
        FROM Consumers
        WHERE conID;
        `
        db.query(qRy,[req.params.id], (err, data)=> {
            if(err) throw err;
            else res.status(200).json({results:data})
        })
    }
    async createConsumer(req, res) {
        const feature = req.body;
        
        feature.conPass = await 
        hash(feature.conPass, 15);
        
        const consumer = {
            emailAdd: feature.emailAdd,
            conPass: feature.conPass
        }
        
        const qRy =
        `INSERT INTO Consumers
        SET ?;`;

        db.query(qRy, [feature], (err)=> {
            if(err) {
                res.status(401).json({err}), console.log(err);;
            }else {
                
                const jwToken = makeToken(consumer);
                
                res.cookie('Valid consumer!', jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });

                res.status(200).json({msg: 'New consumer was added to database.'})
            }
        })    
    }
    renewConsumer(req, res) {
        const info = req.body;
        if(info.conPass !== null || 
            info.conPass !== undefined)
            info.conPass = hashSync(info.conPass, 15);
        const qRy = 
        `
        UPDATE Consumers
        SET ?
        WHERE conID = ?;
        `;
        
        db.query(qRy,[info, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                'A record was updated.'} );
        })  
    }
    removeConsumer(req, res) {
        const qRy = 
        `
        DELETE FROM Consumers
        WHERE conID = ?;
        `;
        
        db.query(qRy,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                'A record was removed from the database.'} );
        })    
    }
}

// ===================Catalogue Class============================

class Catalogue {
    fetchCatalogue(req, res) {

        const qRy = `SELECT prodID, prodName, prodDes, category, price, prodQuantity, imgURL
        FROM Catalogue;`;

        db.query(qRy, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchItem(req, res) {
        const qRy = `SELECT prodID, prodName, prodDes, category, price, prodQuantity, imgURL
        FROM Catalogue
        WHERE id = ?;`;
        db.query(qRy, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    includeItem(req, res) {
        const qRy = 
        `
        INSERT INTO Catalogue
        SET ?;
        `;
        db.query(qRy,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: 'There was trouble adding a product.'});
                }else {
                    res.status(200).json({msg: 'New product was added.'});
                }
            }
        );    

    }
    improveItem(req, res) {
        const qRy = 
        `
        UPDATE Catalogue
        SET ?
        WHERE prodID = ?
        `;
        db.query(qRy,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: 'There was trouble improving the product.'});
                }else {
                    res.status(200).json({msg: 'A product was updated.'});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const qRy = 
        `
        DELETE FROM Catalogue
        WHERE prodID = ?;
        `;
        db.query(qRy,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: 'Data was not found in the records.'});
            res.status(200).json({msg: 'A product was removed.'});
        })
    }
}

module.exports = {
    Consumer, 
    Catalogue
}