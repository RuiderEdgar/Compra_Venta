import { DataTypes, Model } from 'sequelize';
import { ConecctionDB } from '@bootstrap/setupDatabase.bootstrap';

class VentasModel extends Model {}

VentasModel.init(
	{
		NumV: {
			type: DataTypes.INTEGER(),
			autoIncrement: true,
			primaryKey: true
		},
		Fecha: {
			type: DataTypes.DATEONLY(),
			allowNull: true
		},
		Hora: {
			type: DataTypes.TIME(),
			allowNull: true
		},
		Subtotal: {
			type: DataTypes.DECIMAL(7, 2),
			allowNull: true
		},
		IVA: {
			type: DataTypes.DECIMAL(7, 2),
			allowNull: true
		},
		Total: {
			type: DataTypes.DECIMAL(7, 2),
			allowNull: true
		},
		Clientes_RFC: {
			type: DataTypes.STRING(13),
			references: { model: 'Cliente', key: 'RFC' },
			allowNull: false
		},
		Personal_NumSS: {
			type: DataTypes.INTEGER(),
			references: { model: 'Personal', key: 'NumSS' },
			allowNull: false
		}
	},
	{
		sequelize: ConecctionDB.Compra_VentaDB,
		tableName: 'Ventas'
	}
);

export { VentasModel };
