import { User } from "../User.types";

declare global {
	namespace Express {
		export interface Request {
			user?: User;
		}
	}
}
