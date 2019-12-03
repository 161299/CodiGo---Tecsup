from db import db

class CategoriaModel(db.Model):
    __tablename__ = "t_categoria"

    id = db.Column("cat_id",db.Integer,primary_key=True)
    descripcion = db.Column("cat_desc",db.String(45))
    vehiculos = db.relationship('VehiculoModel' , lazy = "dynamic")
    def __init__(self,descripcion):
        return {
            'id' : self.id,
            'descripcion' : self.descripcion
        }

    def guardar_en_bd(self):
        db.session.add(self)
        db.session.commit()