from flask import Flask
from flask_restful import Api
from bd import bd
# from models.local import LocalModel
from controllers.local import LocalControllers
from models.usuario import UsuarioModel
# from models.tipo import TipoModel
from controllers.tipo import TipoController
from controllers.canchita import CanchitaController,  CanchitasControllers
# from models.canchita import CanchitaModel
from models.precio import PrecioCanchaModel
from models.reserva import ReservaModel
from models.opciones import OpcionesModel
from models.valoraciones import ValoracionesModel


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= "mysql://root:root@localhost/canchas"
api = Api(app)

@app.before_first_request
def iniciar_bd():
    # Para reiniciar toda la base de Datos (Se va a perder toda la informacion)
    #  ---------------- bd.drop_all(app=app)--------------------------
    # Para iniciar la aplicacion de Sql AlCHEMY
    bd.init_app(app)
    # Para crear todas las tabalas
    bd.create_all(app=app)


api.add_resource(TipoController, '/tipo/<string:nombre>','/tipo')    
api.add_resource(CanchitaController, '/canchita/<string:nombre>','/canchita')  
api.add_resource(CanchitasControllers, '/canchitas')  
api.add_resource(LocalControllers, '/local/<string:nombre>','/local')    


if __name__ == "__main__":
    app.run(debug = True)