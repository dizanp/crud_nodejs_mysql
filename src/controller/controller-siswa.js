const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua siswa
    getDatasiswa(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tbl_siswa;
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },

    // Ambil data siswa berdasarkan ID
    getDatasiswaByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tbl_siswa WHERE nis = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        })
    },
    // Simpan data siswa
    addDatasiswa(req,res){
        let data = {
            nama : req.body.nama,
            jenis_kelamin : req.body.jenis_kelamin
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO tbl_siswa SET ?;
                `
            , [data],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil tambah data!',
                });
            });
            connection.release();
        })
    },
    // Update data siswa
    editDatasiswa(req,res){
        let dataEdit = {
            nama : req.body.nama,
            jenis_kelamin : req.body.jenis_kelamin
        }
        let nis = req.body.nis
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE tbl_siswa SET ? WHERE nis = ?;
                `
            , [dataEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },
    // Delete data siswa
    deleteDatasiswa(req,res){
        let nis = req.body.nis
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM tbl_siswa WHERE nis = ?;
                `
            , [nis],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}