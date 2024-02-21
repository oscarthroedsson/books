import bcrypt from "bcrypt";

import { Request, Response, NextFunction } from "express";
import { getUserByEmail } from "../../services/user_service";
import { extractAndValidateAuthHeader } from "../../helpers/auth_helper";

export const basicAuth = async (req: Request, res: Response, next: NextFunction) => {
	let payload: string;

	try {
		payload = extractAndValidateAuthHeader(req);
	} catch (err) {
		if (err instanceof Error) {
			return res.status(401).send({ status: "fail", message: err.message });
		}
		return res.status(401).send({ status: "fail", message: "Unknown authorization error" });
	}

	const decodedPayload = Buffer.from(payload, "base64").toString("ascii");
	const [email, password] = decodedPayload.split(":");

	if (!email || !password) {
		return res.status(401).send({ status: "fail", message: "Auth req" });
	}

	const user = await getUserByEmail(email);

	if (!user) {
		return res.status(401).send({ status: "fail", message: "Auth req" });
	}

	const correctPassword = await bcrypt.compare(password, user.password); // user.password is the hashed pwd in db
	if (!correctPassword) {
		return res.status(401).send({ status: "fail", message: "Auth req" });
	}

	req.user = user;

	next();
};
