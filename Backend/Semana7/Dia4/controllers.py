<<<<<<< HEAD
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
        parser.add_argument('placa',type=str,required=True, help='Falta ingresar la Placa')
        parser.add_argument('idusuario',type=str,required=True, help='Falta ingresar la usuario')
        parser.add_argument('idslot',type=str,required=True, help='Falta ingresar la Slot')
        parser.add_argument('idvehiculo',type=str,required=True, help='Falta ingresar la Vehiculo')
        parser.add_argument('idpla',type=str,required=True, help='Falta ingresar la playa')

        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO t_reserva (res_fechin,res_est, res_placa , usu_id, slot_id, tipo_id) VALUES ('{data['fechainicio']}','1','{data['placa']}','{data['idusuario']}','{data['idslot']}','{data['idvehiculo']}')")
        mysql.connection.commit()
        cur.close()        
        cur2 = mysql.connection.cursor()
        cur2.execute(f"update t_slotplaya set slot_estado='1' where playa_id={data['idpla']} and slot_id={data['idslot']}")
        mysql.connection.commit()
        cur2.close()
        # update stlot_tabla set estado ="1" where id = data['slot']
        # insert Usuario
        
        return {'message' : 'Reserva creado exitosamente'}

        
   
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
    def get(self,id_slot):
        cursor = mysql.connection.cursor()
        query = f"SELECT * FROM T_slotplaya where playa_id={id_slot}"
        cursor.execute(query)
        rpta = cursor.fetchall() 
        cursor.close()
        return {'slot_playa': rpta}


    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('slotNumero',type=str,required=True, help='Falta ingresar el nombre de a playa')
        parser.add_argument('slot_estado',type=str,required=True, help='Falta ingresar la latitud de la playa')
        parser.add_argument('playa_id',type=str,required=True, help='Falta ingresar la longitud de a playa')
        
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute(f"insert into t_slotplaya values(null,{data['slotNumero']},{data['slot_estado']},{data['playa_id']})")
        mysql.connection.commit()
        cur.close()




class Reportes(Resource):
    def get(self,la,lo,fecha):
        cursor = mysql.connection.cursor()
        
        query = f"select t_reserva.res_id,t_reserva.res_placa,t_reserva.res_monto,t_tipovehiculo.tipo_nombre from t_reserva inner join t_tipovehiculo on t_reserva.tipo_id=t_tipovehiculo.tipo_id inner join t_slotplaya  on t_slotplaya.slot_id = t_reserva.slot_id,t_playa where t_slotplaya.playa_id=t_playa.playa_id and t_playa.playa_lat='{la}' and t_playa.playa_lng='{lo}' and date(t_reserva.res_fechin)='{fecha}' and t_reserva.res_est=2"
        cursor.execute(query)
        resultado = cursor.fetchall()
        print(resultado)
        cursor.close()
        return {'ReservasDetalle' : resultado}

class Graficos(Resource):
    def get(self,fecha,id):
        cursor = mysql.connection.cursor()
        
        query = f"select t_tipovehiculo.tipo_nombre,count(t_tipovehiculo.tipo_id) from t_reserva inner join t_tipovehiculo on t_tipovehiculo.tipo_id=t_reserva.tipo_id inner join t_slotplaya on t_slotplaya.slot_id=t_reserva.slot_id where date(t_reserva.res_fechin)='{fecha}'  and t_slotplaya.playa_id={id}  group by t_reserva.tipo_id;"
        cursor.execute(query)
        resultado = cursor.fetchall()
        print(resultado)
        cursor.close()
        return {'graficodata' : resultado}

class ActualizarReserva(Resource):
    def put(self,idreserva):
            parser = reqparse.RequestParser()
            parser.add_argument('fechafin',type=str,required=True, help='Falta ingresar la Fecha de Inicio')
            parser.add_argument('monto',type=str,required=True, help='Falta ingresar la Placa')
            parser.add_argument('idslot',type=str,required=True, help='Falta ingresar la Slot')                        
            data = parser.parse_args()
            cur = mysql.connection.cursor()
            cur.execute(f"update t_reserva set res_fechfin='{data['fechafin']}',res_monto='{data['monto']}',res_est='2' where res_id={idreserva}")
            mysql.connection.commit()
            cur.close()        
            cur2 = mysql.connection.cursor()
            cur2.execute(f"update t_slotplaya set slot_estado='0' where  slot_id={data['idslot']}")
            mysql.connection.commit()
            cur2.close()
        # update stlot_tabla set estado ="1" where id = data['slot']
        # insert Usuario        
            return {'message' : 'Actualizacion completa'}


api.add_resource(Reservas,'/reservas','/reservas/<string:idplaya>/<string:fecha>')
api.add_resource(ActualizarReserva,'/actreserva/<string:idreserva>')
api.add_resource(Usuario,'/usuario/add')
api.add_resource(Login,'/usuario/login')
api.add_resource(Playa,'/playa','/playa/<string:playa_id>')
api.add_resource(Slot,'/Slot/<string:id_slot>')
api.add_resource(Reportes,'/reportes/<string:la>/<string:lo>/<string:fecha>')
api.add_resource(Graficos,'/graficos/<string:fecha>/<string:id>')


=======
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
>>>>>>> 7b137489e70defc63443af449a17c1b032c30c14
