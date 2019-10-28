# JSON = JavaScript Object Notation
# Es una forma de almacenar e intercambiar datos que estan en formato texto

import json
producto1 = {
    "nombre": "Cristhian",
    "color": "fucsia",
    "precio": 50.00
}
# Convertir un diccionario a un JSON
estructura_json = json.dumps(producto1)
print(estructura_json)
print(estructura_json[0])

# Convertir un JSON a un diccionario
producto2 = json.loads(estructura_json)
print(type(producto2))
print(producto2)
print(producto2["precio"])