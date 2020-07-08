import { Request, Response } from 'express';
import Project from '../models/Project';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (e) {
    return res.status(400).json({message: "Error Searching Projects"});
  }
}

export const getProject = async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: 'Project not found' }); 
  }

  return res.status(200).json(project);
}

export const createProject = async (req: Request, res: Response) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({ message: 'Product Created' });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  
}

export const deleteProject = async (req: Request, res: Response) => { 
  try {
    const projectDeleted = await Project.findByIdAndDelete(req.params.id);
    if(!projectDeleted) return res.status(404).json({ message: 'Project not Found' })
    res.status(200).json({ message: "Project deleted" });
  } catch (e) {
    res.status(400).json({ message: "Project not found" });
  }
}

export const updateProject = async (req: Request, res: Response) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' }); 
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body);

  return res.status(200).json({ message: 'Project updated' });
}