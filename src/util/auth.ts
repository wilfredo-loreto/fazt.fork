import jwt from "jsonwebtoken";
import { JWT_SECRET } from '../config';

export interface IPayload {
    user: {
        id: string;
    };
}


export const generateAndSignToken = async (payload: IPayload) => {
    return await jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

