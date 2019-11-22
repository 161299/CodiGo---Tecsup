from flask_restful import Resource, reqparse
from models.tipo import TipoModel

class TipoController(Resource):
    def get(self,nombre):
        #                           descripcion debe ser igual a la variable de tipo models ->descripcion
        resultado = TipoModel.query.filter_by(descripcion=nombre).first()
        print(resultado.descripcion)
        print(resultado.retornar_json())
        if resultado:
            return resultado.retornar_json(),200
        else:
            return {'message':'No se encontro el Tipo'},404
        return 'OK!'
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('descripcion',type=str,required=True,help='Falta la descripcion')
        data = parser.parse_args()
        insercion = TipoModel(data['descripcion'])
        try:
            insercion.guarda_en_la_bd()
        except:
            return {
                'message': 'Hubo un error al agregar en la base de datos'
            },500
        return {'message':'Se agrego exitosamente el tipo en la base de datos'},201



