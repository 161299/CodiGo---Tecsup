import { categoria_model } from './../Models/Categoria';
import { producto_model } from './../Models/Producto';
import { Sequelize } from 'sequelize';

export const conexion: Sequelize = new Sequelize('practica', 'root', 'root', 
       {host: 'localhost',dialect: 'mysql', logging: console.log, 
       dialectOptions:{useUTC: false, dateStrings: true, typeCast: true}, timezone: '-05:00'});


export const Productito: any = producto_model(conexion);
export const Categoria = categoria_model(conexion);

Categoria.hasMany(Productito, {foreignKey: 'cat_id'});
Productito.belongsTo(Categoria, {foreignKey: 'cat_id'});