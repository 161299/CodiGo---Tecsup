from flask_restful import Resource, reqparse
from models.precio import PrecioCanchaModel

class PrecioController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('descripcion',type=str,required=True, help='Falta ingresar la Descripcion')
        parser.add_argument('monto',type=float,required=True, help='Falta ingresar el monto')
        parser.add_argument('disponible',type=bool,required=True, help='Falta ingresar la disponibilidad')
        parser.add_argument('canchita',type=int,required=True, help='Falta ingresar la disponibilidad')
        data = parser.parse_args()
        precio = PrecioCanchaModel(data['descripcion'],data['monto'],data['disponible'],data['canchita'])
        try: 
            precio.guarda_en_la_bd()
        except:
            return {'message': 'Hubo un error al guardar en la Base de Datos'}
        return {
            'message': 'Se agrego exitosamente el precio a la cancha' + str(precio.canchita)
        },201

    def get(self,id):
        resultado = PrecioCanchaModel.query.filter_by( canchita = id).filter_by(disponible = True).first()
        if resultado:
            return {resultado.retornar_yisus(),200}
        else:
            return {'message': 'Esta cancha aun no tiene precios disponibles'},200
    def put(self, id):
        parser = reqparse.RequestParser()
        parser.add_argument('estado', type=bool,  required=True,  help="Falta el estado al que va a ser cambiado el precio de la cancha")
        data = parser.parse_args()
        resultado = precioCanchaModel.query.filter_by(id=id).first()
        try:
            resultado.actualizar_estado(data['estado'])
        except:
            return {
                    'message': 'Hubo un error al actualizar el estado, intentelo nuevamente'}, 500
            return {'message': 'Se actualizo el estado del precio de esa canchita'}, 200
class PreciosController(Resource):
    def get(self):
        resultado = PrecioCanchaModel.query.all()
        if resultado:
            resultadoList =  []
            for i in resultado:
                resultadoList.append(i.retornar_yisus())
            return resultadoList
        else:
            return {'message' : 'No hay ningun precio'}