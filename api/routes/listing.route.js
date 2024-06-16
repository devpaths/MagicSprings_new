import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
//add verifytoken , got 401 unauthorzed error earlier
router.post('/create' , createListing)

export default router;