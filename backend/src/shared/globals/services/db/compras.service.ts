import { QueryTypes } from 'sequelize';
import { IComprasModel } from '@compras/interfaces/compras.inerface';
import { ConecctionDB } from '@bootstrap/setupDatabase.bootstrap';

class ComprasService {
	public async getCompras(): Promise<IComprasModel[]> {
		//Forma de hacerlo con el query explicito
		const query = 'SELECT * from Compras';
		const compras: IComprasModel[] = await ConecctionDB.Compra_VentaDB.query(query, {
			type: QueryTypes.SELECT
		});

		return compras;
	}
}

export const comprasService: ComprasService = new ComprasService();
