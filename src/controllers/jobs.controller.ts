import { Handler } from '../types';
import Jobs, {IJob} from '../models/Jobs';
import { isNull } from 'util';
import { NOT_FOUND } from 'http-status-codes';
import { ErrorHandler } from '../error';

export const getJobs: Handler = async (req, res) => {
  const results = await Jobs.find();
  return res.json(results);
}

export const getJob:Handler = async (req, res) => {
  const result = await Jobs.findById(req.params.id);
  if (!result) throw new ErrorHandler(NOT_FOUND, "Job Not Found");
  return res.json(result);
}

export const createJob:Handler = async (req, res) => {
  const newJob = new Jobs(req.body);
  newJob.save();
  return res.json(newJob)
}

export const deleteJob:Handler = async (req, res) => {
  const job = await Jobs.findByIdAndRemove(req.params.id);
  return res.json(job);
}

export const updateJob:Handler = async (req, res) => {
  const updateData = req.body;
  const idFilter = {_id: req.params.id}
  let updatedJob: IJob | null;
  await Jobs.findOneAndUpdate(idFilter, updateData);
  updatedJob = await Jobs.findById(req.params.id);
  if (isNull(updatedJob)) throw new ErrorHandler(NOT_FOUND, "User Dont Exists"); 
  return res.json(updatedJob); 
}

