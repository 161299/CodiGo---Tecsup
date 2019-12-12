import { Router } from 'express';
import { postCategoria, getCategorias } from './../controllers/Categoria';

export const categoria_router = Router();
categoria_router.post('/categoria', postCategoria);
categoria_router.get('/categorias', getCategorias);