import express from "express";
const router = express.Router();

//validations
import validateRequest from "../middlewares/validate_request";
import {
	showAlbums,
	showAlbum,
	storeAlbum,
	updateAlbum,
	addPhotosToAlbum,
} from "../controllers/albums_controller";
import { createAlbumRules, editAlbumRules } from "../validations/albums";

//controllers

//----------------------------------------------------------------------------------------------------------------------------
//# ALBUMS

/*
Syntax
router.VERB("path", RULES?, VALIDATE REQ?, CONTROLLER)
*/

router.get("/", showAlbums);

router.get("/:albumId", showAlbum);

router.post("/", createAlbumRules, validateRequest, storeAlbum);

router.patch("/:albumId", editAlbumRules, validateRequest, updateAlbum);

router.post("/:albumId/photos", addPhotosToAlbum);
//----------------------------------------------------------------------------------------------------------------------------

export default router;
