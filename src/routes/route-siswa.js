const router = require('express').Router();
const { siswa } = require('../controller');

// GET localhost:8080/siswa => Ambil data semua siswa
router.get('/siswa', siswa.getDatasiswa);

// GET localhost:8080/siswa/2 => Ambil data semua siswa berdasarkan id = 2
router.get('/siswa/:id', siswa.getDatasiswaByID);

// POST localhost:8080/siswa/add => Tambah data siswa ke database
router.post('/siswa/add', siswa.addDatasiswa);

// POST localhost:8080/siswa/2 => Edit data siswa
router.post('/siswa/edit', siswa.editDatasiswa);

// POST localhost:8080/siswa/delete => Delete data siswa
router.post('/siswa/delete/', siswa.deleteDatasiswa);

module.exports = router;