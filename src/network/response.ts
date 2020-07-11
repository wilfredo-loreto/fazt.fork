import { Response } from "express";
import { SuccessCodes } from '../types';

interface HTTPResponse {
  //interface for message the status server
 message: string,
 data?: any
}

export interface HTTPSuccess extends HTTPResponse{
  code:SuccessCodes;
}

export const success = (res: Response, data:HTTPSuccess) => res.status(data.code).json(data);
