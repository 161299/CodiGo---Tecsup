# class Persona:
#     def __init__(self, nombre, edad):
#         self.nombre = nombre
#         self.edad = edad
#     def saludar(self):
#         print("Hola, me llamo {0} y tengo {1} años".format(self.nombre,self.edad))

# persona1 = Persona("Cristhian",19)
# print(persona1.nombre)
# print(persona1.saludar())

# =====EJEMPLO=============
# Crear una clase persona que tenga atributos sus datos personales y su experiencia laboral, que se ingrese por un menu la opc 1 para ingresar nueva experiencia laboral, que la opc 2 la muestre y que la opc 3 la elimine

class Persona:
    experiencia = []
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
    

objPersona = Persona





condicion = 4
while(condicion < 5):
    option = int(input("Escoja la opcion :  1: Ingresar nueva experiencia laboral,  2: Mostrar experiencia laboral,  3. Eliminar experiencia Laboral, 4: SALIR"))

    if(option == 1):

