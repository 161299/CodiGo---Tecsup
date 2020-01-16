from bd import bd

class ReservaModel(bd.Model):
    __tablename__ = "t_reserva"

    id = bd.Column("res_id",bd.Integer,primary_key=True)
    fechainit = bd.Column("res_fechin",bd.DATETIME)
    fechaend = bd.Column("res_fechfin",bd.DATETIME)
    monto = bd.Column("res_monto",bd.DECIMAL(5,2))
    adelanto = bd.Column("res_adelanto",bd.DECIMAL(5,2))

    user = bd.Column("usu_id",bd.Integer,bd.ForeignKey('t_usuario.usu_id'), nullable=False)
    cancha = bd.Column("pc_id",bd.Integer,bd.ForeignKey('t_precioCancha.pc_id'),nullable=False)

    usuarios = bd.relationship('UsuarioModel', lazy=True)
    precio = bd.relationship('PrecioCanchaModel')
    valoraciones = bd.relationship('ValoracionesModel',lazy=True,backref="valoracion")

    def __init__(self,fechainit,fechaend,monto,adelanto,user,cancha):
        self.fechainit = fechainit
        self.fechaend = fechaend
        self.monto = monto
        self.adelanto = adelanto
        self.user = user
        self.cancha = cancha


    def retornar_json(self):
        return{
            'id': self.id,
            'descripcion':{
                'fechainit': self.fechainit,
                'fechaend': self.fechaend,
                # 'monto': self.monto,
                # 'adelanto': self.adelanto,
                # 'user': self.user,
                # 'cancha': self.cancha
            }
        }

    def guarda_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()