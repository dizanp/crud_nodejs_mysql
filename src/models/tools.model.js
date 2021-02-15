'user strict';
var dbConn = require('./../../config/db.config');

//Tools object create
var Tools = function(tools){
    this.name      = tools.name;
    this.quantity  = tools.quantity;
    this.quality   = tools.quality;
};
Tools.create = function (newTool, result) {    
    dbConn.query("INSERT INTO Tools set ?", newTool, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Tools.findById = function (id, result) {
    dbConn.query("Select * from Tools where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Tools.findAll = function (result) {
    dbConn.query("Select * from Tools", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Tools : ', res);  
            result(null, res);
        }
    });   
};
Tools.update = function(id, Tools, result){
  dbConn.query("UPDATE Tools SET name=?,quantity=?,quality=? WHERE id = ?", [Tools.name,Tools.quantity,Tools.quality, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Tools.delete = function(id, result){
     dbConn.query("DELETE FROM Tools WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Tools;