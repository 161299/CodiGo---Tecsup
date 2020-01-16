# Lista
# colores = ["rojo", "azul","verde","amarillo"]
# # print(colores)
# # #imprime el ultimo item de la lista
# # print(colores[-1])
# # # imprime desde la posicion 0 hasta <2 
# # print(colores[0:2])
# # #imprime desde la primera posicion hasta el final 
# # print(colores[1:]) 

# # Todas las formas de impresion de las listas tambien sirven para los string
# text = "Hola Mundo"
# print(texto[-1])

# # Metodo para agregar nuevos datos a la lista
# colores.append("morado")
# print(colores)
# #  Metodo para quitar un objeto de la lista
# colores.remove("azul")
# print(colores)
# # Metodo para limpiar toda la lista, eliminar todos sus objetos
# # colores.clear()
# # print(colores)
# #  .pop elimina posiciones de nuestro de array
# colores.pop(2)
# print(colores)
# colores.

# Tuplas -> coleccion de elementos ordenada QUE NOS E PUEDE MODIFICAR
# es inalterable y sirve apra usar elementos que nunca se van a modificar
# en nuestro programa
tupla_nombres = ("Luis","Jorge","Cristhian","Luis")
# print(tupla_nombres)
# len -> nos permite  saber la longitud que tiene nuestro tupla
# print(len(tupla_nombres))
# .count -> para ver cuantos elementos repetidos en los parentesis tenemos
# print(tupla_nombres.count("Luis"))
# print(type(tupla_nombres))

#Conjuntos -> coleccion de elementos desordenada, osea, no tiene indice para acceeder a sus elementos
conjunto = {"Verano","Primaver","Otoño","Invierno"}
# print(conjunto)
# for estacion in conjunto:
    # print(estacion)
conjunto.add("Otra estación")
# print(conjunto)

# Diccionarios -> coleccion de elementos que estan indexados no estan ordenados y se puede modificar sus valores. Estan conformados por una clave y un valor

estaciones = {
    "verano":"diversion",
    "primavera":"flores",
    "otoño":"amarillento",
    "invierno":"paneton"
}
# print(estaciones)
# print(estaciones["verano"])
# estaciones["ninguno"]="Soledad"
# print(estaciones)
# 1ra forma de borrar
# estaciones.pop("primavera")
# print(estaciones)
# 2da forma de borrar
# del(estaciones["ninguno"])
# print(estaciones)
# for key, value in estaciones.items():
#     print(key, value)

# numeros = [1,2,3,4,5,6,7,8,9,10]
# for number in numeros:
#     if number  % 2 == 0 :
#         print(number)
#     else:
#         print(number)


#for -> es usado para iterar sobre una secuencia de elementos
# cadena = "buenos dias"
# print(cadena)
# for letra in cadena:
#     print(letra, end="")

#for (let i=0; i < 10; i++)
# for i in range(0,10,2):
#     print(i)

# num = [1,2,3,4,5,6,7,8,9,10]
# impares = []
# pares = []
# for i in num:
#     if i % 2 == 0:
#         pares.append(i)
#     else:
#         impares.append(i)

# print(pares)
# print(impares)
# num.clear()
# print(num)

# break -> para parar el bucle
# for numero in range(0,10):
#     if(numero == 5):
#         break
#     print(numero)

# continue -> para parar SOLO la iteraccion actual
# for numero in range(0,10):
#     if(numero == 6):
#         continue
#     print(numero)

#for doble
# for numero1 in range(4):
#     for numero2 in range(3):
#         print(numero1,numero2)

#while -> un bucle infinito de acciones mientras seae cierta la condicion
# valor = 1
# fin = 0
# while(valor<fin):
#     print(valor)
#     valor +=1 #valor ++
 
 # pass -> no hace nada, solo indica que pase a la siguiente iteracion

 #Ejercicio: que de una lista de numeros
# numeros = [1,2,3,4,5,6,7,8,9]
 # guarde todos los pares en la lista numeros_pares y los impares en la lista numeros_imapres y que muestre las listas y lista de numeros debe quedar vacia


# numero_pares = []
# numeros_impares = []
# for number in numeros:
#     if (number % 2 == 0):
#         numero_pares.append(number)
#     else:
#         numeros_impares.append(number)

# print(numero_pares)
# print(numeros_impares)
# numeros.clear()
# print(numeros)

# Programa que ingrese 3 notas de las cuales la segunda tiene peso 2 y me calcule el promedio, si tengo < 10 estoy jalado, si tengo entre 11 y 13, me voy a subsa y si tengo de 13 a mas estoy APROBADO

# guardar = []
# for j in range(3):
#     nota = float(input((f"Ingrese nota {j+ 1}")))
#     guardar.append(nota)

# promedio = ((guardar[0]+guardar[2])/4)+(guardar[1]/2)


# print(promedio)
# if (promedio < 10.49):
#     print("Estas Jalado")
# elif (promedio >10.49 and promedio<12.49):
#     print("Te vas a Subsa")
# else:
#     print("ESTAS APROBADO FELICITACIONES")

# print(guardar)

#Dependiendo del dia de la semana que ingrese voy a escoger lo siguiente 

# Lunes: tengo entre 10 y 20  soles puedo ir al cine si tengo mas puedo comerme una salchipapa
# Martes: tengo entre 15 y 20 soles puedo comer una pizza 2x1 y si tengo entre 25 y 40 me puedo comer una pizza familiar y si tengo mas puedo comerme un  pollo a la braza
# Miercoles tenngo entre 20 y 30 puedo comerme un KFC y si tengo mas de 30 puedo comerme un PP's y si tengo menos de 20mpuedo comerme un king broaster
#Otro dia: Puedo comerme lo que quiera

dias = input("Ingrese dia")

if (dias == "lunes"):
    cantidad = float(input("Ingrese cantidad: "))
    if (cantidad >= 10 and cantidad <=20):
        print("Puedes ir al Cine ")
    elif(cantidad >20):
        print("Puedes ir al Cine o comerte una salchipapa")
    else:
        print("No puedes comprar nada POR POBRE")
elif (dias == "martes"):
    cantidad = float(input("Ingrese cantidad: "))
    if (cantidad >=15 and cantidad <=25):
        print("Puedes comer una pizza 2x1")
    elif(cantidad >=25 and cantidad <=40):
        print("Te puedes comer una pizza familiar")
    elif(cantidad>40):
        print("Puedes comerte un pollo a la Braza")
    else:
        print("No puedes comprar nada POR POBRE")
elif (dias == "miercoles"):
    cantidad = float(input("Ingrese cantidad: "))
    if (cantidad >=20 and cantidad <=30):
        print("Puedes comerte un KFC")
    elif(cantidad >30):
        print("Puedes comerte un PP'S")
    elif(cantidad < 20):
        print("Puedes comerte un King Broaster")
    else:
        print("No puedes comprar nada POR POBRE")
else:
    print("Puedes comerte lo que quieras")