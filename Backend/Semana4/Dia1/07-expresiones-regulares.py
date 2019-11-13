# Secuencia de caracteres que forma una busqueda de un patron 
# sirve para verificar una cadena de texto si contiene un patron especifico

# texto = "Hola, mi nombre es Cristhian"
# import re
# print(re.search("nombre",texto))
# if(re.search("nombre",texto)):
#     print("Se encontro la palabra nombre")
# else:
#     print("No se econtontro la palabra a buscar")


# Buscar la palabra pero al final de la oracion
# print(re.search("Cristhian$",texto))

# Buscar la palabra por el inicio de la oracion
# print(re.search("^Hola", texto))
#==============================================
# findall => busca todas las coincidencias que hay en un texto
# texto2 = """
# El auto de cristhian es azul
# El auto de JORGE es cafe
# El auto de Juan es azul"""
# .* => no importa lo que hay entre esas dos palabras
# print(re.findall("auto.*azul",texto2))
# texto3= "Es lunes y el cielo es azul"
# Sirve para separar lo que esta contenido en una cadena de texto
# print(re.split(" ", texto3))
#=================================================0
#sirve para reemplzarar ls palabra a bucsar por la nueva palabra como segundo parametro
# re.sub("Lunes","Viernes",texto3)


#============================================================

# como sacar codigo ascii
print(ord("a"))
# como imprimir en base al codigo ascii
print(chr(97))


