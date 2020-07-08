import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const Users = await User.find();
        return res.status(200).json(Users)
    } catch (e) {
        return res.status(500).send({message: "Error getting users"})
    }
}
export const getUser = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(User);
}
export const createUser = async (req: Request, res: Response) => {
    const { 
        nickname, 
        email, 
        password,
        firstName,
        lastName 
    } = req.body;

    try {
        const user = new User({ nickname, email, firstName, password, lastName });
        await user.setPassword(password);

        const newUser = await user.save();
        console.log(newUser)
        delete newUser.password;
        return res.status(201).json(newUser);
    } catch(e) {
        console.log(e)
        return res.status(404).json({ message: 'Error creating an user' });
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);   
        await User.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: 'User Deleted' });
    } catch (e) {
        return res.status(404).json({ message: 'User not Found' });
    } 
}

export const updateUser = async (req: Request, res: Response) => {

}