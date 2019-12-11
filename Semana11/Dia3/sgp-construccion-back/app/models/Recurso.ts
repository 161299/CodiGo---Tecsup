import { Sequelize, DataTypes } from 'sequelize';

export const recurso_model: Function = ( conexion : Sequelize ) => {
       const modelo = conexion.define('Recurso',{
             rec_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
             rec_nom: {type: DataTypes.STRING(45), allowNull: false}              
       },{
             tableName: 't_recurso',
             timestamps: true              
       });
       return modelo             
}