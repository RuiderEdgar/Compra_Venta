import express, {Router} from 'express';
import { GetCompras } from '@compras/controllers/getCompras';

class ComprasRouters {
	private router: Router;
	constructor(){
		this.router = express.Router();
	}

	public routes(): Router {
		this.router.get('/compras', GetCompras.prototype.read);
		return this.router;
	}
}

export const comprasRouters: ComprasRouters = new ComprasRouters();