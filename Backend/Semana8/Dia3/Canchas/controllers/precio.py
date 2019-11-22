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
        return precio.retornar_yisus()

    def get(self,descripcion):
        resultado = PrecioCanchaModel.query.filter_by(descripcion = descripcion).first()
        if resultado:
            return resultado.retornar_yisus(),200
        else:
            return {'message': 'No se encuentra la descripcion definida'},404

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