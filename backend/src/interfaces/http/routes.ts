import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';
import { config } from '@configs/configEnvs';

export default (app: Application) => {
	const routes = () => {
		app.use(config.BASE_PATH!, authRoutes.routes());
	};
	routes();
};
