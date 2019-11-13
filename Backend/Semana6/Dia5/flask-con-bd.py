from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
# Credenciales de Mysql
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='apiflask'

# Creamos una variabel de tipo MySQL y le mandamos la configuracion
mysql = MySQL(app)

@app.route('/supermercados/traer')
def inicio():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM SUPERMERCADOS')
    data = cur.fetchall()
    # cerrando 
    cur.close()
    print(data)
    return jsonify(data)

@app.route('/supermercados/agregar',methods=['POST'])
def agregar_super():
    info = request.get_json()
    if(info['nombre']and info['direccion']):
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO SUPERMERCADOS (nombre_super,direccion_super) VALUES (%s,%s)',(info['nombre'],info['direccion']))
        resultado = mysql.connection.commit()
        print(resultado)
        cur.close()
        return jsonify({
            'message':'se agrego con exito',
            'content':info
        })
    else:
        return jsonify({'message':'Faltan valores'}), 400


@app.route('/cliente/agregar', methods=['POST'])
def agregar_user():
    data = request.get_json()
    if(data.__contains__('nombre') and data.__contains__('apellido') and data.__contains__('categoria')):
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO CLIENTE (nom_cliente,ape_cliente, cat_cliente) VALUES(%s,%s,%s)',(data['nombre'],data['apellido'],data['categoria']))
        resultado = mysql.connection.commit()
        print(resultado)
        cur.close()
        return jsonify({
            'message':'Se agrego con exito','content': data
        }),201
    else:
        return jsonify({'message':'Faltan valores'}),404   

@app.route('/cliente/traer')
def traer_clientes():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM CLIENTE')
    data = cur.fetchall()
    # cerrando 
    cur.close()
    print(data)
    return jsonify(data) 


# traer un cliente segun su nombre o apellido
@app.route('/cliente/buscar/<string:palabra>')
def buscar_cliente(palabra):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM CLIENTE WHERE nom_cliente LIKE '%{palabra}%' OR ape_cliente LIKE '%{palabra}%' ")
    # fetchall -> trae toda la data    | fetchone -> trae tan solo uno
    data = cur.fetchall()
    cur.close()
    return jsonify(data)


# el puerto x defaul de flask es 5000
app.run(debug=True)