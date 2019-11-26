from flask_restful import Resource, reqparse
from models.usuario import UsuarioModel

class UsuarioController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nombre', type=str,required=True, help='Falta ingresar el nombre')
        parser.add_argument('apellido', type=str,required=True, help='Falta ingresar el apellido')
        parser.add_argument('password', type=str,required=True, help='Falta ingresar el password')
        parser.add_argument('tipo', type=str,required=True, help='Falta ingresar el tipo')
        parser.add_argument('telefono', type=str,required=True, help='Falta ingresar el telefono')
        parser.add_argument('correo', type=str,required=True, help='Falta ingresar el correo')
        data = parser.parse_args()
        consulta = UsuarioModel.query.filter_by(correo= data['correo']).first()
        if not consulta:
            try:
                UsuarioModel(data['nombre'],data['apellido'],data['password'],data['tipo'],data['dni'],data['correo']).guardar_en_la_bd()
           except:
                return {'message': 'Hubo un error al guardar el Usuario en la Base de Datos'},500
        return {'message': 'Ya hay un usuario registrado con ese correo'},418


