const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    const query = `SELECT * FROM "feedback" 
                    JOIN "trails" ON "trails".id = "feedback".trail_id
                    JOIN "conditions" ON "trails".id = "conditions".trail_id
                    WHERE "trails".id = ($1)`
    pool.query(query, [req.params.id])
    .then( result => {
    res.send(result.rows)
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});

router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    const query = `SELECT "trails".trail_name, (SUM("overall")/ COUNT("feedback".id) ) AS "average" FROM "feedback"
                    JOIN "trails" ON "trails".id = "feedback".trail_id
                    WHERE "feedback".trail_id = ($1)
                    GROUP BY "trails".trail_name
                    `
    pool.query(query, [req.query.id])
    .then( result => {
    res.send(result.rows)
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    const query = `SELECT * FROM "conditions" 
                    JOIN "trails" ON "trails".id = "conditions".trail_id
                    WHERE "trails".id = ($1)
                    `
    pool.query(query, [req.query.id])
    .then( result => {
    res.send(result.rows)
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});

module.exports = router;