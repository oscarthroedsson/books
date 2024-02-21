/**
 * Validate Request middleware
 */
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * Validate incoming request
 */
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
	const validationErrors = validationResult(req);

	// validation fail, send errors and stop request
	if (!validationErrors.isEmpty()) {
		res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		});
		return;
	}

	// no validation error was found, continue
	next();
};

export default validateRequest;
