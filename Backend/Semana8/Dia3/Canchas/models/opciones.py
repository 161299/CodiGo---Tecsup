from bd  import bd

class OpcionesModel(bd.Model):
    __tablename__ = "t_opcionesLocal"

    id = bd.Column("ol_id",bd.Integer,primary_key=True)
    descripcion = bd.Column("ol_desc",bd.String(45))

    # relacion
    # localtipo = bd.Column("loc_id",bd.Integer,bd.ForeignKey('t_local.loc_id'),nullable=False) 
    # local = bd.relationship("LocalModel")

    def __init__(self,descripcion):
        self.descripcion = descripcion
        # self.localtipo = localtipo
    
    def retornar_yisun(self):
        return {
            'id' : self.id,
            'descripcion': self.descripcion
        }

    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()