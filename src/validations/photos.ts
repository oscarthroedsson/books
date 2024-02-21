/**
 * Validation Rules for Authentication
 */
import { body } from "express-validator";

export const createPhotoRules = [
	body("title")
		.trim()
		.isString()
		.withMessage("title has to be string")
		.bail()
		.notEmpty()
		.withMessage("Title can not be empty")
		.bail()
		.isLength({ min: 3, max: 100 })
		.withMessage("Title | Come on, atleast 3char and max 100")
		.bail(),

	body("url")
		.trim()
		.notEmpty()
		.withMessage("URL | Can not be empty")
		.bail()
		.isURL()
		.withMessage("Need URL to image")
		.bail(),

	body("comment")
		.optional()
		.isString()
		.withMessage("Comment | Needs to be string format")
		.bail()
		.isLength({ min: 3, max: 300 })
		.withMessage(
			"Comment | Bro, or sis, better comment (min 3 char / max 300 char) or no comment",
		)
		.bail(),
];

export const createEditPhotoRules = [
	body("title")
		.optional()
		.trim()
		.isString()
		.withMessage("title has to be string")
		.bail()
		.notEmpty()
		.withMessage("Title can not be empty")
		.bail()
		.isLength({ min: 3, max: 100 })
		.withMessage("Title | Come on, atleast 3char and max 100")
		.bail(),

	body("url")
		.optional()
		.trim()
		.notEmpty()
		.withMessage("URL | Can not be empty")
		.bail()
		.isURL()
		.withMessage("Need URL to image")
		.bail(),

	body("comment")
		.optional()
		.isString()
		.withMessage("Comment | Needs to be string format")
		.bail()
		.isLength({ min: 3, max: 300 })
		.withMessage(
			"Comment | Bro, or sis, better comment (min 3 char / max 300 char) or no comment",
		)
		.bail(),
];
