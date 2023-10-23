import express, { Router } from 'express';
import { GetVentas } from '@ventas/controllers/getVentas';

class VentasRouters {
	private router: Router;
	constructor() {
		this.router = express.Router();
	}

	public routes(): Router {
		this.router.get('/ventas', GetVentas.prototype.read);
		return this.router;
	}
}

export const ventaRouters: VentasRouters = new VentasRouters();
