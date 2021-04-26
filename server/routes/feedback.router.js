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
        // console.log(req.params)
        // const query2 = `SELECT AVG("feedback".overall) FROM "feedback" 
        //                 JOIN "trails" ON "trails".id = "feedback".trail_id
        //                 JOIN "conditions" ON "feedback".trail_id = "conditions".trail_id
        //                 WHERE "trails".id = ($1)`
        // pool.query(query2, [req.params.id])           
    res.send(result.rows)
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});

router.post('/', (req, res) => {
    console.log(req.body)
    const userId = req.body.conditions.user
    const trailId = Number.parseInt(req.body.styles.data.trail)
    console.log(userId)
    console.log(trailId)
    console.log(req.body.styles)
    // console.log(req.body.user.id);
    // const userId = req.body.user.id

    const query = `INSERT INTO "conditions" ("open", "closed", "wet", "tacky", "perfect", "dry", "user_id", "trail_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    pool.query(query, [req.body.conditions.checkedOpen, req.body.conditions.checkedClosed, req.body.conditions.checkedWet, 
                        req.body.conditions.checkedTacky, req.body.conditions.checkedPerfect, req.body.conditions.checkedDry, userId, trailId])
    .then(result => {
        const query = `INSERT INTO "feedback" ("flowy", "technical", "downhill", "climbing", "overall", "user_id", "trail_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`
                    pool.query(query, [req.body.styles.data.flowy, req.body.styles.data.technical, req.body.styles.data.downhill,
                                        req.body.styles.data.climbing, req.body.styles.data.overall, userId, trailId])
        res.send(result.rows)
    })
    .catch(err => {
        console.log('ERROR: Cannot get Trails', err);
        res.sendStatus(500)
    })
});


module.exports = router;