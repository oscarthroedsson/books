/**
 * Phto Types
 */
import { Photo } from "@prisma/client";

//omit take away ID field from prisma schema and creates a type
export type CreatePhoto = Omit<Photo, "id">;

export type EditPhoto = {
	title?: string | undefined;
	url?: string | undefined;
	comment?: string | null | undefined;
	userId: number;
	photoId: number;
};
