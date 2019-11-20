from flask_restful import Resource, reqparse
from models.local import LocalModel

class LocalControllers(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nombre', type=str,required=True,help='Falta ingresar el nombre')
        parser.add_argument('latitud', type=float,required=True,help='Falta ingresar el latitud')
        parser.add_argument('longitud', type=float,required=True,help='Falta ingresar el longitud')
        parser.add_argument('direccion', type=str,required=True,help='Falta ingresar el direccion')
        parser.add_argument('fono', type=str,required=True,help='Falta ingresar el fono')
        data = parser.parse_args()
        local = LocalModel(data['nombre'],data['latitud'],data['longitud'],data['direccion'],data['fono'])
        try:
            local.guardar_na_bd()
        except:
            return {'message': 'Hubo un error al guardar en la base de datos'}
        return local.retornar_yisun()
