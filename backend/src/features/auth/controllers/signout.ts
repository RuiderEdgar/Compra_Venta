import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { ConecctionDB } from '@bootstrap/setupDatabase.bootstrap';

export class SignOut {
	public async update(req: Request, res: Response): Promise<void> {
		req.session = null;
		ConecctionDB.Compra_VentaDB.close();
		res.status(HTTP_STATUS.OK).json({ message: 'Logout successfully', user: {}, token: '' });
	}
}
