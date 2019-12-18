from django.shortcuts import render

import bcrypt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Usuario

from .serializers import Registro


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


class Login(APIView):
   def post(self, request, format = None):
                                                                                          

