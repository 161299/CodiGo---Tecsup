from flask import Flask, request
from flask_socketio import SocketIO, send, emit
from flask_login import current_user
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

sockets = SocketIO(app, cors_allowed_origins="*")
mensajes = []

@sockets.on('connect')

def on_join():
    print('Se conecto el usuario:'+request.sid)   
    send('Se conecto el usuario:'+request.sid)   
              
@sockets.on('disconnect')  
def se_fue():
    print('Se deconecto el usuario'+request.sid)                           
    send('Se deconecto el usuario'+request.sid) 

@sockets.on('disconnect')  
def pedir():                           
    emit('lista de mensaje', mensajes)

@sockets.on('disconnect')  
def agregar(mensaje):
    mensajes.append(mensaje)                         
    emit('lista de mensaje', mensajes)


if __name__=="__main__":
     sockets.run(app, debug=True, port=3000)               


                         