from bd import bd

class PrecioCanchaModel(bd.Model):
    __tablename__ = "t_precioCancha"

    id = bd.Column("pc_id",bd.Integer,primary_key=True)
    descripcion = bd.Column("pc_desc",bd.String(45))
    monto = bd.Column("pc_monto",bd.DECIMAL(5,2))
    disponible = bd.Column("pc_disponibilidad",bd.Boolean)

    canchita = bd.Column("can_id",bd.Integer,bd.ForeignKey('t_canchita.can_id'),nullable=False)
    cancha = bd.relationship("CanchitaModel" ,lazy=True)
    reservas = bd.relationship("ReservaModel",lazy=True,backref="reserva")

    def __init__(self,descripcion,monto,disponibilidad,canchita):
        self.descripcion = descripcion
        self.monto = monto
        self.disponible = disponibilidad
        self.canchita = canchita

    def retornar_yisus(self):
        return {
            'id': self.id,
            'descripcion': self.descripcion,
            'monto' : str(self.monto),
            # 'disponible': self.disponible,
            'canchita': self.canchita
        }


    def guarda_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def actualizar_estado(self,nuevo_estado):
        self.disponible=nuevo_estado
        bd.session.commit()