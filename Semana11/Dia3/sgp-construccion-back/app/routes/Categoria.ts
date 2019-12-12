import { Router } from 'express';
import { postCategoria} from './../controllers/Categoria';

export const categoria_router = Router();
categoria_router.post('/categoria', postCategoria);