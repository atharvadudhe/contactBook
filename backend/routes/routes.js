import express from "express";
import { POST, GET, PUT, DELETE, GETBYID } from "../controller/contactController.js";

const router = express.Router();

router.get('/', GET);
router.get('/:id', GETBYID);
router.delete('/:id', DELETE);
router.put('/:id', PUT);
router.post('/', POST);

export default router;