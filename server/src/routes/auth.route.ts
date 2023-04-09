import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { validateRequest } from "../middlewares/validator.middleware";
import { loginReq } from "../validators/auth.validator";

const router:Router = Router();

router.post("/login", validateRequest(loginReq),login)

export default router;