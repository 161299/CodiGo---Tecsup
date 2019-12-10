import { proyecto_model } from './../models/Proyecto';
import {Sequelize} from 'sequelize';

export const conexion: Sequelize = new Sequelize('proyectos', 'root', 'root', 
       {host: 'localhost',dialect: 'mysql', logging: console.log, 
       dialectOptions:{useUTC: false, dateStrings: true, typeCast: true}});

export const Proyecto = proyecto_model(conexion);