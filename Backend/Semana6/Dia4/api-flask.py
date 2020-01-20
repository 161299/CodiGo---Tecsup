from flask import Flask, request, jsonify

app=Flask(__name__)
supermercado = [
    {
        'nombre':'Super',
        'productos':[
            {
                'nombre':'Leche Gloria',
                'precio':4.20
            }
        ]
    }
]

@app.route('/') #ruta principal
def inicio():
    # que retorne un string
    return 'Lista de supermecados'

# que la ruta de tiendas va a hacer el metodo POST
@app.route('/tiendas',methods=['POST'])
def crear_tienda():
    data = request.get_json() 
    #este metodo automaticamente convierte el json en un diccionario
    nuevo_supermercado = {
        'nombre': data['nombre'],
        'productos':[]
    }
    supermercado.append(nuevo_supermercado)
    return jsonify(nuevo_supermercado)
    # devuleve un diccionario ocnvertido en un json para que el cliente lo peuda tratar


# Traer tienda segun su nombre

@app.route('/tiendaXnombre/<string:nombre>', methods=['GET']) #<=
def traer_tienda(nombre):# <=
    # ahi si tienen que coincidir el nombre de la variable en su url con el nombre de la viable del parametro
    for tienda in supermercado:
        if(tienda['nombre'] == nombre):
            return jsonify(tienda),202
    return f'No se encontro la tienda con el nombre {nombre}',404

@app.route('/tiendas', methods=['GET'])
def traer_tiendas():
    return jsonify({'minimarkecitos':supermercado})

@app.route('/tiendas/<nombre_tienda>/agregarProducto', methods=['POST'])
def agregar_producto(nombre_tienda):
    # agregar producto mandado desde el body
    # {'nombre':'Chocolatada','precio':4.20}
    for tienda in supermercado:
        if tienda['nombre'] == nombre_tienda:
            #  request significa que va a traer en este caso el json de nuestro cliente
            dataProducto = request.get_json()
            nuevo_producto ={
                'nombre':dataProducto['nombre'],
                'precio':dataProducto['precio']
            }
            tienda['productos'].append(nuevo_producto)
            return jsonify(tienda),201
    return jsonify({'message':'No se encontro esa tienda'}),404

# Traer todos los productos de una tienda
@app.route('/tiendas/<string:nombre>/item')
def traer_todos_los_productos_por_tienda(nombre):
    for tienda in supermercado:
        if tienda['nombre'] == nombre:
            return jsonify({'Productos': tienda['productos']})
    return jsonfify(
        {
            'message':'No se encontro esa tienda'
        }
    )
     

app.run(port=5000,debug=True)



