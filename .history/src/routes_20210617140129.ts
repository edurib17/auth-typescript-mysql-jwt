import { Router } from "express";

import UserController from "./app/Controllers/UserController";

const router = Router();

router.post('/users', UserController.store);

export default router;