from flask import Flask
from flask_restful import Api
from bd import bd
# from models.local import LocalModel
from controllers.local import LocalControllers, LocalesControllers
# from models.usuario import UsuarioModel
from controllers.usuario import UsuarioController
# from models.tipo import TipoModel
from controllers.tipo import TipoController
from controllers.canchita import CanchitaController,  CanchitasControllers
# from models.canchita import CanchitaModel
# from models.precio import PrecioCanchaModel
from controllers.precio import PrecioController, PreciosController
# from models.reserva import ReservaModel
from controllers.reservas import ReservaController
# from models.opciones import OpcionesModel
from controllers.localOpciones import LocalOpcionesController
# from models.localOpcionesLocal import LocalOpcionesLocalModels
from controllers.opcionesLocal import OpcionesLocalController, OpcionesLocalTodosController
from models.valoraciones import ValoracionesModel

# Librerias para el JWT
from flask_jwt import JWT
from seguridad import autenticacion, identificador


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= "mysql://root:root@localhost/canchas"
# asi se almacena la contraseña para nuestro JWT
app.config['SECRET_KEY'] = 'secret_key'
app.config['JWT_AUTH_URL_RULE']='/usuario/login'
from datetime import timedelta
app.config['JWT_EXPIRATION_DELTA']=timedelta(seconds=30)


jsonwebtoken = JWT(app,autenticacion,identificador)
api = Api(app)

@app.before_first_request
def iniciar_bd():
    # Para reiniciar toda la base de Datos (Se va a perder toda la informacion)
    # Para iniciar la aplicacion de Sql AlCHEMY
    bd.init_app(app)
    # bd.drop_all(app=app)
    # Para crear todas las tabalas
    bd.create_all(app=app)


api.add_resource(TipoController, '/tipo/buscar/<string:nombre>','/tipo/add')    

api.add_resource(CanchitaController, '/canchita/buscar/<int:id>','/canchita/add')  
api.add_resource(CanchitasControllers, '/canchitas/all')  

api.add_resource(PrecioController,'/precio/buscar/<string:descripcion>' ,'/precio/add')  
api.add_resource(PreciosController,'/precios/all')  

api.add_resource(LocalControllers, '/local/buscar/<string:nombre>','/local/add')  
api.add_resource(LocalesControllers, '/locales/all')  
api.add_resource(LocalOpcionesController,'/localopciones/all','/localopciones/add')  
api.add_resource(OpcionesLocalController, '/opcionlocal/buscar/<string:nombre>','/opciones/add')  
api.add_resource(OpcionesLocalTodosController, '/opcioneslocales/all')  
 
api.add_resource(UsuarioController,'/usuario/add')  

api.add_resource(ReservaController,'/reserva/add')  

  
  



if __name__ == "__main__":
    app.run(debug = True)