from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
      class Meta:
         model = User
         fields = ('username', 'email', 'password')
         extra_kwargs = {
                'password': {
                     'write_only': True               
                }
         }
#      esta parte de aqui no es necesario para el jwt  es solo depende de la idea del negocio    
      def create(self, validated_data):
          user = User(
               # nametable = validated_data['cualquiername']          
                 email = validated_data['email'],
                 username = validated_data['username']
          )   
#    el metodo set_password nos encripta la constraseño con un fuerte cifrado       
          user.set_password(validated_data['password'])                                      
          user.save()
          return user