import { categoria_model } from './../Models/Categoria';
import { producto_model } from './../Models/Producto';
import { Sequelize } from 'sequelize';

export const conexion: Sequelize = new Sequelize('sockets', 'root', 'root', 
       {host: 'localhost',dialect: 'mysql', logging: console.log, 
       dialectOptions:{useUTC: false, dateStrings: true, typeCast: true}, timezone: '-05:00'});


export const Producto  = producto_model(conexion);
export const Categoria = categoria_model(conexion);


Categoria.hasMany(Producto, {foreignKey: 'cat_id'});
Producto.belongsTo(Categoria, {foreignKey: 'cat_id'})






