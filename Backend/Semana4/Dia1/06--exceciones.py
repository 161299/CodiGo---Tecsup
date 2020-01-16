# numero1 = int(input("ingrese numero 1: "))
# numero2 = int(input("ingrese numero 2: "))
# division = numero1/numero2
# print(division)

# ==============================================
# excepciones => try ... except .... else ... finally
# try:
    #TODO lo que va a suceder dentro del try y si hay un error no va a incidir con el funcionamiento de nuestro programa
    # numero1 = int(input("ingrese numero 1: "))
    # numero2 = int(input("ingrese numero 2: "))
    # division = numero1/numero2
    # print(division)

# except ZeroDivisionError:
#     print("No puedes dividir entre 0 pues")
# except:
    # para ver que error es el que tenemos print(environmentError)
    # print(EnvironmentError)
#     print("Hubo un error al ingresar datos")
# else: 
#     print("La division funciono bien")
# finally:
#     print("No me importa si funciono la division o no")



exito = 0
while(exito == 0):
    try:
        num1 = int(input("Ingrese un numero1"))
        num2 = int(input("Ingrese numero2"))

        multiplicacion = num1*num2
        print(multiplicacion)
        exito = 1
    except:
        print("No puedes ingresar texto vuleve a intentarlo")
        exito = 0

