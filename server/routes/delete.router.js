const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.delete('/:id', (req, res) => {
    console.log(req.body.id)
  // GET route code here
    const query = `DELETE FROM "favorites"
                    WHERE "favorites".trail_id = ($1)`
    pool.query(query, [req.body.id])
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
