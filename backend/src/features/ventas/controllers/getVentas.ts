import { Request, Response } from 'express';
import HTPP_STATUS from 'http-status-codes';
import { ventasService } from '@services/db/ventas.service';
import { IVentasModel } from '@ventas/interfaces/ventas.interface';
import HTTP_STATUS from 'http-status-codes';

export class GetVentas {
	public async read(req: Request, res: Response): Promise<void> {
		try {
			console.log('entra');
			const ventas: IVentasModel[] = await ventasService.getVentas();
			res.status(HTPP_STATUS.OK).json(ventas); //entregar el res en un json
		} catch (err) {
			console.log('entra con error', err);
			res.status(HTTP_STATUS.NO_CONTENT).json({ message: 'Error al obtener las Ventas' });
		}
	}
}
