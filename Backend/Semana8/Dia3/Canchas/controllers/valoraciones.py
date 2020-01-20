from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.valoraciones import ValoracionesModel
from models.local import LocalModel

class ValoracionController(Resource):
    @jwt_required()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('comentario', type=str,required=True, help='Falta ingresar el comentario')
        parser.add_argument('estrellas', type=int,required=True, help='Falta ingresar las estrellas')
        parser.add_argument('id_reserva', type=int,required=True, help='Falta ingresar el id_reserva')
        data = parser.parse_args()

        valoracion = ValoracionesModel(data['comentario'],data['estrellas'],data['id_reserva'])
        try:
            valoracion.guardar_en_la_bd()
        except:
            return {
                'message': 'Hubo un error en guardar en la base de Datos intentelo nuevamente',
            },500
        return {
             'message': 'Se agrego exitosamente el comentario', 'content': valoracion.id
        },201

class ValoracionesController(Resource):
    def get(self,id_local):
        # resultado = ValoracionesModel.query.filter_by(id_loc = id_local).first()
        sentencia = LocalModel.query.filter_by(id = id_local).first()
        resultado = []
        promedio = 0
        for cancha in sentencia.canchitas:
            # print(cancha)
            for precio in cancha.precio:
                # print(precio)
                for reserva in precio.reservas:
                    # print(reserva)
                    for valoracion in reserva.valoraciones:
                        resultado.append({'comentario': valoracion.comentario,
                                            'estrellas': valoracion.estrellita})

        # print( sentencia.canchitas[0].precio[0].reservas[0].valoraciones[0])
        return {
            'resultado': resultado,
            'promedio': promedio/len(resultado)
        }

        
        