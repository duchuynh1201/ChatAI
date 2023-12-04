const express = require("express");


const router = express.Router();

// router.route('/').get();
router.get('/', (req, res) => {
    res.render('../../../frontend/views/home');
});

module.exports = router;