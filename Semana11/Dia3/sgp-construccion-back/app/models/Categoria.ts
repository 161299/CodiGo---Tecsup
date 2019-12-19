import { Sequelize, DataTypes } from 'sequelize';

export const categoria_model: Function = ( conexion: Sequelize ) => {
       const modelo = conexion.define('Categoria',{
             cat_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
             cat_nom: {type: DataTypes.STRING(45), allowNull: false},
       },{
             tableName: 't_categoria',
             timestamps: true              
       });
       return modelo             
}
