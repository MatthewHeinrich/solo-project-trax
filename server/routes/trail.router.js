const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    const query = `SELECT * FROM trails`
    pool.query(query)
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body)
    const userId = req.body[0].id
    const trailId = req.body[1][0].id
    console.log(userId)
    console.log(trailId)
    // console.log(req.body.user.id);
    // const userId = req.body.user.id

    const query = `INSERT INTO "favorites" ("trail_id", "user_id") VALUES ($1, $2)`
    pool.query(query, [trailId, userId])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});

module.exports = router;