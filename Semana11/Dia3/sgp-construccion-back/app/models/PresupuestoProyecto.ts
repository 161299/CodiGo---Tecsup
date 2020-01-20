import { Sequelize, DataTypes } from 'sequelize';

export const presupuestoproyecto_model: Function = ( conexion: Sequelize ) => {
       const modelo = conexion.define('PresupuestoProyecto',{
             pp_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
             pp_cant: {type: DataTypes.DECIMAL(10,2), allowNull: false},
             pp_uni: {type: DataTypes.DECIMAL(10,2), allowNull: false},
             pp_tot: {type: DataTypes.DECIMAL(10,2), allowNull: false},              
       },{
             tableName: 't_presupuestoproyecto',
             timestamps: true              
       });
       return modelo             
}
