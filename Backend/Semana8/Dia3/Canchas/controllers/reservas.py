from flask_restful import Resource, reqparse
from models.reserva import ReservaModel
from flask_jwt import jwt_required

class ReservaController(Resource):
    # @jwt_required()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('fecha_init', type=str, required=True, help='Falta ingresar fecha de Inicio')
        parser.add_argument('fecha_end', type=str, required=True, help='Falta ingresar fecha final')
        parser.add_argument('monto', type=float, required=True, help='Falta ingresar el monto')
        parser.add_argument('adelanto', type=float, required=True, help='Falta ingresar el adelanto')
        parser.add_argument('usu_id', type=int, required=True, help='Falta ingresar el id del usuario')
        parser.add_argument('precio_cancha', type=int, required=True, help='Falta ingresar el precio')
        data = parser.parse_args()
        validar = ReservaModel.query.filter_by(cancha=data['precio_cancha']).all()
        from datetime import datetime
        # strptime => convierte un strin a una fecha
        # strftime => convierte una fecha a un string
        fechaintroducidainicio = datetime.strptime(data['fecha_init'],'%Y-%m-%d %H:%M')
        fechaindtroducidafin = datetime.strptime(data['fecha_end'],'%Y-%m-%d %H:%M' )
        print(fechaintroducidainicio)
        for sentencia in validar:
            fechaencontradainicio = sentencia.fechainit
            fechaencontradafin = sentencia.fechaend
            if (fechaintroducidainicio >= fechaencontradainicio and fechaintroducidainicio < fechaencontradafin) or (fechaindtroducidafin > fechaencontradainicio and fechaindtroducidafin <= fechaencontradafin) or (fechaintroducidainicio == fechaencontradafin and fechaindtroducidafin == fechaencontradafin) or (fechaintroducidainicio < fechaencontradainicio and fechaindtroducidafin > fechaencontradafin): 
                return {'message': 'Ya hay una reserva en ese horario'}
            # print(fechaecnontradainicio)
        # return 'OK'
        insercion = ReservaModel(data['fecha_init'],data['fecha_end'],data['monto'],data['adelanto'],data['usu_id'],data['precio_cancha'])
        try:
            insercion.guarda_en_la_bd()     
        except:
            return {'message': 'Hubo un error al guardar en la Base de Datos'},500

        return {'message': 'Se guardo exitosamente en la Base de Datos',
                'content': insercion.id},201   