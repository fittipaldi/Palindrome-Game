const router = require('express').Router();

router.get('/getScores', async (req, res) => {
    try {
        return res.json([
            {name: 'Fulando', points: 5},
            {name: 'Fulando 2', points: 6},
            {name: 'Fulando 3', points: 7}
        ]);


        // return res.json({
        //     status: true,
        //     msg: 'Success',
        //     data: []
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

        console.log('\x1b[41m');
        console.log(req.body);
        console.log('\x1b[0m');

        return res.json({
            status: true,
            msg: 'Success',
            data: []
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