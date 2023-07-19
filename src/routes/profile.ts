const express = require('express');
const router = express.Router();
import { profileController } from '../controllers/profile';
import { checkJwt } from '../middlewares/session';

router.put('/profile', checkJwt, profileController.editProfile);

module.exports = router;
