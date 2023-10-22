import { Application, json, Request, Response, NextFunction, urlencoded } from 'express';
import compression from 'compression';
import http from 'http';
import HTTP_STATUS from 'http-status-codes';
import Logger from 'bunyan';
import { IErrorResponse } from '@helpers/errors/errorResponse.interface';
import { CustomError } from '@helpers/errors/customError';
import { logger } from '@configs/configLogs';
import { config } from '@configs/configEnvs';
import applicationRoutes from '@interfaces/http/routes';

const log: Logger = logger.createLogger('setupServer');

export class Compra_VentaServer {
	private app: Application;

	constructor(app: Application) {
		this.app = app;
	}

	public start(): void {
		this.standardMiddleware(this.app);
		this.routesMiddleware(this.app);
		this.globalErrorHandler(this.app);
		this.startServer(this.app);
	}

	private standardMiddleware(app: Application): void {
		app.use(compression());
		app.use(json({ limit: '50mb' }));
		app.use(urlencoded({ extended: true, limit: '50mb' }));
	}

	private routesMiddleware(app: Application): void {
		applicationRoutes(app);
	}

	private globalErrorHandler(app: Application): void {
		app.all('*', (req: Request, res: Response) => {
			res.status(HTTP_STATUS.NOT_FOUND).json({ message: `${req.originalUrl} not found` });
		});

		app.use((error: IErrorResponse, _req: Request, res: Response, next: NextFunction) => {
			log.error(error);
			if (error instanceof CustomError) {
				return res.status(error.statusCode).json(error.serializeErrors());
			}
			next();
		});
	}

	private async startServer(app: Application): Promise<void> {
		try {
			const httpServer: http.Server = new http.Server(app);
			this.startHttpServer(httpServer);
		} catch (error) {
			log.error(error);
		}
	}

	private startHttpServer(httpServer: http.Server): void {
		log.info(`Server has started with the process ${process.pid}`);
		httpServer.listen(config.SERVER_PORT, () => {
			log.info(`Server running at ${config.SERVER_PORT}`);
		});
	}
}
