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

route.get('/consumers', (req, res)=> { 
    consumer.fetchConsumers(req, res);
});

route.post('/consumer', bodyParser.json(), (req, res)=>{
    consumer.createConsumer(req, res);
});

route.put('/consumer/:id', bodyParser.json(), (req, res)=>{
    consumer.renewConsumer(req, res);
});

route.delete('/consumer/:id', (req, res)=> {
    consumer.removeConsumer(req, res);
});

route.patch('/login', (req, res)=> {
    consumer.login(req, res);
});

// =================Catalogue Route=====================


route.get('/catalogue', (req, res)=> {
    catalogue.fetchCatalogue(req, res);
});

route.get('/catalogue/:id', (req, res)=> {
    catalogue.fetchItem(req, res);
});

route.post('/catalogue', bodyParser.json(), (req, res)=> {
    catalogue.includeItem(req, res);
});

route.put('/catalogue/:id', bodyParser.json(), (req, res)=> {
    catalogue.improveItem(req, res);
});

route.delete('/catalogue/:id', (req, res)=>{
    catalogue.deleteProduct(req, res);
});

module.exports = route;
