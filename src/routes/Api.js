const router = require('express').Router();
const Palindrome = require('../controller/Palindrome');

router.get('/getScores', async (req, res) => {
    try {
        const data = Palindrome.getScores();
        return res.json(data);

        // return res.json({
        //     status: true,
        //     msg: 'Success',
        //     data: data
        // });
    } catch (err) {
        const msg = (typeof err.message != 'undefined') ? err.message : err;
        return res.status(500).json({
            status: false,
            msg: msg,
            data: null
        });
    }
});

router.post('/submitEntry', async (req, res) => {
    try {
        const data = Palindrome.submitEntry(req.body);
        return res.json({
            status: true,
            msg: 'Success',
            data: data
        });
    } catch (err) {
        const msg = (typeof err.message != 'undefined') ? err.message : err;
        return res.status(500).json({
            status: false,
            msg: msg,
            data: null
        });
    }
});

module.exports = router;