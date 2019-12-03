from bd import bd

class TipoModel(bd.Model):
    __tablename__ = "t_tipo"

    id = bd.Column("tipo_id",bd.Integer, primary_key=True)
    descripcion = bd.Column("tipo_desc",bd.String(45), nullable=True)

    canchitas = bd.relationship('CanchitaModel',lazy=True,backref="tipos")
    # backref=> es una manera simple de declarar una nueva propiedad en la clase CanchitasModel para poder ingresar a sus valores solamente necesitaria canchita.tipo
    def __init__(self,descripcion):
        self.descripcion = descripcion

    def retornar_json(self):
        return{
            'id':self.id,
            'descripcion': self.descripcion
        }

    def retornar_json_con_nombre_local(self):
        locales = []
        for canchita in self.canchitas:
            locales.append(canchita.locales.retornar_yisun())
        return {
            'descripcion': self.descripcion,
            'nombres': locales
        }
    def guarda_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()