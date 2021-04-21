const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log(res.rows)
    // Send back user object from the session (previously queried from the database)
    const query = `SELECT * FROM "feedback" 
                    JOIN "trails" ON "trails".id = "feedback".trail_id
                    JOIN "conditions" ON "trails".id = "conditions".trail_id
                    WHERE "trails".id = '3'`
    pool.query(query)
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});

module.exports = router;