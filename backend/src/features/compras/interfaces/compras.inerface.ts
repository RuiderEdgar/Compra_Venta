import { Model } from 'sequelize';

export interface IComprasModel extends Model {
	NumC: number;
	FechaHoraP: Date;
	FechaHoraE: Date;
	TipoPago: string;
	Subtotal: number;
	IVA: number;
	Total: number;
	Proveedores_RFC: string;
}
