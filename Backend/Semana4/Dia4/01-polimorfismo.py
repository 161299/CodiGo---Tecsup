class Vehiculo:
    pass
class Automovil(Vehiculo):
    def movilidad(self):
        print("Me muevo con 4 ruedas")
class Bicicleta(Vehiculo):
    def movilidad(self):
        print("Me muevo con 2 ruedas")

class Patines(Vehiculo):
    def movilidad(self):
        print("Me muevo con 3 ruedas")


# Tpos de Encapsulamiento
# _x protected
#__y private
# z public


def movilidad(vehiculo):
    vehiculo.movilidad()

miVehiculo = Patines()
movilidad(miVehiculo)
