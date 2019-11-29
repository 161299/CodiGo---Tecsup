from bd import bd

class LocalOpcionesLocalModels(bd.Model):
    __tablename__ = "t_localOpciones"

    id = bd.Column("lol_id",bd.Integer, primary_key = True)

    local = bd.Column("loc_id",bd.Integer,bd.ForeignKey('t_local.loc_id'),nullable=False)
    opclocal = bd.Column("ol_id",bd.Integer,bd.ForeignKey('t_opcionesLocal.ol_id'),nullable=False)

    def __init__(self,local,opclocal):
        self.local = local,
        self.opclocal = opclocal

    def guardar_do_bd(self):
        bd.session.add(self)
        bd.session.commit()
