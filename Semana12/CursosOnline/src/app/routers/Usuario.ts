import { getUsuarios, postUsuario } from './../controllers/Usuario';
import { Router } from 'express';

export let usuario_router = Router();
usuario_router.get('/usuarios', getUsuarios);
usuario_router.post('/usuario', postUsuario);
