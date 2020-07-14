// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.
import New from '../models/News';
import { ErrorHandler } from '../error';
import { NOT_FOUND, BAD_REQUEST } from 'http-status-codes';
import { validationResult } from 'express-validator';

export const getNews: Handler = async (req, res) => {
    const results = await New.find().exec();
    return res.json(results);
  };
  
  export const getNew: Handler = async (req, res) => {
    const result = await New.findById(req.params.id).exec();
    if (!result) throw new ErrorHandler(NOT_FOUND, 'New Not Found');
    return res.json(result);
  };
  
  export const createNew: Handler = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new ErrorHandler(BAD_REQUEST, errors.array());
  
    const newNew = new New(req.body);
    newNew.save();
    return res.json(newNew);
  };
  
  export const deleteNew: Handler = async (req, res) => {
    const news = await New.findByIdAndRemove(req.params.id).exec();
    return res.json(news);
  };
  
  export const updateNew: Handler = async (req, res) => {
    const news = await New.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).exec();
    if (!news) throw new ErrorHandler(NOT_FOUND, 'New Dont Exists');
    return res.json(news);
  };