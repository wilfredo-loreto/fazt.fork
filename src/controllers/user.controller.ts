import { Handler } from '../types';
import User from '../models/User';

export const getUsers: Handler = async (req, res) => {
  try {
    const Users = await User.find();
    return res.status(200).json(Users);
  } catch (e) {
    return res.status(500).send({ message: 'Error getting users' });
  }
};
export const getUser: Handler = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(User);
};
export const createUser: Handler = async (req, res) => {
  const { nickname, email, password, firstName, lastName } = req.body;

  try {
    const user = new User({ nickname, email, firstName, password, lastName });
    await user.setPassword(password);

    const newUser = await user.save();
    console.log(newUser);
    delete newUser.password;
    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: 'Error creating an user' });
  }
};

export const deleteUser: Handler = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await User.findByIdAndRemove(req.params.id);
    return res.status(200).json({ message: 'User Deleted' });
  } catch (e) {
    return res.status(404).json({ message: 'User not Found' });
  }
};

export const updateUser = async (req: Request, res: Response) => {};
