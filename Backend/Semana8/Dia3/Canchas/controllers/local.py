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
        parser.add_argument('usu_id', type=int,required=True,help='Falta ingresar el id de Usuario')
        data = parser.parse_args()
        local = LocalModel(data['nombre'],data['latitud'],data['longitud'],data['direccion'],data['fono'],data['usu_id'])
        try:
            local.guardar_na_bd()
        except:
            return {'message': 'Hubo un error al guardar en la base de datos'}
        return local.retornar_yisun()

    def get(self, nombre):

        respuesta = LocalModel.query.filter_by(nombre=nombre).all()
        # print(respuesta)
        if respuesta:
            arrayNew = []
            for item in respuesta:
                arrayNew.append(item.retornar_yisun())
            
            return arrayNew
        else:
            return {'message': 'No hay ningun local con ese nombre'},404

class LocalesControllers(Resource):
    def get(self):
        resultado = LocalModel.query.all()
        if resultado:
            resultadoArray = []
            for i in resultado:
                resultadoArray.append(i.retornar_yisun())

            return resultadoArray
        else:
            return {'message': 'No hay ningun local'}