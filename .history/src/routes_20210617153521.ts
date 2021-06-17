import { Router } from "express";

import UserController from "./app/Controllers/UserController";
import AuthController from "./app/Controllers/AuthController";

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.store);

export default router;