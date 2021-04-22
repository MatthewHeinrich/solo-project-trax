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

router.post('/', (req, res) => {
    console.log(req.body)
    const userId = req.body.user
    const trailId = Number.parseInt(req.body.trail)
    console.log(userId)
    console.log(trailId)
    // console.log(req.body.user.id);
    // const userId = req.body.user.id

    const query = `INSERT INTO "conditions" ("open", "closed", "wet", "tacky", "perfect", "dry", "user_id", "trail_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    pool.query(query, [req.body.checkedOpen, req.body.checkedClosed, req.body.checkedWet, 
                        req.body.checkedTacky, req.body.checkedPerfect, req.body.checkedDry, userId, trailId])
    .then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});


module.exports = router;