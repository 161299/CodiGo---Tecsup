from flask_restful import Resource, Api, reqparse
from bd import mysql, app
import bcrypt

api = Api(app)

class Reservas(Resource):
    def get(self):
        cursor = mysql.connection.cursor()
        query = "SELECT * FROM T_RESERVA"
        cursor.execute(query)
        resultado = cursor.fetchall()
        cursor.close()
        return {'Reservas' : resultado}

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

@app.route('/')
def inicio():
    return "todo funciona bien"

api.add_resource(Reservas,'/reservas')
api.add_resource(Usuario,'/usuario/add')
api.add_resource(Login,'/usuario/login')