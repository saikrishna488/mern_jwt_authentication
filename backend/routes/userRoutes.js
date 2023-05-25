import express from 'express';
const router = express.Router();
import {protect} from '../middleware/authMiddleware.js'
import {
    authUser,
    registerUser,
    logoutUser,
    getUserprofile,
    updateUserprofile,
    getProfile
} from '../controllers/userController.js';


router.post("/auth",authUser);
router.post("/",registerUser);
router.post("/logout",logoutUser);
router.route('/profile').get(protect,getUserprofile).put(updateUserprofile);
router.get('/profile/:token',getProfile);

export default router