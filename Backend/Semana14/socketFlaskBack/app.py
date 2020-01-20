from flask import Flask, request
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
misockect = SocketIO(app, cors_allowed_origins = "*")
conversacion = [    
                {'id': '00', 
                'username': 'admin', 
                'mensaje': 'Bienvenido a mi chat Caliente'
                }   
               ]

@misockect.on('connect')
def coneccion():
    print('El usuario con el id %s se conecto'% (request.sid,))
    send('El usuario con id %s se conecto'% (request.sid,))


@misockect.on('disconnect') 
def desconeccion():
    print('El usuario con el id {} se desconecto'.format(request.sid,))       
    send('El usuario con el id {} se desconecto'.format(request.sid,))             

@misockect.on('pedir-chat')
def pedir():
    emit('listar-chat', conversacion) 

@misockect.on('agregar-chat')
def agregar(objChat):
    conversarion.append(objChat)
    emit('listar-chat', conversacion)  

if __name__ == '__main__':
   misockect.run(app, debug= True, port=3000)                                                         