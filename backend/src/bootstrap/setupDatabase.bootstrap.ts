import { Sequelize } from 'sequelize';
import Logger from 'bunyan';
import { config } from '@configs/configEnvs';
import { logger } from '@configs/configLogs';

const log: Logger = logger.createLogger('setupDatabase');

export class ConecctionDB {
	private Compra_VentaDB: Sequelize;
	constructor(user: string, password: string) {
		this.Compra_VentaDB = new Sequelize(config.NAME_DB!, user, password, {
			host: config.DATABASE_URL,
			dialect: 'mssql',
			dialectOptions: {
				options: {
					encrypt: false,
					trustServerCertificate: false
				}
			}
		});
	}

	public testingConnection = async (): Promise<void> => {
		try {
			await this.Compra_VentaDB.authenticate();
			log.info('Connection has been established successfully');
		} catch (err) {
			log.error('Error to connect to DB:', err);
			throw err;
		}
	};
}
