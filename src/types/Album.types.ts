/**
 * Phto Types
 */
import { Album } from "@prisma/client";

//omit take away ID field from prisma schema and creates a type
export type CreateAlbum = Pick<Album, "title" | "userId">;

export type EditAlbum = Partial<Pick<Album, "title">>;
