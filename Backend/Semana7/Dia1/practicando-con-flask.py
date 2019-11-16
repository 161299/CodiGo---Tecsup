# Crear una base de datos de un colegio para una eleccion estudiantil, se tiene la tabla estudiante que tiene su est_cod, est_dni, est_ape_pat, est_ape_mat, est_nombres, est_fec_nacimiento, est_sexo, id_mat y una tabla matricula con mat_id, mat_est, mat_grado, mat_seccion, mat_seccion, mat_nivel, mat_turno, para la eleccion se creo una tabla llamada Lista que va a tener lista_id, lista_nombre y una tabla Voto con voto_id, est_id lista_id y lista_fecha. Se desea ver los estudiantes que esten en un nivel determinado, ver cuantos son de un turno en un especifico, ver cuantas listas hay e ingresar los votos, un estudiante puede votar una sola vez

from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
# Credenciales de Mysql
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='practicando_con_flask'

# Alter user 'username'@'ur' IDENTIFIED WITH mysql_native_password
# Creamos una variabel de tipo MySQL y le mandamos la configuracion
mysql = MySQL(app)

@app.route('/estudiantes/nivel/<string:nivel>')
def nivelr(nivel):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT ESTUDIANTE.est_nombres, ESTUDIANTE.est_cod, ESTUDIANTE.est_dni FROM ESTUDIANTE INNER JOIN MATRICULA  ON matricula.mat_id = estudiante.id_mat WHERE mat_nivel LIKE '%{nivel}%'")
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@app.route('/estudiantes/turno/<string:turno>')
def turno(turno):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT ESTUDIANTE.est_nombres, ESTUDIANTE.est_cod, ESTUDIANTE.est_dni FROM ESTUDIANTE INNER JOIN MATRICULA  ON estudiante.id_mat = matricula.mat_id WHERE mat_turno LIKE '%{turno}%'")
    data = cur.fetchall()
    cur.close()
    return jsonify(data)


@app.route('/estudiantes/mostrar/listas')  
def mostrar_lista():
    cur = mysql.connection.cursor()
    cur.execute('SELECT lista_nombre, lista_fecha FROM lista;')
    data = cur.fetchall()
    cur.close()
    print(data)
    return jsonify(data)


@app.route('/estudiantes/voto', methods=['POST'])
def votar_estudiante():
    data = request.get_json()
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT voto.est_id FROM VOTO WHERE est_id ={data['estudiante']}")
    rpta = cur.fetchall()
    if(rpta):
        return jsonify({
        'message': 'el usuario ya voto', 'content': data
        })
    else:
        if(data.__contains__('fecha') and data.__contains__('estudiante') and data.__contains__('lista')):
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO VOTO (voto_fecha, est_id, lista_id VALUES (%s,%s,%s)) ", (data['fecha'],data['estudiante'], data['lista']))
            resultado = mysql.connection.commit()
            print(resultado)
            cur.close()
            return jsonify({
                'message': 'Se ingresaron los Votos con Exito','content': data
            }),201

    
# el puerto x defaul de flask es 5000
app.run(debug=True)