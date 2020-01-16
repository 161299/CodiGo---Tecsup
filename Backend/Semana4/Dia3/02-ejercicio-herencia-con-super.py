 # class Perros():
#     def __init__(self,nombre,raza):
       
#         self.nombre = nombre
#         self.raza = raza
        

#     def description(self):
#         print("Hola mi nombre es: {} y soy de raza {}".format(self.nombre,self.raza))

# class Caniche(Perros):
#     def __init__(self,ladrar,gruñir,nombre, raza):
#         super().__init__(nombre, raza)
#         self.ladrar = ladrar
#         self.gruñir = gruñir
#     def description(self):
#         super().description()
#         print("{} casi todo el tiempo, y {} a personas desconocidas".format(self.ladrar,self.gruñir))
    

# class Pastor_Aleman(Perros):
#     def __init__(self,ladrar,gruñir,nombre, raza):
#         super().__init__(nombre, raza)
#         self.ladrar = ladrar
#         self.gruñir = gruñir
#     def description(self):
#         super().description()
#         print(" no {} mucho, pero {} a todos ".format(self.ladrar,self.gruñir))

# class Shepadoodle(Caniche, Pastor_Aleman):
#     pass


# # perro = Perros("Toby","Chascoso")
# # perro.description()

# # c = Caniche("Ladro", "Gruño", "Pepe", "Caniche")
# # c.description()

# # p = Pastor_Aleman("Ladro", "Gruñoo", "Edu", "Pastor Aleman")
# # p.description()


class Alumno():
    def __init__(self, nombre, apellido, notas = []):
        self.nombre = nombre
        self.apellido = apellido
        self.__notas = notas
        
    def resultado(self):
        promedio = (array[0] + array[1] + array[2] + array[3]+ array[4])/5
        if(promedio >= 10.5):
            print("Sr. {} {} estas Aprobado  y tu promedio es {}".format(self.nombre,self.apellido, promedio))
        else:
            print("Sr. {} {} estas Desaprobado y tu promedio es {}".format(self.nombre,self.apellido, promedio))



array  = [10,10,10,10,10]
rpta = Alumno("Cristhian", "Laurente", array)
rpta.resultado()


# class Agenda():
#     diccionario = {
#         "nombre" : 'nombre',
#         "telefono" : 'telefono',
#         "correo" : 'correo'
#     },




print(diccionario)





