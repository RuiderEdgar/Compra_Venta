import { Application } from 'express';
import { config } from '@configs/configEnvs';
import { authRoutes } from '@auth/routes/authRoutes';
import { ventaRouters } from '@ventas/routes/ventasRoutes';

export default (app: Application) => {
	const routes = () => {
		app.use(config.BASE_PATH!, authRoutes.routes());
		app.use(config.BASE_PATH!, ventaRouters.routes());
	};
	routes();
};
