import { Model } from 'sequelize';

export interface IVentasModel extends Model {
	NumV: number;
	Fecha: Date;
	Hora: Date;
	Subtotal: number; //float
	IVA: number; //float
	Total: number; //float
	Clientes_RFC: string;
	Personal_NumSS: number;
}
