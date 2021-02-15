const express = require('express')
const router = express.Router()
const toolController = require('../controllers/tools.controller');

// Retrieve all tools
router.get('/', toolController.findAll);

// Create a new tools
router.post('/', toolController.create);

// Retrieve a tools tools with id
router.get('/:id', toolController.findById);

// Update a tools with id
router.put('/:id', toolController.update);

// Delete a tools with id
router.delete('/:id', toolController.delete);

module.exports = router