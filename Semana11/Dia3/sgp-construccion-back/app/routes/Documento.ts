import { postDocumento } from './../controllers/Documento';
import { Router } from 'express';

export const documento_router = Router();
documento_router.post('/documento', postDocumento);