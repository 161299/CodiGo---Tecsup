import { Request, Response } from 'express';
import { Imagen } from '../config/sequelize';
import { Model } from 'sequelize/types';

// file system => es una libreria propia de nodejs para manejar archivos de tu servidor
const fs = require('fs')
// path_module => libreria propia de node para manejar archivos
const path_module = require('path')

export const subirImagen = (req: Request, res: Response)=>{
     try{
           let ruta = req.files.imagen.path; //img\wrAiYQ4P-ckFACDNB9TADSl6.PNG
           let nameExtension = ruta.split("\\")[1];
           Imagen.build({doc_id: req.body.doc_id,ima_url: nameExtension}).save()
           .then((objImagen: Model)=>{
                 let rpta = {ok: true, content: objImagen};
                 res.status(201).json(rpta)              
           })         
           console.log(ruta);
           
//            let rpta = {result: req.files.imagen}; //json
//            res.status(200).json(rpta);             
     }              
     catch{
         let fake = {ok: false, content: 'No se ha seleccionado ningun archivo'}                
         res.status(404).json(fake)
     } 
}

export const eliminarImagen = (req: Request, res: Response)=>{
       let {id_img} = req.params;
       let url = "";
       Imagen.findByPk(id_img).then((imagen: Model)=>{
            if(imagen){
                url = imagen.ima_url;                
                return   Imagen.destroy({where: {ima_id: id_img}})                             
            }               
       })
       .then((objImagen: Model)=>{
             
             fs.unlink(`img/${url}`,(error: any)=>{
                 if(!error){
                    let rpta : Object = {ok: true, content: 'Imagen eliminada con exito'};
                    res.status(200).json(rpta)              
                 }
                 else{
                    let fake : Object = {ok: false, content: 'Hubo un error al eliminar la imagen'};
                    res.status(500).json(fake)                 
                 }                
             })       
       })             
}

export const getImagenById = (req: Request, res: Response) => {
       let {id_img} =  req.params;
       
       Imagen.findByPk(id_img)
       .then((objImagen: Model)=>{
            let imagenDefault = 'img/default.jpg';
            if(objImagen){
                    let ruta = `img/${objImagen.ima_url}`;
                    if(fs.existsSync(ruta)){
                       return res.sendFile(path_module.resolve(ruta));     
                    }
                    else{
                       return res.sendFile(path_module.resolve(imagenDefault))                 
                    } 
            }
            else{
                    return res.sendFile(path_module.resolve(imagenDefault))                       
            }
       })
       .catch((error: any)=>{
            let fake : Object = {ok: false, content: error};
            res.status(500).json(fake)               
       })
}

export const updateImagenById = (req: Request, res: Response) => {
        let {id_img} = req.params;
        Imagen.findByPk(id_img)
        .then((objImagen: Model)=>{
            let imagenDefault = 'img/default.jpg';
            if(objImagen){
                    fs.unlink(`img/${objImagen.ima_url}`,(error: any)=>{ 
                        if(!error){
                             try{
                                 let ruta = req.files.imagen.path;
                                 let nameExtension = ruta.split("\\")[1];
                                 Imagen.update({ima_url: nameExtension}, {where: {ima_id: objImagen.ima_id}})
                                        .then((objImagen: Model)=>{
                                              let rpta : Object = {ok: true, estado: 'Imagen anterior eliminada con exito', message: 'Se actualizo con exito', content: objImagen};
                                              res.status(201).json(rpta)              
                                        })         
           
                             }              
                             catch{
                                      let fake = {ok: false, content: 'No se ha seleccionado ningun archivo'}                
                                      res.status(404).json(fake)
                             } 

                        }
                        else{
                            let fake : Object = {ok: false, content: 'Hubo un error al eliminar la imagen'};
                            res.status(500).json(fake)                 
                        }                
                    })                       

                                
            }
            else{
                    return res.sendFile(path_module.resolve(imagenDefault))                       
            }               
        })
        .catch((error: any)=>{
              let fake : Object = {ok: false, content: error};
              res.status(500).json(fake)                             
        })
}





