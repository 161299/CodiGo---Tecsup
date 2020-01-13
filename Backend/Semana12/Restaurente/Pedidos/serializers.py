from rest_framework import serializers
from .models import Tipo, Mesa, Producto

class Registro(serializers.Serializer):
   email = serializers.EmailField()
   password = serializers.CharField()
   nombre = serializers.CharField(max_length=45)

class Login(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()      

class TipoProductoSerializer(serializers.ModelSerializer):
   class Meta:
      model = Tipo
      fields = '__all__' 

class MesaSerializer(serializers.ModelSerializer):
   class Meta:
      model = Mesa
      fields = '__all__'   

class ProductoSerializer(serializers.ModelSerializer):
   class Meta:
      model = Producto   
      fields = '__all__'