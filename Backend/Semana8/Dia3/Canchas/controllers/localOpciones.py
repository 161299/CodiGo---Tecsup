from flask_restful import Resource, reqparse
from models.localOpcionesLocal import LocalOpcionesLocalModels

class LocalOpcionesController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id_local',type=int, required=True, help='Falta ingresar el Id del Local')
        parser.add_argument('id_opciones',type=int, required=True, help='Falta ingresar el Id de las Opciones')
        data = parser.parse_args()
        try:
            LocalOpcionesLocalModels(data['id_local'],data['id_opciones']).guardar_do_bd()
        except:
            return {'message': 'Hubo un error al vincular el local con sus opciones, intente nuevamente'},500
        return {'message': 'Se guardo exitosamente las opciones del local'},200
    
    def get(self):
        resultado = LocalOpcionesLocalModels.query.all()
        return 'Ok'