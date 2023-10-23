import dotenv from 'dotenv';

dotenv.config({});

class Config {
	public DATABASE_URL: string | undefined;
	public NAME_DB: string | undefined;
	public SERVER_PORT: string | undefined;
	public BASE_PATH: string | undefined;
	public JWT_TOKEN: string | undefined;
	public SECRET_KEY_ONE: string | undefined;
	public SECRET_KEY_TWO: string | undefined;
	public NODE_ENV: string | undefined;

	constructor() {
		this.DATABASE_URL = process.env.DATABASE_URL;
		this.NAME_DB = process.env.NAME_DB;
		this.SERVER_PORT = process.env.SERVER_PORT;
		this.BASE_PATH = process.env.BASE_PATH;
		this.JWT_TOKEN = process.env.JWT_TOKEN;
		this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE;
		this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO;
		this.NODE_ENV = process.env.NODE_ENV;
	}

	public validateConfig(): void {
		console.log(this);
		for (const [key, value] of Object.entries(this)) {
			if (value === undefined) {
				throw new Error(`Configuration ${key} is undefindes`);
			}
		}
	}
}

export const config: Config = new Config();
