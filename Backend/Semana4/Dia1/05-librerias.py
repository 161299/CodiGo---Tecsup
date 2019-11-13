# un modulo o una libreria tiene funcionalidades que alguien mas ya las hizo y por ende se puede utilizar a favor nuestro
# para instalar o ver los modulos que tenemos en nuestra maquina usamos el comando pip
# para ver la version de nuestro pip es :
# pip--version
#================================================

# para ver todas nuestrar librerias instaladas usamos el comando  -> pip list
#===============================================0

#para actualizar el pip
# python -m pip install --upgrade pip
import camelcase
camello = camelcase.CamelCase()
texto = "hola amiguitos buenos dias"
print(camello.hump(texto))

