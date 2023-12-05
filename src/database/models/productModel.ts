import { sequelize } from '../../config/config';
import { Model } from 'sequelize';
import { UserModel } from './userModel';
import { AllowNull, DataType } from 'sequelize-typescript';

export class ProductModel extends Model {
  static associate() {
    ProductModel.belongsTo(UserModel);
  }
}

ProductModel.init(
  {
    product_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
    },
    value: {
      type: DataType.FLOAT,
      allowNull: false
    },
    cod_user: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'user_id',
      },
    },
  },
  {
    tableName: 'products',
    timestamps: false,
    sequelize,
  },
);
