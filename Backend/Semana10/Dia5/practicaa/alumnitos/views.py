from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Asistencia
from rest_framework import status


class AsistenciaController(APIView):
      def get(self,request, pk, format=None):
            # try:
                asistencia = Asistencia.objects.get(pk = pk)
                if asistencia:
                    # print(asistencia.alumnocurso_set.all()[0].alumno_set.all()[1])
                    # print(asistencia.alumno.all()[0])
                    return Response({
                      'message': 'OK',
                      'content': {
                          'id': asistencia.asis_id,
                          'fecha': asistencia.asis_fecha,
                          'estado': asistencia.asis_est,
                      }
                    })
            # except:
            #     return Response({
            #         'message': 'Error',
            #         'content':{
            #             'No se encontro ninguna Asistencia'
            #         }
            #     })
            

          
          