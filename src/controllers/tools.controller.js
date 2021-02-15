'use strict';

const Tools = require('../models/tools.model');

exports.findAll = function(req, res) {
  Tools.findAll(function(err, tools) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', tools);
    res.send(tools);
  });
};

exports.create = function(req, res) {
    const new_tools = new Tools(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tools.create(new_tools, function(err, tools) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Tools added successfully!",data:tools});
        });
    }
};


exports.findById = function(req, res) {
    Tools.findById(req.params.id, function(err, tools) {
        if (err)
        res.send(err);
        res.json(tools);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tools.update(req.params.id, new Tools(req.body), function(err, tools) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Tools successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Tools.delete( req.params.id, function(err, tools) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Tools successfully deleted' });
  });
};