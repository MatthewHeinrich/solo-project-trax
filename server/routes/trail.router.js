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
  // POST route code here
});

module.exports = router;