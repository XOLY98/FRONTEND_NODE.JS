const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const route = express.Router();

const {Consumer, Catalogue} = require('../model');

const consumer = new Consumer();

const catalogue = new Catalogue();

route.get("^/$|/Styletto's", (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
});

// ===============Consumers Route======================

route.post('/login', bodyParser.json(), (req, res)=>{
    consumer.login(req, res);
});

route.get('/consumers', (req, res)=> {
    consumer.createConsumer(req, res);
});

route.put('/consumer/:ID', bodyParser.json(), (req, res)=>{
    consumer.updateConsumer(req, res);
});

// =================Catalogue Route=====================

route.delete('/catalogue', (req, res)=> {
    catalogue.fetchCatalogue(req, res);
});

route.get('/catalogue/:ID', (req, res)=> {
    catalogue.fetchItem(req, res);
});

route.post('/catalogue', bodyParser.json(), (req, res)=> {
    catalogue.addItem(req, res);
});

route.put('/catalogue/:ID', bodyParser.json(), (req, res)=> {
    catalogue.updateCatalogue(req, res);
});

route.delete('/catalogue/:ID', (req, res)=>{
    catalogue.deleteItem(req, res);
});

module.exports = route;
