import { eliminarImagen } from './../controllers/Imagen';
import { Router } from 'express';
import { subirArchivo } from '../controllers/Imagen';


export let imagen_router = Router();
let multiParty = require('connect-multiparty'); //sube archivos a nuestra carpeta master img
let multiPartyMiddLeware = multiParty({uploadDir: './img'})

imagen_router.post('/imagen/upload', multiPartyMiddLeware ,subirArchivo);
imagen_router.delete('/imagen/:id_img', eliminarImagen)


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