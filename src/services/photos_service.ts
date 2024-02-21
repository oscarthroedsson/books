import prisma from "../prisma";
import { CreatePhoto, EditPhoto } from "../types/Photo.types";

export const getAllPhotos = async (userId: number) => {
	return await prisma.photo.findMany({
		where: {
			userId: userId,
		},
	});
};

export const addPhoto = async (data: CreatePhoto) => {
	return await prisma.photo.create({
		data,
	});
};

export const getPhoto = async (photoId: number, userId: number) => {
	return await prisma.photo.findUniqueOrThrow({
		where: {
			id: photoId,
			userId: userId,
		},
	});
};

export const editExistingPhoto = async (photoId: number, userId: number, data: EditPhoto) => {
	return await prisma.photo.update({
		where: {
			id: photoId,
			userId: userId,
		},
		data,
	});
};
