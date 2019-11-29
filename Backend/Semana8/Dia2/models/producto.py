from db import db

class ProductoModel(db.Model):
    __tablename__ = "t_producto"
                    # si no ponemos el prod_id  por defecto su id se iria para el nombre de esta variable
    id = db.Column("prod_id",db.Integer, primary_key = True)
    desc = db.Column("prod_desc",db.String(50))
    # creamos una columna de la tabla  luego un int => integer  le ponemos como foreign key (id) y nullable => y que no puede ser nullo
    cat_id = db.Column(db.Integer, db.ForeignKey('t_categoria.cat_id'), nullable=False)
    categoria = db.relationship("CategoriaModel")
   
    # constructor   
    def __init__(self,descripcion,id_cat):
        self.desc = descripcion
        self.cat_id = id_cat

    def devolverjson(self):
        return {
            'id': self.id,
            'descripcion':self.desc
        }
    def guarda_en_la_bd(self):
        # agregamos una seccion
        # con estos comandos guardamos la base de datos
        db.session.add(self)
        db.session.commit()


