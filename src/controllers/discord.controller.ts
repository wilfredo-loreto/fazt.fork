import Discord from '../models/Discord';
import {Request, Response} from 'express';

export const getDiscords = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({});
    } catch(err) {
        return res.status(404).json({message: ''});
    }
}
export const getDiscord = async (req: Request, res: Response) => {
    const discord = await Discord.findById(req.params.id);
    if (!discord) {
      return res.status(404).json({ message: 'Discord not found' }); 
    }
  
    return res.status(200).json(discord);
}
export const createDiscord = async (req: Request, res: Response) => {
    const discord = new Discord(req.body);
  try {
    await discord.save();
    return res.status(200).json({ message: 'Discord Created' });
  } catch (err) {
    return res.status(500).json({ message: 'internal server error' });
  }
}
export const deleteDiscord = async (req: Request, res: Response) => {}
export const updateDiscord = async (req: Request, res: Response) => {
    
}