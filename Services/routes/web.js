import express from 'express';
const router = express.Router();
import Controller from '../controllers/udhavController.js';
import NewsController from '../controllers/newsController.js';




//This is actual
router.get('/', Controller.defaultGet)
router.get('/login', Controller.logIn)
router.get('/signup', Controller.signUp)
router.post('/signup', Controller.signUpPost);

router.get('/business', NewsController.business);
router.get('/entertainment', NewsController.entertainment);
router.get('/general', NewsController.general);
router.get('/health', NewsController.health);
router.get('/science', NewsController.science);
router.get('/sports', NewsController.sports);
router.get('/technology', NewsController.technology);

router.get('/logout', NewsController.logout);





export default router;