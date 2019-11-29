from flask_restful import Resource, reqparse
from models.reserva import ReservaModel
from flask_jwt import jwt_required

class ReservaController(Resource):
    @jwt_required()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('fecha_init', type=str, required=True, help='Falta ingresar fecha de Inicio')
        parser.add_argument('fecha_end', type=str, required=True, help='Falta ingresar fecha final')
        parser.add_argument('monto', type=float, required=True, help='Falta ingresar el monto')
        parser.add_argument('adelanto', type=float, required=True, help='Falta ingresar el adelanto')
        parser.add_argument('usu_id', type=int, required=True, help='Falta ingresar el id del usuario')
        parser.add_argument('precio_cancha', type=int, required=True, help='Falta ingresar el precio')
        data = parser.parse_args()

        insercion = ReservaModel(data['fecha_init'],data['fecha_end'],data['monto'],data['adelanto'],data['usu_id'],data['precio_cancha'])
        try:
            insercion.guarda_en_la_bd()     
        except:
            return {'message': 'Hubo un error al guar en la Base de Datos'},500

        return {'message': 'Se guardo exitosamente en la Base de Datos',
                'content': insercion.id},201   