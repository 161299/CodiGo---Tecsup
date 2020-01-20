from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ProductoModel, VentaModel
from .serializers import VentaSerializer, ProductoSerializer
# manejando autenticacion para el token
from rest_framework.permissions import IsAuthenticated

class VentaView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request, format=None):        
        serializador = VentaSerializer(data = request.data)
        
        if serializador.is_valid() :
        #    print(serializador.validated_data.get('prod_id'))
            producto = serializador.validated_data.get('prod_id')
        #    print(producto.prod_id)
            print(producto.prod_cantidad)
            if(producto.prod_cantidad > serializador.validated_data.get('venta_cantidad')):
               venta = serializador.save()         
               print(serializador.validated_data.get('venta_cantidad'))
               producto.prod_cantidad = producto.prod_cantidad - serializador.validated_data.get('venta_cantidad')
               producto.save()
               print(producto) 
               return Response({
                   'message': 'OK',
                   'content':{
                        'id': venta.venta_id,
                        'cantidad': venta.venta_cantidad,
                        'cajero' : venta.venta_cajero,
                        'fecha': venta.venta_fecha,
                        'prod': {
                             'id': venta.prod_id.prod_id               
                        }               
                   }             
               })
            return Response({
                'message': 'No hay Stock'
            })                                     
        return Response(serializador.errors, status=500)
           

class ProductoView(APIView):
    def post(self, request, format=None):        
        serializador = ProductoSerializer(data = request.data)
        if serializador.is_valid() :
           producto = serializador.save()         
           return Response({
               'message': 'OK',
               'content':{
                    'id': producto.prod_id,
                    'nombre': producto.prod_nombre,
                    'cantidad' : producto.prod_cantidad,
             
               }             
           })                                     
        return Response(serializador.errors, status=500)