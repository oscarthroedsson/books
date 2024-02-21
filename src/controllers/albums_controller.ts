import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
//https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors

//functions
import {
	getAllAlbums,
	getAlbum,
	addAlbum,
	editExistingAlbum,
	linkPhotosToAlbum,
} from "../services/albums_service";

export const showAlbums = async (req: Request, res: Response) => {
	const userId = Number(req.user.id);

	try {
		const albums = await getAllAlbums(userId);

		if (albums.length < 1) {
			res.status(200).send({
				status: "success",
				message: "We couldnt find any albums that you have created",
			});
		} else {
			res.status(200).send({ status: "success", data: albums });
		}
	} catch (err) {
		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};

export const showAlbum = async (req: Request, res: Response) => {
	const userId = Number(req.user.id);
	const albumId = Number(req.params.albumId);

	try {
		const album = await getAlbum(albumId, userId);
		res.status(200).send({ status: "success", data: album });
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
			return res.status(404).send({
				status: "error",
				message: "Album not found on this user",
			});
		} else {
			res.status(500).send({
				status: "error",
				message: "Something went wrong when querying the database",
			});
		}
	}
};

export const storeAlbum = async (req: Request, res: Response) => {
	const userId = Number(req.user.id); //ts
	req.body.userId = userId;

	try {
		const album = await addAlbum(req.body);
		res.status(201).send({ status: "success", data: album });
	} catch (err) {
		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};

export const updateAlbum = async (req: Request, res: Response) => {
	const albumId = Number(req.params.albumId);

	try {
		const album = await editExistingAlbum(albumId, req.body, req.user.id);
		res.status(200).send({ status: "success", data: album });
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
			return res.status(404).send({
				status: "error",
				message: "Album not found on this user",
			});
		}

		res.status(500).send({
			status: "error",
			message: "Something went wrong when querying the database",
		});
	}
};

export const addPhotosToAlbum = async (req: Request, res: Response) => {
	const albumId = Number(req.params.albumId);

	try {
		await linkPhotosToAlbum(albumId, req.body, req.user.id);
		res.status(200).send({ status: "success", data: null });
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2016") {
			res.status(404).send({
				status: "error",
				message: "Album or Photos not found on this user",
			});
		} else {
			res.status(500).send({
				status: "error",
				message: "Something went wrong when querying the database",
			});
		}
	}
};
