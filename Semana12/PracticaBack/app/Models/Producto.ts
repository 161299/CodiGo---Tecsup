import { Sequelize, DataTypes } from 'sequelize';

export const producto_model = (  conexion: Sequelize) => {
       const Modelo = conexion.define("Producto",{
             prod_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
             prod_nom: {type: DataTypes.STRING(45), allowNull: false, unique: true},
             prod_desc: {type: DataTypes.STRING(100), allowNull: false, unique: true}              
       },{
             tableName: "t_producto",
             timestamps: true              
       });
       return Modelo             
}