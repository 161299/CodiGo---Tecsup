from django.shortcuts import render, get_object_or_404

import bcrypt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Usuario, Tipo, Mesa, Producto

from .serializers import Registro, Login, TipoProductoSerializer, MesaSerializer, ProductoSerializer


class Registrar(APIView):
   def post(self, request, format= None):
       print(request.data)                
       serializador = Registro(data=request.data)
       if serializador.is_valid():
          print(serializador.validated_data)
          
          password = bytes(serializador.validated_data.get('password'), 'utf-8')
          salt = bcrypt.gensalt(rounds=13)
          hashed = bcrypt.hashpw(password, salt)
          salt = salt.decode('utf-8') 
          hashed = hashed.decode('utf-8')

          usu =   Usuario(usu_nom= serializador.validated_data.get('nombre'), usu_hash=hashed, usu_salt=salt, 
                          usu_tipo="1", usu_email= serializador.validated_data.get('email'), usu_fono= request.data['fono'])

          usu.save()
          like = {'ok': True, 'message' : 'Usuario creado exitosamente', 'usuario' : usu.json() }
          return Response(like, status = status.HTTP_201_CREATED)                                    

       else:
          return Response(serializador.errors, status= status.HTTP_400_BAD_REQUEST)  


class Logear(APIView):
    def post(self, request, format=None):
        serializador = Login(data=request.data)
        if serializador.is_valid():
            # devuelve el correo comprobado y que cumpla con las condiciones (tiene que tener un texto@texto.texto)
            correo = serializador.validated_data.get('email')
            # https://docs.djangoproject.com/en/3.0/topics/db/queries/
            # https://tutorial.djangogirls.org/es/django_orm/
            try:
                usuario = Usuario.objects.get(usu_email=correo)
                password = bytes(
                    serializador.validated_data.get('password'), 'utf-8')
                salt = bytes(usuario.usu_salt, 'utf-8')
                hashed = bcrypt.hashpw(password, salt).decode('utf-8')
                if hashed == usuario.usu_hash:
                     return Response({
                        'message':'Ok',
                        'content':'Bienvenido siñorsh {}'.format(usuario.usu_nom)
                     }, status = status.HTTP_200_OK)
                else:
                     return Response({
                        'message':'error',
                        'content':'Usuario o contraseña incorrectos'
                     }, status= status.HTTP_300_FORBIDDEN)
            except:
               return Response({'message': 'Usuario o contraseña incorrectos'}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)
                                                                                          

# APIViews => get post put delete patch options...
# es el tipo más basico de usar una API, describe como va a ser el comportamiento de nuestro endpoint
# Cuando usar APIViews?
# 1.- Cuando necesitamos un control completo de nuestra lógica
# 2.- Procesar archivos y renderizar respuestas asíncronas
# 3.- Cuando se llama a otras API en el mismo request
# 4.- Accesar a archivos locales o información  de nuestro servidor

# VIEWSets => list, create, retrive, update, patrial_update ...
# como en las APIS nos permite escribir la lógica de nuestros endpoints, sin embargo en los viewsets en vez de definir funciones que mapen nuestros metodos HTTP, los viewsets crean funciones que mapean acciones a los objetos de la API como list que trae una lista de objetos, create para crear nuevos objetosm retrieve para devoldever un objeto en especifico, update para actualizar un objeto, partial_update (patch)  para actualizar una parte de un objeto y destroy sirva para eliminar un objeto, adicionalmente los viewsets toman cuidado de nuestra lógica de nuestros endpoints para nosotros, es perfecto para estándarizar la base de datos, y es la manera más rápida para interactuar con nuestra base de datos.
# Cuando usar VIEWSets ?
# 1. Cuando muchas veces se refieré a nuestras preferencias personales
# 2. Para hacer un CRUD simple de nuestra base de datos
# 3. Para una API simple
# 4. Para no tener mucha logica en nuestra API -> Sencillas
# 5. Cuando nuestra base de datos trabaj con una estructura estandar


from rest_framework.viewsets import ViewSet

class TipoProducto(ViewSet):
   def list(self, request):
      tipos = Tipo.objects.all()
      resultado = []
      if tipos:
         for tipo in tipos:
            tipotmp = { 'id': tipo.tipo_id, 'descripcion': tipo.tipo_desc}
            resultado.append(tipotmp)
         return Response({'message': 'Ok', 'content': resultado}, status = status.HTTP_200_OK)
      else:
         return Response({'message': 'Ok', 'content': None}, status = 200)


   def create(self, request):
      serializador = TipoProductoSerializer(data = request.data)
      if serializador.is_valid():
         serializador.save()
         return Response(serializador.validated_data)
      else:
         return Response(serializador.errors, status=500)    

   
   def retrieve(self, request, pk= None):

      tp = get_object_or_404(Tipo, pk= pk)
      data = TipoProductoSerializer(tp).data
      print(tp)
      return Response(data)


   def update(self, request, pk):
      data = TipoProductoSerializer(data = request.data)
      print(data)
      if data.is_valid() :
         Tipo.objects.filter(tipo_id = pk).update(tipo_desc = data.validated_data.get('tipo_desc'))
         tipo = get_object_or_404(Tipo, pk=pk)
         data = TipoProductoSerializer(tipo).data
         return Response(data)
      else:
         return Response(data.errors, status = 403)


   def destroy(self, request, pk):
      tipo = get_object_or_404(Tipo, pk = pk)
      Tipo.objects.filter(tipo_id = pk).delete()
      return Response({'message': 'OK', 'content': 'Se elimino con exito'}, status = 200)


class MesasView(ViewSet):
   def list(self, request):
      mesas = Mesa.objects.all()
      resultado = []
      if mesas:
         for mesa in mesas:
            mesatmp = { 'id': mesa.mesa_id, 'estado': mesa.mesa_est, 'numero': mesa.mesa_nro, 'cantidad': mesa.mesa_cant}
            resultado.append(mesatmp)
         return Response({'message': 'Ok', 'content': resultado}, status = status.HTTP_200_OK)
      else:
         return Response({'message': 'Ok', 'content': None}, status = 200)
      

   def create(self, request):
      serializador = MesaSerializer(data = request.data)
      if serializador.is_valid():
         mesa = serializador.save()
         return Response(mesa.retornar_json(), status=201)
      else:
         return Response(serializador.errors, status=500)
   

   def retrieve(self, request, pk= None):
      tp = get_object_or_404(Mesa, pk= pk)
      data = MesaSerializer(tp).data
      print(tp)
      return Response(data)

   def update(self, request, pk):
      data = MesaSerializer(data = request.data)
      print(data)
      if data.is_valid() :
         Mesa.objects.filter(mesa_id = pk).update(mesa_est = data.validated_data.get('mesa_est'), mesa_nro = data.validated_data.get('mesa_nro'), mesa_cant = data.validated_data.get('mesa_cant') )
         mesa = get_object_or_404(Mesa, pk=pk)
         data = MesaSerializer(mesa).data
         return Response(data)
      else:
         return Response(data.errors, status = 403)


   def destroy(self, request, pk):
      mesa = get_object_or_404(Mesa, pk = pk)
      mesa.mesa_est = False
      mesa.save()
      return Response({'message': 'OK', 'content': 'Se elimino con exito'}, status = 200)

class ProductoView(ViewSet):
   def list(self, request):
      productos_disponibles = Producto.objects.filter(prod_disp=True)
      if productos_disponibles:
         resultado_productos= []
         for producto in productos_disponibles:
            objProdTmp={
               'nombre': producto.prod_nom,
               'descripcion': producto.prod_desc,
               'tipo': producto.tipo_id.tipo_desc
            }
            resultado_productos.append(objProdTmp)
         return Response( resultado_productos, status = status.HTTP_200_OK)
      return Response({
         'message': 'No se encontraron productos, vuelva a buscar'
      }, status = status.HTTP_404_NOT_FOUND)

   def create(self, request):
      serializador = ProductoSerializer(data = request.data)
      if serializador.is_valid():
         nuevo_producto = serializador.save()
         return Response({
            'message': 'se agrego exitosamente el producto',
            'producto': nuevo_producto.tipo_id.tipo_desc
         })
      return Response(serializador.errors, status= status.HTTP_500_INTERNAL_SERVER_ERROR)
   
   def update(self, request, pk):
      data = ProductoSerializer(data = request.data)
      if data.is_valid():
         producto = Producto.objects.filter(prod_id = pk).update(
            prod_nom = data.validated_data.get('prod_nom'),
            prod_desc = data.validated_data.get('prod_desc'),
            prod_img= data.validated_data.get('prod_img'),
            prod_disp = data.validated_data.get('prod_disp'),
            tipo_id = data.validated_data.get('tipo_id'),
         )
         producto_actualizado = get_object_or_404(Producto, pk = pk)
         return Response({
            'message': 'Se actualizo exitosamente el producto',
            'producto': producto_actualizado.prod_nom
         }, status = status.HTTP_200_OK)
      return Response(data.errors, status= status.HTTP_500_INTERNAL_SERVER_ERROR)

   def destroy(self, request, pk):
      producto = get_object_or_404(Producto, pk = pk)
      producto.prod_disp = False
      producto.save()
      return Response({
         'message': 'Se inhabilito el producto'+producto.prod_nom
      }, status = status.HTTP_200_OK)

            
