from bd import bd

class CanchitaModel(bd.Model):
    __tablename__ = "t_canchita"

    id = bd.Column("can_id",bd.Integer, primary_key = True)
    tamanio = bd.Column("can_tamanio",bd.String(45))
    foto = bd.Column("can_foto",bd.Text)

    # relaciones
    local = bd.Column("loc_id",bd.Integer,bd.ForeignKey('t_local.loc_id'),nullable=False)
    tipo = bd.Column("tipo_id",bd.Integer,bd.ForeignKey('t_tipo.tipo_id'),nullable=False)
    locales = bd.relationship("LocalModel",lazy=True)
    tiposi = bd.relationship("TipoModel", lazy=True)
    precio = bd.relationship("PrecioCanchaModel",lazy=True,backref="precio")
    
    def __init__(self,tamanio,foto,local,tipo):
        self.tamanio = tamanio
        self.foto = foto
        self.local = local
        self.tipo = tipo

    def retornar_json(self):
        return{
            'id': self.id,
            'tipo': self.tiposi.descripcion,
            'tamanio' : self.tamanio,
            'foto': self.foto,
            'local': self.locales.retornar_yisun(), 
            
        }

    def guarda_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()

