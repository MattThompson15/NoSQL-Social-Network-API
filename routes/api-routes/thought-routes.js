const express = require('express');
const router = express.Router();
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThought, 
    deleteThought,
    updateThoughtById, 
    createReaction,
    deleteReaction
 } = require('../../controllers/thought-controller');

 // Define routes for thought-related operations
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;