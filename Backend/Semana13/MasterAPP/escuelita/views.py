from django.shortcuts import render,  get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
from .serializers import CategoriaSerializer, LibroSerializer, ReservaSerializer, ReservaDevolucionSerializer
from .models import LibroModel,ReservaModel

class CategoriaView(APIView):
      def post(self, request):
          serializador = CategoriaSerializer(data = request.data)
          if serializador.is_valid():
              categoria = serializador.save()
              return Response({
                   'message': 'OK',
                   'content': {
                       'id': categoria.cat_id,
                       'descripcion': categoria.cat_desc               
                   }               
              })
          return Response(serializador.errors, status=500)


class LibroView(APIView):
     def post(self, request):
           serializador = LibroSerializer(data = request.data)
           if serializador.is_valid():
              libro = serializador.save()   
              return Response({
                   'message': 'OK',
                   'content': {
                       'id': libro.libro_id,
                       'nombre': libro.libro_nombre,
                       'disponibilidad': libro.libro_disp,
                       'categoria': {
                            'descripcion': libro.cat_id.cat_id               
                       }                
                   }               
              })
           return Response(serializador.errors, status=500)

     def put(self, request, pk):
         data = LibroSerializer(data = request.data)
         if data.is_valid():
            LibroModel.objects.filter(libro_id = pk).update(
                libro_nombre = data.validated_data.get('libro_nombre'),
                libro_disp = data.validated_data.get('libro_disp'),
                cat_id = data.validated_data.get('cat_id')                
            )   
            libro_devuelto = get_object_or_404(LibroModel, pk = pk)           
            return Response({
                 'message': 'El usuario devolvió el libro',
                 'content': {
                     'nombre' : libro_devuelto.libro_nombre,
                     'disponible' : libro_devuelto.libro_disp,                
                 }

            }) 
         return Response(data.errors, status=500)               




class ReservaView(APIView):
     def post(self, request):
           serializador = ReservaSerializer(data = request.data)
           if serializador.is_valid():
              reserva = serializador.save()   
              libro = serializador.validated_data.get('libro_id')
              print(serializador.validated_data.get('res_fech_devolucion'))      
              print(libro.libro_id)
              print(serializador.validated_data.get('libro_id').libro_id)
              if(libro.libro_id == serializador.validated_data.get('libro_id').libro_id):
                 libro.libro_disp =  False
                 print(libro.libro_disp)           
                 libro.save()               
                 return Response({
                    'message': 'OK',
                    'content': {
                    'id': reserva.res_id,
                    'fecha de prestamo': reserva.res_fech_prestamo,
                    'libro': {
                    'id': reserva.libro_id.libro_id               
                       }   ,
                    'usuario': {
                    'id': reserva.usu_id.id              
                    }             
                    }               
                 })  
           return Response(serializador.errors, status=500)

     def put(self, request, pk):
         serializador =   ReservaDevolucionSerializer(data = request.data)
         if serializador.is_valid():
            print(serializador.validated_data)
            
            reserva = get_object_or_404(ReservaModel,pk=pk)
            reserva.res_fech_devolucion = serializador.validated_data.get('res_fech_devolucion')               
            reserva.save()
            
                    

            print(reserva.libro_id.libro_id)
            daata =  LibroModel.objects.filter(pk=reserva.libro_id.libro_id).update(
                                libro_disp=True
            )                           

            resta  =  reserva.res_fech_devolucion-reserva.res_fech_prestamo 
            if resta.days > 7 :
               return Response({'message': 'Suspendido'})                 

       

           
            return Response('OK')
         return Response(serializador.errors, status=500)          




