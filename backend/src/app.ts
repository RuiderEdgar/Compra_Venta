import express, { Express } from 'express';
import { config } from '@configs/configEnvs';
import { Compra_VentaServer } from '@bootstrap/setupServer.bootstrap';

class Application {
	public initialize(): void {
		this.loadConfig();
		const app: Express = express();
		const server: Compra_VentaServer = new Compra_VentaServer(app);
		server.start();
	}

	private loadConfig(): void {
		config.validateConfig();
	}
}

const application: Application = new Application();
application.initialize();
