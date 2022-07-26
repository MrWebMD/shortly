import {Model, DataTypes} from 'sequelize';

import sequelize from './dbconfig.js';

class shortURL extends Model {}

shortURL.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    shortKey: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    redirect: {
      type: DataTypes.STRING(1500),
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
  },
  {
    sequelize,
    modelName: "shortURL",
    timestamps: true,
  }
);

export default shortURL;
