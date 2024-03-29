const express = require('express');
const router = express.Router();
const { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUserById, 
    deleteUserById, 
    addFriend, 
    removeFriend 
} = require('../../controllers/user-controller');

// Define routes for user-related operations
router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;