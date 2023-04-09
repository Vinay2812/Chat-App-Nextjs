import { Schema } from "joi";
import createError from "http-errors";
import { NextFunction, Response, Request } from "express";

export const validateRequest =
  (validator: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = {
        query: req.query,
        body: req.body,
        params: req.params,
        headers: req.headers,
      };
      const { error, value }: any = validator.validate(data, {
        allowUnknown: true,
        abortEarly: false,
      });

      if (error) {
        throw createError.UnprocessableEntity(error.details);
      }
      req.query = value.query;
      req.params = value.params;
      req.body = value.body;
      req.headers = value.headers;
      next();
    } catch (err) {
      next(err);
    }
  };
