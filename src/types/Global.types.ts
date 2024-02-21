import { Photo } from "@prisma/client";

export type PhotoId = Pick<Photo, "id">;
