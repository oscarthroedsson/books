/**
 * Main application routes
 */
import express from "express";

//routes
import photoRoutes from "./photos";
import albumRoutes from "./albums";
import profileRoutes from "./profile";
import { storeUser } from "../controllers/register_controller";
import { createUserRules } from "../validations/user";
import validateRequest from "../middlewares/validate_request";
import { basicAuth } from "../middlewares/auth/basicAuth";

const router = express.Router();

/**
 * GET /
 */
router.get("/", (req, res) => {
	res.send({
		message: "But first, let me take a selfie 🤳 https://www.youtube.com/watch?v=kdemFfbS5H0",
	});
});

router.use("/photos", basicAuth, photoRoutes);

router.use("/albums", basicAuth, albumRoutes);

router.use("/register", createUserRules, validateRequest, storeUser);

router.use("/profile", basicAuth, profileRoutes);

/**
 * Catch-all route handler
 */
router.use((req, res) => {
	// Respond with 404 and a message in JSON-format
	res.status(404).send({
		message: "Not Found",
	});
});

export default router;
