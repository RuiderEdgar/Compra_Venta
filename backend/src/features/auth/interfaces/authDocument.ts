import { Model } from 'sequelize';

export interface IAuthUser extends Model {
	user: string;
	password: string;
}
