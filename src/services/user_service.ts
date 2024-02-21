import prisma from "../prisma";
import { CreateUser } from "../types/User.types";

export const registerUser = async (data: CreateUser) => {
	const user = await prisma.user.create({
		data,
	});

	return { first_name: user.first_name, last_name: user.last_name, email: user.email };
};

export const getUserByEmail = async (userEmail: string) => {
	try {
		const user = await prisma.user.findUniqueOrThrow({
			where: {
				email: userEmail,
			},
		});
		return { id: user.id, password: user.password };
	} catch (err) {
		return null;
	}
};
