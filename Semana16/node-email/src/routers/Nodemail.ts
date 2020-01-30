import { correo } from './../controllers/Nodemailer';
import {Router} from 'express';

export const nodemail_router = Router();
nodemail_router.post('/correo', correo);