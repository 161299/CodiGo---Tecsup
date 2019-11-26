from flask_restful import Resource , reqparse
from models.opciones import OpcionesModel
from flask_jwt import jwt_required

class OpcionesLocalController(Resource):
    def get(self,nombre):
        rpt = OpcionesModel.query.filter_by(descripcion = nombre ).first()
        if rpt :
            print(rpt.retornar_yisun())
            return rpt.retornar_yisun()
        else:
            return {'message': 'no se encuentra una opcion con ese nombre'},404

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('descripcion',type=str,required=True, help='Falta ingresar Descripcion')
        data = parser.parse_args()
        ingreso = OpcionesModel(data['descripcion'])
        try:
            ingreso.guardar_en_la_bd()  
        except:
            return {'message': 'Hubo un error al guardar en la base de Datos'},500
        return {'message': 'Se guardo exitosamente la opcion ingresada',
                'content': ingreso.retornar_yisun()}

class OpcionesLocalTodosController(Resource):
    @jwt_required()
    def get(self):
        resultado = OpcionesModel.query.all()
        if resultado:
            opcionArray= []
            for i in resultado:
                opcionArray.append(i.retornar_yisun())
            return opcionArray
        else:
            return {'message': 'No hay ninguna opcion que mostrar'}