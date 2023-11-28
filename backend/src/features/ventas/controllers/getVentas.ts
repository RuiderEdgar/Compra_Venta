import { Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
import { ventasService } from '@services/db/ventas.service';
import { IVentasModel } from '@ventas/interfaces/ventas.interface';

export class GetVentas {
	public async read(req: Request, res: Response): Promise<void> {
		try {
			const ventas: IVentasModel[] = await ventasService.getVentas();
			res.status(HTTP_STATUS.OK).json(ventas); //entregar el res en un json
		} catch (err) {
			console.log('entra con error', err);
			res.status(HTTP_STATUS.NO_CONTENT).json({ message: 'Error al obtener las Ventas' });
		}
	}
}
