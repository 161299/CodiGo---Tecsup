import {Request, Response} from 'express';
import nodemailer from 'nodemailer'

let configuracion = nodemailer.createTransport({
    service: 'gmail',
    auth:{ 
        user: 'crstn.space19@gmail.com',
        pass: 'password'
    }           
//     habilitar ese correo
//     https://myaccount.google.com/lesssecureapps?pli=1     
});

export const correo = (req: Request, res: Response) => {
   let {destinatario, subject, mensaje} = req.body                 
   let email = {
       from: 'crstn.space19@gmail.com',
       to: 'frontend.crstn@gmail.com',
       subject: 'usuario creado',
       text: 'mensaje'                
   };

   configuracion.sendMail(email, (error, info) => {
        if(error){
           console.log('Error al enviar', error);
           res.status(500).json({
           ok: false,
           message: 'Error al enviar'               
        })    
        }else{
          console.log('Success', info);
          res.status(200).json({
             ok: true,
             message: 'Correo enviado exitosamente'                 
          })                
        }
   } )
}