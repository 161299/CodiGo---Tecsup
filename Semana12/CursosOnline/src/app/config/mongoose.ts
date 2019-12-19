import { usuarioSchema } from './../models/Usuario';
import mongoose from 'mongoose';

export const Usuario = mongoose.model('Usuario', usuarioSchema);