import { Request, Response } from "express";
import { addPhoto, editExistingPhoto, getAllPhotos, getPhoto } from "../services/photos_service";
import { Prisma } from "@prisma/client";

export const showPhotos = async (req: Request, res: Response) => {
	const userId = Number(req.user.id);

	try {
		const photos = await getAllPhotos(userId);
		res.status(200).send({ status: "success", data: photos });
	} catch (err) {
		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};

export const showPhoto = async (req: Request, res: Response) => {
	const photoId = Number(req.params.photoId);
	const userId = Number(req.user.id);

	try {
		const photo = await getPhoto(photoId, userId);
		res.status(200).send({ status: "success", data: photo });
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
			res.status(404).send({
				status: "error",
				message: "Photo not found on this user",
			});
		} else {
			res.status(500).send({
				status: "error",
				message: "Something went wrong when querying the database",
			});
		}
	}
};

export const storePhoto = async (req: Request, res: Response) => {
	const createUser = { ...req.body, userId: req.user.id };

	try {
		const photo = await addPhoto(createUser);
		res.status(201).send({ status: "success", data: photo });
	} catch (err) {
		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};

export const updatePhoto = async (req: Request, res: Response) => {
	const photoId = Number(req.params.photoId);
	const userId = req.user.id;

	try {
		const photo = await editExistingPhoto(photoId, userId, req.body);
		res.status(201).send({ status: "success", data: photo });
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
			res.status(404).send({
				status: "error",
				message: "Couldnt update photos on this user",
			});
		} else {
			res.status(500).send({
				status: "error",
				message: "Something went wrong when querying the database",
			});
		}
	}
};
