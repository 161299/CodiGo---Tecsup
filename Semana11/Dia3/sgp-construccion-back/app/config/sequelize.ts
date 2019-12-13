import { documentodetalle_model } from './../models/DocumentoDetalle';
import { presupuestoproyecto_model } from './../models/PresupuestoProyecto';
import { gastoingreso_model } from './../models/GastoIngreso';
import { imagen_model } from './../models/Imagen';
import { documento_model } from './../models/Documento';
import { recurso_model } from './../models/Recurso';
import { categoria_model } from './../models/Categoria';
import { proyecto_model } from './../models/Proyecto';
import { unidadmedida_model } from './../models/UnidadMedida';
import { familia_model } from './../models/Familia';
import { proveedor_model } from './../models/Proveedor';
import { usuario_model } from './../models/Usuario'
import { Sequelize } from 'sequelize';

export const conexion: Sequelize = new Sequelize('I2fHJXe9sC', 'I2fHJXe9sC', 'pYXs7n2iyO', 
       {host: 'remotemysql.com',dialect: 'mysql', logging: console.log, 
       dialectOptions:{useUTC: false, dateStrings: true, typeCast: true}, timezone: '-05:00'});

// inicilizando tablas       
export const Proyecto = proyecto_model(conexion);
export const UnidadMedida = unidadmedida_model(conexion);
export const Familia = familia_model(conexion);
export const Proveedor = proveedor_model(conexion);
export const Usuario = usuario_model(conexion);
export const Categoria = categoria_model(conexion);
export const Recurso = recurso_model(conexion);
export const Documento = documento_model(conexion);
export const Imagen = imagen_model(conexion);
export const GastoIngreso = gastoingreso_model(conexion);
export const PresupuestoProyecto = presupuestoproyecto_model(conexion);
export const DocumentoDetalle = documentodetalle_model(conexion);


// relaciones
Familia.hasMany(Categoria, {foreignKey: 'fam_id'}); //Familia Tiene uno o muchos Categorias
Categoria.belongsTo(Familia, {foreignKey: 'fam_id'}); // Muchas Categorias tiene una Familia

Categoria.hasMany(Recurso, {foreignKey: 'cat_id'});
Recurso.belongsTo(Categoria, {foreignKey: 'cat_id'});

Proveedor.hasMany(Documento, {foreignKey: 'prov_id'});
Documento.belongsTo(Proveedor, {foreignKey: 'prov_id'});

Documento.hasMany(Imagen, {foreignKey: 'doc_id'});
Imagen.belongsTo(Documento, {foreignKey: 'doc_id'} );

Usuario.hasMany(GastoIngreso, {foreignKey: 'usu_id'});
GastoIngreso.belongsTo(Usuario, {foreignKey: 'usu_id'});

Documento.hasMany(GastoIngreso, {foreignKey: 'doc_id'});
GastoIngreso.belongsTo(Documento, {foreignKey: 'doc_id'});

Recurso.hasMany(PresupuestoProyecto, {foreignKey: 'rec_id'});
PresupuestoProyecto.belongsTo(Recurso, {foreignKey: 'rec_id'});

UnidadMedida.hasMany(PresupuestoProyecto, {foreignKey: 'um_id'});
PresupuestoProyecto.belongsTo(UnidadMedida, {foreignKey: 'um_id'});

Proyecto.hasMany(PresupuestoProyecto, {foreignKey: 'pro_id'});
PresupuestoProyecto.belongsTo(Proyecto, {foreignKey: 'pro_id'});

Documento.hasMany(DocumentoDetalle, {foreignKey: 'doc_id'});
DocumentoDetalle.belongsTo(Documento, {foreignKey: 'doc_id'});

PresupuestoProyecto.hasMany(DocumentoDetalle, {foreignKey: 'pp_id'});
DocumentoDetalle.belongsTo(PresupuestoProyecto, {foreignKey: 'pp_id'});


