const express = require('express');
                            // Allows us to pull "/:id" from app.use
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews');
});

/* reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
    res.send('CREATE /reviews');
});

/* GET reviews show /reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:reviews_id/edit');
});

/* PUT reviews update /reviews/:id */
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews destroy /reviews/:id */
router.delete('/:review_id/destroy', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;