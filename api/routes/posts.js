const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.js')

router.get('/', postsController.index)
router.get('/:id', postsController.show)
router.post('/', postsController.create)

module.exports = router;
