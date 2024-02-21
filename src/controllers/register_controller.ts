import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { registerUser } from "../services/user_service";
import { matchedData } from "express-validator";
import { CreateUser } from "../types/User.types";

export const storeUser = async (req: Request, res: Response) => {
	const validatedData = matchedData(req);
	const hashedPassword = await bcrypt.hash(
		validatedData.password,
		Number(process.env.SALT_ROUNDS) || 10,
	);

	const data = {
		...validatedData,
		password: hashedPassword,
	} as CreateUser;

	try {
		const user = await registerUser(data);
		res.status(200).send({ status: "success", data: user });
	} catch (err) {
		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};
