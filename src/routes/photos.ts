import express from "express";
const router = express.Router();

//validations
import validateRequest from "../middlewares/validate_request";

//controllers
import { storePhoto, showPhoto, showPhotos, updatePhoto } from "../controllers/photos_controller";
import { createEditPhotoRules, createPhotoRules } from "../validations/photos";
// import { basicAuth } from "../middlewares/auth/basicAuth";

//----------------------------------------------------------------------------------------------------------------------------
//# PHOTOS

/*
Syntax
router.VERB("path", RULES?, VALIDATE REQ?, CONTROLLER)
*/

router.get("/", showPhotos);

router.get("/:photoId", showPhoto);

router.post("/", createPhotoRules, validateRequest, storePhoto);

router.patch("/:photoId", createEditPhotoRules, validateRequest, updatePhoto);

//----------------------------------------------------------------------------------------------------------------------------

export default router;
