import { Sequelize, DataTypes} from 'sequelize';

export const producto_model = ( conexion : Sequelize ) => {
       const modelo = conexion.define("producto", {
             pro_id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true},
             pro_nom: {type: DataTypes.STRING(45), allowNull: false},
             pro_desc: {type: DataTypes.TEXT, allowNull: false}              
       },{
             tableName: "t_producto",
             timestamps: true       
       });
       return modelo             
}