/**
 * Authentication helpers
 */

import { Request } from "express";

const authType = "Basic"; //only basic becuase no JWT

export const extractAndValidateAuthHeader = (req: Request) => {
	if (!req.headers.authorization) {
		throw new Error("Auth header missing");
	}

	const [authSchema, payload] = req.headers.authorization.split(" ");

	if (authSchema !== authType) {
		throw new Error(`Expected basic authentication`);
	}
	return payload;
};
