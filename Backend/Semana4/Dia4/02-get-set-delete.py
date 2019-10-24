class Persona:
    def __init__(self):
        self.__nombre = ''
        self.__direccion = ''
        self.__fono = ''
    def setname(self,name):
        print('el setname() ha sido llamado')
        self.__nombre = name 

    def getname(self):
        print('el getname() ha sido llamado')
        return self.__nombre

    def delname(self):
        print('el delname () ha sido llamado')
        del self.__nombre
    # La funcion property sirve para definir nuestras funciones de get, sete, delete
    name = property(getname,setname, delname)

persona1 = Persona()
# persona1.__name
persona1.name = "Eduardo"
nombre = persona1.name
del persona1.name
# print(nombre)
