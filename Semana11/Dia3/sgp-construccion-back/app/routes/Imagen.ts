import { eliminarImagen, getImagenById, updateImagenById } from './../controllers/Imagen';
import { Router } from 'express';
import { subirImagen } from '../controllers/Imagen';


export let imagen_router = Router();
let multiParty = require('connect-multiparty'); //sube archivos a nuestra carpeta master img
let multiPartyMiddLeware = multiParty({uploadDir: './img'})

imagen_router.post('/imagen/upload', multiPartyMiddLeware ,subirImagen);
imagen_router.delete('/imagen/:id_img', eliminarImagen);
imagen_router.get('/imagen/:id_img', getImagenById);
imagen_router.put('/imagen/:id_img', multiPartyMiddLeware ,updateImagenById);


//body -> form-data  /key =imagen /value -> insertamos un file 

// "result": {
//                     "fieldName": "imagen",
//                     "originalFilename": "Captura.PNG",
//                     "path": "img\\wrAiYQ4P-ckFACDNB9TADSl6.PNG",
//                     "headers": {
//                         "content-disposition": "form-data; name=\"imagen\"; filename=\"Captura.PNG\"",
//                         "content-type": "image/png"
//                     },
//                     "size": 60428,
//                     "name": "Captura.PNG",
//                     "type": "image/png"
//                 }