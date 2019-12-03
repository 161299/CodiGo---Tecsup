from flask_restful import Resource, reqparse
from models.canchita import CanchitaModel

class CanchitaController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('tamanio', type=str, required=True, help="Falta ingresar Tamanio")
        parser.add_argument('foto', type=str, required=True, help="Falta ingresar foto")
        parser.add_argument('local', type=int, required=True, help="Falta ingresar local")
        parser.add_argument('tipo', type=int, required=True, help="Falta ingresar tipo")
        data= parser.parse_args()
        canchita = CanchitaModel(data['tamanio'],data['foto'],data['local'],data['tipo'])
        canchita.guarda_en_la_bd()
        # try:
        # except:
        #     return {'message':'Hubo un error al guardar en la base de Datos'}
        return canchita.retornar_json()
    def get(self,id):
        resultado = CanchitaModel.query.filter_by(id = id).first()
        if resultado:
            return resultado.retornar_json()
        else:
            return {'message': 'No se encuentra una cancha con ese id'}

class CanchitasControllers(Resource):
    def get(self):
        resultado = CanchitaModel.query.all()
        if resultado: 
            arrayResults=[]
            for item in resultado:
                arrayResults.append(item.retornar_json())
            
            return arrayResults
        else:
            return {'message': 'No se encontro las Canchitas'},404
        return 'Success!'


        