import { body } from "express-validator";

export const createUserRules = [
	body("first_name")
		.trim()
		.isString()
		.withMessage("First name has to be string")
		.bail()
		.isLength({ min: 3 })
		.bail()
		.withMessage("If your name is Bo, it is now Boo, at least 3 char on the name"),

	body("last_name")
		.trim()
		.isString()
		.withMessage("First name has to be string")
		.bail()
		.isLength({ min: 3 })
		.bail()
		.withMessage("Get a better last name, at least 3 char"),

	body("email").isEmail().bail().withMessage("This need to be in valid email format").trim(),

	body("password")
		.isString()
		.withMessage("password has to be a string")
		.bail()
		.trim()
		.notEmpty()
		.withMessage("password can not be empty")
		.isLength({ min: 6 })
		.bail()
		.withMessage("Come on, that is a bad password, at least 6 char"),
];
