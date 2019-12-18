import { Server } from './../config/Server';
import { Producto, Categoria } from './../config/Sequelize';
import { Request, Response } from 'express';
import { Model } from 'sequelize/types';

let  getProductosPorCategoria =() => {
      return new Promise((resolve, reject)=>{
       Categoria.findAll({ include : [{ model : Producto}] })
       .then((data: Model)=>{
        //      console.log(data);
             
             let arregloCategorias : Array<string>= [];
             let arregloPPCategoria : Array<number>= [];
             
             data.forEach((objCategoria : any)=>{
                    arregloCategorias.push(objCategoria.cat_desc);
                    arregloPPCategoria.push(objCategoria.productos.length); 
             });

             let rpta = {
                    categorias : arregloCategorias,
                    ppcategoria : arregloPPCategoria
             }

             resolve(rpta);   
       })                
      })
}

export class ProductoController {
     public static postProducto(req: Request, res: Response) {
        let {nombre, descripcion, categoria} = req.body;
        let objProducto = {
                            pro_nom : nombre,
                            pro_desc: descripcion,
                            cat_id : categoria
                          }
        Producto.build(objProducto).save()
        .then((createObjProducto: Model)=>{
              let rpta: Object = {ok: true, content: createObjProducto};
              res.status(201).json(rpta)     
              let objServidor = Server.instance; 
              getProductosPorCategoria().then((rpta : any )=>{
                  objServidor.io.emit('nuevo-producto', rpta);
              })
        })
        .catch((error : any )=>{
              let fake: Object = {ok: false, content: error};
              res.status(500).json(fake)              
        })

     }   

     public static geProductosPorCategoriaHttp(req: Request, res: Response){
            Categoria.findAll({ include : [{ model : Producto}] })
            .then((data: Model)=>{
       //      console.log(data);
            
                  let arregloCategorias : Array<string>= [];
                  let arregloPPCategoria : Array<number>= [];
            
                  data.forEach((objCategoria : any)=>{
                         arregloCategorias.push(objCategoria.cat_desc);
                         arregloPPCategoria.push(objCategoria.productos.length); 
                  });

                  let rpta = {
                        categorias : arregloCategorias,
                        ppcategoria : arregloPPCategoria
                  }

                  res.status(200).json({ok: true, content: rpta})
            
            
      })    
     }
}