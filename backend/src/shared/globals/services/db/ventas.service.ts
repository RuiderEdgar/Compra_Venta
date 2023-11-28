import { QueryTypes } from 'sequelize';
//import { VentasModel } from '@ventas/models/ventas.model';
import { IVentasModel } from '@ventas/interfaces/ventas.interface';
import { ConecctionDB } from '@bootstrap/setupDatabase.bootstrap';

class VentasService {
	public async getVentas(): Promise<IVentasModel[]> {
		//Forma de hacerlo con el query explicito
		const query = 'SELECT * from Ventas';
		const ventas: IVentasModel[] = await ConecctionDB.Compra_VentaDB.query(query, {
			type: QueryTypes.SELECT
		});

		// const ventas: IVentasModel[] = (await VentasModel.findAll()) as IVentasModel[];

		return ventas;
	}
}

export const ventasService: VentasService = new VentasService();
