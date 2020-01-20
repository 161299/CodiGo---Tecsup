from rest_framework import serializers
from .models import CategoriaModel, LibroModel, ReservaModel

class CategoriaSerializer(serializers.ModelSerializer):
      class Meta:
          model = CategoriaModel  
          fields = '__all__'

class LibroSerializer(serializers.ModelSerializer):
      class Meta:
          model = LibroModel
          fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
     class Meta:
          model = ReservaModel
          fields = '__all__'    

class ReservaDevolucionSerializer(serializers.ModelSerializer):
     class Meta:
         model = ReservaModel
         fields = ['res_fech_devolucion']    
#          exclude = '__all__'                           
                                         

