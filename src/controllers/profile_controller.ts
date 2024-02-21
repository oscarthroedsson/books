import { Request, Response } from "express";
import { getProfile } from "../services/profile_service";
import { Profile } from "../types/User.types";

export const showProfile = async (req: Request, res: Response) => {
	const userId = Number(req.user.id);

	try {
		const profileData = (await getProfile(userId)) as Profile;
		res.status(200).send({ status: "success", data: profileData });
		//
	} catch (err) {
		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};
