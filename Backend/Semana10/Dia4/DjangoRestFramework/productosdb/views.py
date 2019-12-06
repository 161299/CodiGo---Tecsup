from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Producto, Categoria
from rest_framework import status
from .serializers  import ProductoSerializer


class ListaProducto(APIView):
      def get(self,request, format=None):
          productos = Producto.objects.all()  
          data = ProductoSerializer(productos,many=True).data          
          return Response({
                'message': 'OK',
                'content': data
          },status= status.HTTP_200_OK)          

class ProductoDetalle(APIView):
      def get(self,request,pk):
            producto = get_object_or_404(Producto,pk=pk)
            data = ProductoSerializer(producto, many=False).data
            return Response({
                  'message': 'OK',
                  'content': data
            }) 
      def post(self,request,format=None):
            serializador = ProductoSerializer(data= request.data)
            if(serializador.is_valid()):
                  serializador.save()
                  print(serializador.validated_data)
                  return Response({
                        'message':'OK',
                        'content': {
                              'id': serializador.data['prod_id'],
                              'nombre': serializador.data['prod_desc'],
                              'vendido': serializador.data['prod_vendido']
                        }
                  })
            return Response(serializador.errors, status = status.HTTP_400_BAD_REQUEST)

class CategoriaURL(APIView):
      def get(self,request,pk, format=None):
            try:
                  categoria = Categoria.objects.get(pk = pk)
                  if categoria:
                        print(categoria.subcategoria_set.all()[0].producto_set.all()[1])
                        return Response({
                              'message':'OK',
                              'content':{
                                    'id': categoria.id_categoria,
                                    'nombre': categoria.descripcion
                              }
                        })
            except:
                  return Response({
                        'message':'Error',
                        'content':{
                              'No se encontro esa categoria'
                        }
                  })
      
      def post(self, request, format=None):
            data =  request.data
            categoria = Categoria.objects.create(descripcion = data['descripcion'])
            categoria.save()
            print(data)
            return Response({
                  'message': 'OK',
                  'contenido': 'Categoria creada exitosamente',
                  'content': {
                        'id': categoria.id_categoria,
                        'nombre': categoria.descripcion
                  }
            }, status=201)
   
  

            

