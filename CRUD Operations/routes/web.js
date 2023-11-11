import express from "express";
const router = express.Router();
import IndexHandler from "../controllers/indexController.js";

router.get('/', IndexHandler.indexController);
router.post('/', IndexHandler.indexControllerPost);

router.get('/edit/:id', IndexHandler.editForm)
router.post('/update/:id', IndexHandler.updateForm)

router.get('/delete/:id', IndexHandler.deleteForm);
export default router;