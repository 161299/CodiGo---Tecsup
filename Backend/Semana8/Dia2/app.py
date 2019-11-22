from flask import Flask
from flask_restful import Api
from db import db
# Activan los modelos 
from controllers.producto import Producto
from controllers.categoria import Categoria
app = Flask(__name__)
# "mysql://username:password@servidor/nombre_bd"
# https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/#connection-uri-format
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:root@localhost/libreria"
api = Api(app)
# creacion de mis Tablas
@app.before_first_request
def creacion_tablas():
    db.init_app(app)
    # db.drop_all(app=app)
    db.create_all(app=app)


# Rutas de mi Api
api.add_resource(Producto, '/producto/<string:nombre>','/producto')
api.add_resource(Categoria, '/categoria/<string:nombre>','/categoria')
if __name__ == "__main__" :
    app.run(debug=True)
