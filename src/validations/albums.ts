//VALIDATIONS
import { body } from "express-validator";

export const createAlbumRules = [
	body("title")
		.isString()
		.withMessage("title has to be string")
		.bail()
		.trim()
		.notEmpty()
		.withMessage("Title can not be empty")
		.bail()
		.isLength({ min: 3, max: 100 })
		.withMessage("Title | Come on, atleast 3char and max 100")
		.bail(),
];

export const editAlbumRules = [
	body("title")
		.trim()
		.isString()
		.withMessage("title has to be string")
		.bail()
		.notEmpty()
		.withMessage("Title can not be empty")
		.bail()
		.isLength({ min: 3, max: 100 })
		.withMessage("Come on, atleast 3char and max 100 on title")
		.bail(),
];
