from flask_restful import Resource, reqparse
from models.vehiculo import VehiculoModel

class Producto(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument( 'vehiculo', type=str, required = True, help="Falta el vehiculo" )
    parser.add_argument('categoria',type=int, required=True, help="Falta el codigo de categoria")
    def get(self,nombre):
        # este es nuestro select con el atributo query
        # SELECT * FROM PRODUCTO WHERE DESC=NOMBRE
        # QUERY.FETCHONE()
        vehiculo = VehiculoModel.query.all()
        if vehiculo:
            return vehiculo.devolverjson()
        else:
            return {'message': 'No existe el producto'},404
    
    def post(self):
        data = Vehiculo.parser.parse_args()
        vehiculo = VehiculoModel(data['vehiculo'],data['categoria'])
        # try funciona como un then
        try:
            vehiculo.guarda_bd()
        # except funciona como un catch
        except:
            return {'message' : 'Hubo un error the save on database'}
        return {'message':'The Vehiculo was save Succesfully',
        'producto': data['vehiculo']}




