import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Não pode ficar em branco esse  campo',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Não pode ficar em branco esse  campo',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return ` ${appConfig.url}/${this.getDataValue('filename')}`;
        },
      },

    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
