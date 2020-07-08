import { Handler } from '../types';
import Task from '../models/Task';

export const getTasks: Handler = async (req, res) => {
	const tasks = await Task.find();
	return res.status(200).json(tasks);
};

export const getTask: Handler = async (req, res) => {
	const task = await Task.findById(req.params.id);
	if (!task) {
		return res.status(404).json('Task not Found');
	}

	return res.status(200).json(task);
};

export const createTask: Handler = async (req, res) => {
	try {
		const { title, description, date, postingUser } = req.body;
		const task = new Task({ title, description, date, postingUser });
		await task.save();
		return res.status(200).json(task);
	} catch (err) {
		return res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const deleteTask: Handler = async (req, res) => {
	try {
		const taskDeleted = await Task.findByIdAndDelete(req.params.id);

		if (!taskDeleted) return res.json({ message: 'Task not found' });

		return res.status(200).json({ message: 'Task Deleted' });
	} catch (err) {
		return res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const updateTask: Handler = async (req, res) => {
	let task = await Task.findById(req.params.id);

	if (!task) {
		return res.status(404).json({ message: 'Task not found' });
	}

	task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

	return res.status(200).json(task);
};
