import { Sequelize, DataTypes } from 'sequelize';
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

export const usuario_model: Function = ( conexion: Sequelize) => {
       const modelo = conexion.define('Usuario',{
             usu_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
             usu_email: {type: DataTypes.STRING(50), allowNull: false},
             usu_nom: {type: DataTypes.TEXT, allowNull: false},
             usu_ape: {type: DataTypes.TEXT, allowNull: false},
             usu_tipo: {type: DataTypes.STRING(45), allowNull: false},
             usu_hash: {type: DataTypes.TEXT, allowNull: false},
             usu_salt: {type: DataTypes.TEXT, allowNull: false},              
       },{
             tableName: 't_usuario',
             timestamps: true              
       }); //encriptacion
       modelo.prototype.setSaltAndHash = function(password: any){
             this.usu_salt = crypto.randomBytes(16).toString('hex');
             this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex')       
       };// validacion de contraseña
       modelo.prototype.validarPassword = function(password: any){
             let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
             if(hash_temporal === this.usu_hash){
               return true                  
             }
             else{
               return false                  
             }             
       };//generando jsonwebtoken config
       modelo.prototype.generarJWT = function(){
          let payload = {
                         usu_id: this.usu_id,
                         usu_nom: `${this.usu_nom} ${this.usu_ape}`
                        }
          let token = jwt.sign(payload, 'sapeee', {expiresIn: 30},{algorithm: 'RS256'});
          return token
       };

       return modelo           
}

