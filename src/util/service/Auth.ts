import jwt from "jsonwebtoken";

export interface IPayload {
    user: {
        id: string;
    };
}


export const generateAndSignToken = async (payload: IPayload) => {
    return await jwt.sign(payload, "secre198247242", { expiresIn: "1h" });
};

