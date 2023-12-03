import { sequelize } from '../../config/config';
import { Model } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export class UserModel extends Model {}

UserModel.init(
  {
    user_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
    sequelize,
  },
);
