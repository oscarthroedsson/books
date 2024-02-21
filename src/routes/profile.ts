import express from "express";
const router = express.Router();

//validations
import { showProfile } from "../controllers/profile_controller";

router.get("/", showProfile);

export default router;
