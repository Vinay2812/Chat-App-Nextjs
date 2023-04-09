import Joi from "joi";

export const loginReq = Joi.object({
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        image: Joi.string().required(),
        reference: Joi.array().items(Joi.object({
            type: Joi.string().required(),
            id: Joi.string().required()
        })).min(1).required()
    })
}).required()