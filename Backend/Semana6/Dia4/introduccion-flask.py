# pip install flask

from flask import Flask;

# __name__ sirve apra definir que nuestra aplicacion Flask se va a ejecutar en el hilo central
app = Flask(__name__)
print(__name__)
# Esto es un decorador de la funcion route y siempre despues de un decorador va una funcion para decir que es lo que va  a hacer
@app.route('/')
def inicio():
    return 'Estoy VIVO!'

# para inicializar nuestro flask
# para el modo de desarrollo poner debug=true, esto hara que cualquier cambio que la aplicacion se reinicie, x default esta en false
app.run(port=5000, debug=True)