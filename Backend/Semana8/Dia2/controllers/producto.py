from flask_restful import Resource, reqparse
from models.producto import ProductoModel

class Producto(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument( 'nombre_producto', type=str, required = True, help="Falta el nombre_producto" )
    parser.add_argument('categoria',type=int, required=True, help="Falta el codigo de categoria")
    def get(self,nombre):
        # este es nuestro select con el atributo query
        # SELECT * FROM PRODUCTO WHERE DESC=NOMBRE
        # QUERY.FETCHONE()
        producto = ProductoModel.query.filter_by(desc=nombre).first()
        if producto:
            return producto.devolverjson()
        else:
            return {'message': 'No existe el producto'},404
    
    def post(self):
        data = Producto.parser.parse_args()
        producto = ProductoModel(data['nombre_producto'],data['categoria'])
        # try funciona como un then
        try:
            producto.guarda_en_la_bd()
        # except funciona como un catch
        except:
            return {'message' : 'Hubo un error the save on database'}
        return {'message':'The product was save Succesfully',
        'producto': data['nombre_producto']}
