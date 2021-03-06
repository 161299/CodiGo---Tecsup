class Vehiculos():
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.andando = False
        self.acelera = False
        self.frena = False

    def arrancar(self):
        self.andando = True

    def acelerar(self):
        self.acelera = True

    def frenar(self):
        self.frena = True

    def estado(self):
        print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando: ", self.andando,
              "\nAcelerando: ", self.acelera, "\nFrenando: ", self.frena)


class Moto(Vehiculos):
    hacer_caballito = ""

    def caballito(self):
        self.hacer_caballito = "Estoy haciendo caballito"

    # sobre escritura de metodos
    def estado(self):
        print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando: ", self.andando,
              "\nAcelerando: ", self.acelera, "\nFrenando: ", self.frena, "\nCaballito: ", self.hacer_caballito)

class Camioncito(Vehiculos):
    def cargar(self,cargar):
        self.cargado = cargar
        if(self.cargado):
            return "El camioncito esta cargado"
        else:
            return "El camioncito tiene espacio para cargar"

class Vehiculo_Electrico():
   
    def __init__(self):     
        self.autonomia = 100

    def cargarEnergia(self):
        self.cargando = True


# Herencia multiple => Cuando heredamos de varios padres
# Solamente va a utilizar el constructor del padre mas cercano a la izquierda en este caso vehiculos
class BiciElectrica(Vehiculos,Vehiculo_Electrico):
    def __init__(self,marca,modelo):
        self.marca = marca
        self.modelo = modelo
        # super() => llama el metodo de la clase padre
        super().__init__(self.marca,self.modelo)
        # =====OJO===> Para llamaar al constructor de la clase padre secundario, se pone su nombre y se le manda los parametros self
        Vehiculo_Electrico.__init__(self)
        # Vehiculos.__init__(self.marca,self.modelo)
    def estado (self):
        super().estado()
        print("Autonomia: ",self.autonomia)
        

miBici = BiciElectrica("ssadas","asda")
miBici.estado()


miMoto = Moto("Kawasaki", "Ninja")
miMoto.caballito()
miMoto.estado()

miCamioncito = Camioncito("Volvo","F100")
miCamioncito.arrancar()
miCamioncito.estado()
# si sobre escribimos un metodo, solo funciona para el hijo que lo sobreescribio
# y para sus hijos, pero no para sus hermanos