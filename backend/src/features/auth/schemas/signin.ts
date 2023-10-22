import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object().keys({
	user: Joi.string().required().messages({
		'string.base': 'Username must be of type string',
		'string.empty': 'Username is a required field'
	}),
	password: Joi.string().required().messages({
		'string.base': 'Password must be of type string',
		'string.empty': 'Password is a required field'
	})
});

export { loginSchema };
