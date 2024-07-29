import express from "express";
import { validateData } from "../../middleware/validation";
import { UserLoginSchema, UserRegisterSchema } from "./schema";
import { loginUser, registerUser } from "./controller";

const router = express.Router();

router.post(
  "/register",
  validateData({ schema: UserRegisterSchema }),
  registerUser
);
router.post("/login", validateData({ schema: UserLoginSchema }), loginUser);

export default router;
