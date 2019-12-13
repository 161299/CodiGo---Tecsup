import { Sequelize , DataTypes } from 'sequelize';

export const proveedor_model: Function = ( conexion: Sequelize ) => {
       const modelo = conexion.define('Proveedor',{
             prov_id: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true, allowNull: false },
             prov_rz: {type: DataTypes.TEXT, allowNull: false },
             prov_ruc: {type: DataTypes.STRING(11), allowNull: false}              
       },{
             tableName: 't_proveedor',
             timestamps: true              
       });
       return modelo;             
}