import { Sequelize, DataTypes } from 'sequelize';

export const documentodetalle_model: Function = ( conexion: Sequelize ) => {
       const modelo = conexion.define('DocumentoDetalle',{
             docd_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
             docd_cant: {type: DataTypes.DECIMAL(10,2), allowNull: false},
             docd_punit: {type: DataTypes.DECIMAL(10,2),allowNull:false},
             docd_tot: {type: DataTypes.DECIMAL(10,2),allowNull: false}        
       },{
             tableName: 't_documentodetalle',
             timestamps: true              
       });
       return modelo             
}