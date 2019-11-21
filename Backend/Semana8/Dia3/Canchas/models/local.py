from bd import bd

class LocalModel(bd.Model):
    __tablename__ = "t_local"

    id = bd.Column("loc_id",bd.Integer,primary_key=True)
    nombre = bd.Column("loc_nombre",bd.String(45))
    latitud = bd.Column("loc_lat",bd.DECIMAL(10,8))
    longitud = bd.Column("loc_lng",bd.DECIMAL(10,8))
    direccion = bd.Column("loc_direccion",bd.String(45))
    fono = bd.Column("loc_fono",bd.String(15))
    # ----------------
    canchitas = bd.relationship('CanchitaModel', lazy=True,backref="cancha")
    # opcion = bd.relationship('OpcionesModel',lazy=True,backref="opciones")

    def __init__(self,nombre,latitud,longitud,direccion,fono):
        self.nombre = nombre
        self.latitud = latitud
        self.longitud = longitud
        self.direccion = direccion
        self.fono = fono

    def retornar_yisun(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'latitud': str(self.latitud),
            'longitud': str(self.longitud),
            'direccion': self.direccion,
            'fono': self.fono
        }



    def guardar_na_bd(self):
        bd.session.add(self)
        bd.session.commit()

# parametros  para el lazy puede ser
# 'select'/True => que va a cargar la data de su hijo 
# 'joined'/False => es como usar un inner join cuando vamos a hacer un select
# 'subquery'' => es igual que joined pero x detras usa una subquery para jalar los datos del hijo
# 'dynamic' => retorna los objetos del join de la consulta