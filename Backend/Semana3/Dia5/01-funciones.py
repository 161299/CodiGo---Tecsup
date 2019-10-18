# para definir una funcion se utiliza el prefijo def

# def saludar():
#     """DESCRIPCION DE NUESTRSA FUNCION"""
#     print("Hola prosor")
    

# def saludarConNombre(nombre,anio):
#     """Funcion que saluda con tu nombre y te dice tu edad"""
#     print("Hola {} buenas tardes, tienes {} años".format(nombre,anio))

# saludar()
# saludarConNombre("Eduardo",25)

# ======== FUNCION QUE SUMA DOS VARIABLES =======================

# def sumar(a,b):
#     suma = a+b
#     return suma
# resultado = sumar(10,2)

# ========FUNCION QUE RESTA DOS VARIABLES===================
# def resta(a,b):
#     return a-b    
# resultado = resta(b=5, a=10)
# print(resultado)
# ==========================================================

# ======la variable *args es una lista dinamica de elementos para recibir un numero indeterminado de varibales =====*args -> ARGUMENTOS======
# def indetermindad(*args):
#     for elemento in args:
#         print(elemento)
# indetermindad(20,"Viernes",[1,2,3,4,5])
# =======================================================

# **kwargs: keywords args es una variable para recibir un numero ilimitado de parametros pero usando los diccionarios

# diccionario = {"clave1":"valor1"}
# def indeterminada_diccionario(**kwargs):
#     print(kwargs)
# indeterminada_diccionario(n=5,c="Cristhian",l=[1,2,3,4,5])

# def funcion():
#     return 18, "viernes", ["Verano","Otoño", "Primavera", "Invierno"]

# dia, nombre_dia,estaciones= funcion()
# print(dia, nombre_dia, estaciones)

# EJERCICIO 1 ==============================================
# Crear una funcion que ingrese mi edad y mi nombre y me diga si puedo votar o estoy jubilado o no puedo votar

# def mi_edad():
#     edad = int(input("Ingresa tu edad :"))
#     nombre = input("Ingresa tu nombre :")

#     if(edad < 17):
#         print("No puedes votar eres aun un niño rata")
#     elif(edad>17 and edad<=65):
#         print(" FELICITACIONES Puedes votar")
#     else:
#         print("Estas JUBILADO TE VAS A MORIR pero siquieres puedes votar")
# mi_edad()

# EJERCICIO 2==================================================
# Escriba una funcion que le pida al usuario ingresar la altura y el ancho de un rectangulo y que lo dibuje usando *, ejemplo:
# altura : 5
# ancho : 4
# ****
# ****
# ****
# ****

# def rectangulo ():
#     altura = int(input("Ingrese altura :"))
#     ancho = int(input("Ingrese el ancho :"))
#     suma = "   *   " * ancho
#     for i in range(altura):
       
#         print(suma)
    
# rectangulo()

# def rectangulo_doble():
#     altura = int(input("Ingrese altura :"))
#     ancho = int(input("Ingrese el ancho :"))
#     for i in range(ancho):
#         for j in range(altura):
#             print("*", end="")
#         print("")
# rectangulo_doble()

# EJERCICIO 3
# Escribir una funcion que nosotros le ingresamos el lado de un hexagono y que lo dibuje
# Lados: 5

# def hexagono():
#     lado = int(input("Ingrese lado de *: "))
#     altura1= "*" * lado
#     for i in range(lado):
#         if (lado == altura1):
#             pass
#         print(altura1)
# hexagono()

# De acuerdo a la altura que nosotros ingresemos, nos tiene que dibujar el triangulo invertido
# Ejemplo
# Altura: 4
# ****
# ***
# **
# *

# def trianguloInvertido():
#     altura = int(input("Ingrese altura: "))
#     for i in range(altura,0,-1):
#         asterisco = "*" * i
#         print(asterisco)
# trianguloInvertido()


def invertido():
    altura = int(input("Ingrese altura: "))
    tope = altura
    for i in range(altura,0,-1):  
        tope =  "*" 
        espacio = ' '
        espacio1 = espacio * i + (tope*altura)
        print(espacio1)

invertido()

