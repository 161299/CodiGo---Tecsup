# METODOS MAGICOS
class Empleado(object):
    def __new__(cls):
        print("El metodo magico __new__ ha sido invocado")
        instancia = object.__new__(cls)
        print(instancia)
        return instancia
    def __init__(self):
        print("El metodo magico __init__ ha sido invocado")
    def __str__(self):
        """metodo magico que podemos sobreescribir (Override) para devolver lo que nosotros deseamos """
        return "Yo soy la nueva definicion de la clase"

empleado1 = Empleado()
print(type(empleado1))
print(hex(id(empleado1)))
print(empleado1)

class Punto:
    def __init__(self,x=0, y=0):
        self.x = x
        self.y = y

    def __add__(self,otro):
        """ Metodo magico que sirve para incrementar el mismo objeto con otro"""
        x = self.x + otro.x
        y = self.y + otro.y
        return x, y
punto1 = Punto(4,8)
punto2 = Punto(-2,2)

punto3 = punto1 + punto2
print(punto3)