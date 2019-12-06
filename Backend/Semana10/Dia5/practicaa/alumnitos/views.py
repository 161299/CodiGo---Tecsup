from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Asistencia
from rest_framework import status


class AsistenciaController(APIView):
      def get(self,request, pk, format=None):
          data = request.data
          print(data)
          
          