const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET / test route'
    });
});

// Signup route
router.post('/signup', (req, res, next) => {
    
})

// Login route

router.post('/')

module.exports = router;
