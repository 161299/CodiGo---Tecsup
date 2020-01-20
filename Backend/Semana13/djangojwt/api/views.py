from django.shortcuts import render, get_object_or_404
from .models import CategoriaModel
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import generics
from .serializers import UserSerializer


def lista_de_categorias(request):
    categorias = CategoriaModel.objects.all()
    rpta = {
         'resultado': list(categorias.values('descripcion', 'estado'))
    }
    return JsonResponse(rpta)

class categoriaDetalle(APIView):
    permission_classes = (IsAuthenticated,)                
    def get(self, request, pk, format=None):
        cat = get_object_or_404(CategoriaModel, pk = pk)
        return Response({
            'descripcion': cat.descripcion,
            'estado': cat.estado                
        })

class CrearUsuario(generics.CreateAPIView):
    serializer_class = UserSerializer                

