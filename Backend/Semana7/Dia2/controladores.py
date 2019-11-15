from base_de_datos import mysql
from flask_restful import Resource, Api
from flask import request
from app import app



class Almacen(Resource):
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * ALMACEN")
        data = cur.fetchall()
        cur.close()
        return {'almacenes' : data}
    def post(self):
        cur = mysql.connection.cursor()
        data = request.get_json()
        cur.execute(f"INSERT INTO ALMACEN (alma_desc)=({data['nombre']})")
        cur = mysql.connection.commit()
        cur.close()
        return {
            'message' : 'Almacen Creado Exitosamente'},201
    def put(self, alma_id):
        cur = mysql.connection.cursor()
        data = request.get_json()
        cur.execute(f"UPDATE INTO ALMACEN SET ALMA_DESC = {data['nombre']} WHERE ALMA_ID={alma_id}")
        mysql.connection.commit()
        cur.close()
        return {'message' : 'Almacen actualizado con exito'},201
    def delete(self):
        pass
class Producto(Resource):
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("""
            CREATE TABLE IF NOT EXISTS PRODUCTO(
                prod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                prod_desc VARCHAR(50),
                prod_precio DOUBLE(5,2),
                prod_disponible boolean
            );
            CREATE TABLE IF NOT EXISTS ALMACEN (
                alma_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                alma_desc VARCHAR(50)
            );
            CREATE TABLE IF NOT EXISTS ALMAPROD(
                almaprod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                prod_id int,
                alma_id int,
                FOREIGN KEY(prod_id) REFERENCES PRODUCTO(prod_id),
                FOREIGN KEY(alma_id) REFERENCES ALMACEN(alma_id)
            )   
            """)
        cur.close()

        cur=mysql.connection.cursor()
        cur.execute("SELECT * FROM PRODUCTO")
        data = cur.fetchall()
        cur.close
        return {'productos':data}
    def post(self):
        producto = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO PRODUCTO (prod_desc, prod_precio,prod_disponible) VALUES ('{}',{},{})".format(producto['descripcion'],producto['precio'],producto['disponibilidad']))
        mysql.connection.commit()
        cur.close()
        return {
            'message':'Producto creado exitosamente', 
            'producto':producto
        }
    def put(self,id_producto):
        data = request.get_json()
        cur = mysql.connection.cursor()
        # UPDATE =>  actualizar
        cur.execute(f"UPDATE PRODUCTO SET prod_desc = '{data['descripcion']}', prod_precio ={data['precio']}, prod_disponible = {data['disponibilidad']} WHERE prod_id = {id_producto}")
        mysql.connection.commit()
        cur.close()
        return {
            'message' : 'Producto actualizado exitosamente',
            'producto' : data
        }
    def delete(self,id_prod):
        cur = mysql.connection.cursor()
        # UPDATE => actualizar
        # SET => nos refereimos como referirnos al producto a eliminar en este caso
        cur.execute(f"UPDATE PRODUCTO SET prod_disponible = false WHERE prod_id = {id_prod}")
        data = cur.fetchall()
        cur.close
        return {
            'message' : 'Producto  inhabilitado exitosamente'
        }
api = Api(app)
api.add_resource(Almacen,'/almacen')
api.add_resource(Producto,'/producto','/producto/<string:id_producto>','/producto/eliminar/<string:id_prod>')
