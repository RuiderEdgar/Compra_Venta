import { Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
import { IComprasModel } from '@compras/interfaces/compras.inerface';
import { comprasService } from '@services/db/compras.service';

export class GetCompras {
	public async read(req: Request, res: Response) {
		try {
			const compras: IComprasModel[] = await comprasService.getCompras();
			res.status(HTTP_STATUS.OK).json(compras);
		} catch (err) {
			console.log(err);
			res.status(HTTP_STATUS.NO_CONTENT).json({ message: 'Error al obtener las Compras' });
		}
	}
}
