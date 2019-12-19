import { postDocumento, getDocumento } from './../controllers/Documento';
import { Router } from 'express';

export const documento_router = Router();
documento_router.post('/documento', postDocumento);
documento_router.get('/documento/:id_documento', getDocumento)