from rest_framework import serializers
from .models import VentaModel, ProductoModel

class VentaSerializer(serializers.ModelSerializer):
      class Meta:
           model =  VentaModel
           fields = '__all__'    

class ProductoSerializer(serializers.ModelSerializer):
      class Meta:
           model = ProductoModel
           fields = '__all__'                                                     