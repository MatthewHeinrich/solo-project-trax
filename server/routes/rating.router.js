const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
    const query = `SELECT "feedback".overall, "feedback".trail_id FROM "feedback"
                ORDER BY "feedback".trail_id
                `
pool.query(query)
    .then( result => {
    res.send(result.rows)
})
.catch(err => {
    console.log('ERROR: Cannot get Ratings', err);
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
