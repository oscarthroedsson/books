import prisma from "../prisma";

export const getProfile = async (userId: number) => {
	console.log("userID: ", userId);
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			id: userId,
		},
	});

	return {
		id: user.id,
		first_name: user.first_name,
		last_name: user.last_name,
		email: user.email,
	};
};
