import { Response, Request } from 'express';
import HTTP_STATUS from 'http-status-codes';
import JWT from 'jsonwebtoken';
import { ConecctionDB } from '@bootstrap/setupDatabase.bootstrap';
import { joiValidation } from '@decorators/joi-validation.decorators';
import { BadRequestError } from '@helpers/errors/badRequestError';
import { config } from '@configs/configEnvs';
import { loginSchema } from '@auth/schemas/signin';

export class SignIn {
	@joiValidation(loginSchema)
	public async read(req: Request, res: Response): Promise<void> {
		const { user, password } = req.body;

		const conecction: ConecctionDB = new ConecctionDB(user, password);

		try {
			await conecction.testingConnection();
			const userJWT: string = JWT.sign(
				{
					username: user,
					password: password
				},
				config.JWT_TOKEN!
			);
			req.session = { jwt: userJWT };
			req.session.user = {
				username: user,
				password: password
			};
			res.status(HTTP_STATUS.OK).json({ message: 'User login successfully', user: user, token: userJWT });
		} catch (error) {
			const errorMessage = 'Failed to authenticate with the database';
			throw new BadRequestError(errorMessage);
		}
	}
}
