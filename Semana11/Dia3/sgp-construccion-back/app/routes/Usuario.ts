import { wachiman } from './../utils/utils';
import { RegistrarUsuario, login, getUsuarios } from './../controllers/Usuario';
import { Router } from 'express';

export let usuario_router = Router();
usuario_router.post('/registro', RegistrarUsuario);
usuario_router.post('/login', login);
usuario_router.get('/usuarios',  wachiman ,getUsuarios);