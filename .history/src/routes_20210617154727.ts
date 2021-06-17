import { Router } from "express";

import authMiddleware from "./app/middlewares/AuthMiddleware";

import UserController from "./app/Controllers/UserController";
import AuthController from "./app/Controllers/AuthController";

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/user',authMiddleware,UserController.index)

export default router;