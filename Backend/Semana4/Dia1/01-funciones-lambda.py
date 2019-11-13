# Una funcion lambda es una funcion pequeña y anonima  ->  es igual que la funcion anonima que javascript

            #Que es lo que va a hacer -> :
resultado = lambda numero: numero + 30
print(resultado(20))
# =======================================================
# funcion que recibe 2 numero y retorna su suma
resultado2 = lambda numero1, numero2: numero1+numero2
# Su comparativa en una funcion norma seria:
def suma(numero1,numero2):
    return numero1+numero2

print(resultado2(15,20))