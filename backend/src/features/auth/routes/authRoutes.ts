import express, { Router } from 'express';
import { SignIn } from '@auth/controllers/signin';
import { SignOut } from '@auth/controllers/signout';

class AuthRouters {
	private router: Router;

	constructor() {
		this.router = express.Router();
	}

	public routes(): Router {
		this.router.post('/signin', SignIn.prototype.read);
		this.router.get('/signout', SignOut.prototype.update);
		return this.router;
	}
}

export const authRoutes: AuthRouters = new AuthRouters();
