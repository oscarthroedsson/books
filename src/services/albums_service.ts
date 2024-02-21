import prisma from "../prisma";
import { CreateAlbum, EditAlbum } from "../types/Album.types";
import { PhotoId } from "../types/Global.types";

export const getAllAlbums = async (userId: number) => {
	return await prisma.album.findMany({
		where: {
			userId: userId,
		},
	});
};

export const getAlbum = async (albumId: number, userId: number) => {
	return await prisma.album.findUniqueOrThrow({
		where: {
			id: albumId,
			userId: userId,
		},
		include: {
			photos: true,
		},
	});
};

export const addAlbum = async (data: CreateAlbum) => {
	return await prisma.album.create({
		data,
	});
};

export const editExistingAlbum = async (albumId: number, data: EditAlbum, userId: number) => {
	return await prisma.album.update({
		where: {
			id: albumId,
			userId: userId,
		},
		data,
	});
};

export const linkPhotosToAlbum = async (albumId: number, photoIds: PhotoId[], userId: number) => {
	return await prisma.album.update({
		where: {
			id: albumId,
			userId: userId,
		},
		data: {
			photos: {
				connect: photoIds,
			},
		},
	});
};
