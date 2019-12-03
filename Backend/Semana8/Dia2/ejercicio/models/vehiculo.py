from db import db

class VehiculoModel(db.model):
    __tablename__ = "t_vehiculo"
    id = db.Column("veh_id",db.Integer, primary_Key = True)
    descripcion = db.Column("veh_desc",db.String(45))
    cat_id = db.Column(db.Integer, db.ForeignKey('t_categoria.cat_id'), nullable=False)
    categoria = db.relationship("CategoriaModel")

    def __init__(self,descripcion,id_cat):
        self.desc = descripcion
        self.cat_id = id_cat

    def devolverjson(self):
        return{
            'id' : self.id
            'descripcion': self.desc
        }
    
    def guardar_bd(self):
        db.session.add(self)
        db.session.commit()