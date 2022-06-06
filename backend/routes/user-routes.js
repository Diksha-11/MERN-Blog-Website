import express from "express";
import { getAllUser, signup, login } from "../controllers/user-controller";

const router = express.Router();

router.get("/", getAllUser );

//creating user
router.post("/signup" , signup);
router.post("/login", login);

export default router;