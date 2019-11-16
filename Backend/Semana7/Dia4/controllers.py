from flask_restful import Resource, Api, reqparse
from bd import mysql, app
from flask_cors import CORS
import bcrypt

api = Api(app)
CORS(app)

cors = CORS(app,resouce={"/api/*":{"origins":"*"}})

class Reservas(Resource):
    def get(self,idplaya,fecha):
        cursor = mysql.connection.cursor()
        query = f"SELECT * FROM T_RESERVA INNER JOIN T_SLOTPLAYA ON T_RESERVA.SLOT_ID = T_SLOTPLAYA.SLOT_ID WHERE T_SLOTPLAYA.PLAYA_ID = {idplaya} AND T_RESERVA.RES_FECHIN = {fecha}"
        cursor.execute(query)
        resultado = cursor.fetchall()
        cursor.close()
        return {'Reservas' : resultado}
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('fechainicio',type=str,required=True, help='Falta ingresar la Fecha de Inicio')
        parser.add_argument('fechafin',type=str,required=True, help='Falta ingresar la Fecha de Final')
        parser.add_argument('placa',type=str,required=True, help='Falta ingresar la Placa')
        parser.add_argument('usuario',type=str,required=True, help='Falta ingresar la usuario')
        parser.add_argument('slot',type=str,required=True, help='Falta ingresar la Slot')
        parser.add_argument('vehiculo',type=str,required=True, help='Falta ingresar la Vehiculo')
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO t_reserva (res_fechin, res_fechfin, res_est, res_placa , usu_id, slot_id, tipo_id) VALUES ('{data['fechainicio']}','{data['fechafin']}','1','{data['placa']}','{data['usuario']}','{data['slot']}','{data['vehiculo']}')")
        mysql.connection.commit()
        cur.close()

        # update stlot_tabla set estado ="1" where id = data['slot']
        # insert Usuario
        
        return {'message' : 'Reserva creado exitosamente'}
    def put(self):

class Usuario(Resource):
        # Para hacer un filtro de lo que nos esta pasando el usuario
    def post(self):
        parser = reqparse.RequestParser()
        # en este caso la variable parser hace referencia a un filtro para la informacion que nos llega por el body para seleccionar solamente la que necesitamos y la que no, se elimnina
        parser.add_argument('correo',type=str,required=True,help='Falta el correo')
        parser.add_argument('password',type=str,required=True,help='Falta la contraseña')
        parser.add_argument('nombre',type=str,required=True,help='Falta el nombre')
        parser.add_argument('apellido',type=str,required=True,help='Falta el apellido')
        parser.add_argument('telefono',type=str,required=True,help='Falta el telefono')
        data = parser.parse_args()
        # para convertir el password en bytes en pocas palabras para ENCRIPTAR nuestro PASSWORD
        password = bytes(data['password'],'utf-8')
        # genera una cantidad de caracteres distorcionadas en este caso 10
        salt = bcrypt.gensalt(rounds=10)
        # hashed es el que une el password con el salt para una encriptacion mas segura
        hashed = bcrypt.hashpw(password,salt)
        print(salt,hashed)
        saltstr = salt.decode('utf-8')
        hashedstr = hashed.decode('utf-8')
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO t_usuario (usu_email, usu_has, usu_salt, usu_rol, usu_nom, usu_ape, usu_fono) VALUES ('{data['correo']}','{hashedstr}','{saltstr}','Vendedor','{data['nombre']}','{data['apellido']}','{data['telefono']}')")
        mysql.connection.commit()
        cur.close()
        return {'message':'Usuario creado exitosamente'}
        
class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('correo',type=str,required=True,help='Falta el correo')
        parser.add_argument('password',type=str,required=True,help='Falt the password')
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        #  la coma al ultimo es obligatio de mysql siempre va en ese lado
        cur.execute("SELECT * FROM t_usuario WHERE usu_email = %s",(data['correo'],))
        # fechone -> traeme uno  y fetchall  -> traeme todos
        respuesta =cur.fetchone()
        cur.close()
        # si tenemos respuesta
        if(respuesta):
            password= bytes(data['password'],'utf-8')
            salt = bytes(respuesta[3],'utf-8')
            hashed = bcrypt.hashpw(password,salt)
            # volviendolo a string
            hashedstr = hashed.decode('utf-8')
            if (hashedstr == respuesta[2]):
                return {'message':'Bienvenido'},202
            else:
                return {'message' : 'Usuario o contraseña incorrectos'},405
        else:
            return {'message':'Usuario o contraseña incorrectos'},405

class Playa(Resource):
    def get(self):
        cursor = mysql.connection.cursor()
        query = "SELECT * FROM T_PLAYA"
        cursor.execute(query)
        rpta = cursor.fetchall() 
        cursor.close()
        return {'playa': rpta}
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nombre',type=str,required=True, help='Falta ingresar el nombre de a playa')
        parser.add_argument('lat',type=str,required=True, help='Falta ingresar la latitud de la playa')
        parser.add_argument('lng',type=str,required=True, help='Falta ingresar la longitud de a playa')
        parser.add_argument('direccion',type=str,required=True, help='Falta ingresar la direccion de a playa')
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO t_playa (playa_nombre, playa_lat, playa_lng, playa_dir) VALUES ('{data['nombre']}','{data['lat']}','{data['lng']}','{data['direccion']}')")
        mysql.connection.commit()
        cur.close()
        return {'message' : 'Playa creada Exitosamente'},201        
    def put(self, playa_id):
        parser = reqparse.RequestParser()
        parser.add_argument('nombre',type=str,required=True, help='Falta ingresar el nombre de a playa')
        parser.add_argument('lat',type=str,required=True, help='Falta ingresar la latitud de la playa')
        parser.add_argument('lng',type=str,required=True, help='Falta ingresar la longitud de a playa')
        parser.add_argument('direccion',type=str,required=True, help='Falta ingresar la direccion de a playa') 
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute(f"UPDATE INTO t_playa SET (playa_nombre, playa_lat, playa_lng, playa_dir) VALUES ('{data['nombre']}','{data['lat']}','{data['lng']}','{data['direccion']}' WHERE PLAYA_ID ={playa_id})")
        mysql.connection.commit()
        cur.close()
        return {'message' : 'Playa actualizada con exito'},201


class Slot(Resource):
    def put(self,id):
        cambiarestaod

api.add_resource(Reservas,'/reservas','/reservas/<string:idplaya>/<string:fecha>')
api.add_resource(Usuario,'/usuario/add')
api.add_resource(Login,'/usuario/login')
api.add_resource(Playa,'/playa','/playa/<string:playa_id>')