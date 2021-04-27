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
    let userId = req.user.id
    console.log(userId)
    // Send back user object from the session (previously queried from the database)
    const query = `SELECT "trails".trail_name, "trails".trail_city, "trails".map_url, "trails".id FROM "favorites"
                    JOIN "user" ON "user".id = "favorites".user_id
                    JOIN "trails" ON "trails".id = "favorites".trail_id 
                    WHERE "user".id = ($1)`
    pool.query(query, [userId])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});

module.exports = router;