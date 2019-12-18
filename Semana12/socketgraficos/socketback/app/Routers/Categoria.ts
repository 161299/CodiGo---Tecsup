import { Router } from 'express';
import { CategoriaController } from '../Controllers/Categoria';

export const categoria_router = Router();
categoria_router.get('/categorias', CategoriaController.getCategorias);