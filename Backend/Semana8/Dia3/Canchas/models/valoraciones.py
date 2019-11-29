from bd import bd

class ValoracionesModel(bd.Model):
    __tablename__ = "t_valoraciones"

    id= bd.Column("val_id",bd.Integer,primary_key=True)
    comentario = bd.Column("val_comentario",bd.Text)
    estrellita = bd.Column("val_estrellas",bd.Integer)

    reserva = bd.Column("res_id",bd.Integer,bd.ForeignKey('t_reserva.res_id'),nullable=False)
    # reservas = bd.relationship('ReservaModel')

    def __init__(self,comentario,estrellita):
        self.comentario = comentario
        self.estrellita = estrellita
    
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()