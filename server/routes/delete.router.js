const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.delete('/:id', (req, res) => {
    console.log(req.body)
  // GET route code here
    const query = `DELETE * FROM "favorites"
                    WHERE "favorites".id = ($1)`
    pool.query(query, [req.body])
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
