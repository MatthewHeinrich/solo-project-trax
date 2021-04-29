const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.put('/', (req, res) => {
  // POST route code here
    console.log(req.body)
    const query = `UPDATE "user" SET "username" = ($1), "first" = ($2), "last" = ($3)
                WHERE "id" = ($4)`
    pool.query(query, [req.body.editUsername, req.body.editFirst, req.body.editLast, req.body.user.id] )
.then( result => {
    res.send(result.rows);
})
.catch(err => {
    console.log('ERROR: Cannot get Trails', err);
    res.sendStatus(500)
})
});


module.exports = router;
