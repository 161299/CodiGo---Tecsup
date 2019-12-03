from flask_restful import Resource, reqparse
from models.tipo import TipoModel

class TipoController(Resource):
    def get(self,nombre):
        #                           descripcion debe ser igual a la variable de tipo models ->descripcion
        resultado = TipoModel.query.filter(TipoModel.descripcion.like("%"+nombre+"%")).all()
        # print(resultado[0].descripcion)
        # print(resultado[0].retornar_json())
        if resultado:
            resultadoArray= []
            local = []
            for tipo in resultado:
                local.append(tipo.retornar_json_con_nombre_local())
                # for canchita in tipo.canchitas:
                #     print(canchita.locales.nombre)
                resultadoArray.append(tipo.retornar_json()),200
            return local
        else:
            return {'message':'No se encontro el Tipo'},404
        return 'OK!'
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('descripcion',type=str,required=True,help='Falta la descripcion')
        data = parser.parse_args()
        # consulta para que no se repita el mismo tipo ingresado anteriormente
        consulta = TipoModel.query.filter_by(descripcion = data['descripcion']).first()
        insercion = TipoModel(data['descripcion'])
        if not consulta:
            try:
                insercion.guarda_en_la_bd()
            except:
                return {
                    'message': 'Hubo un error al agregar en la base de datos'
                },500
            return {'message':'Se agrego exitosamente el tipo en la base de datos',
                    'content': insercion.retornar_json()},201
        return {
            'message': 'Ya hay un tipo creado con esa descripcion'
        },412



