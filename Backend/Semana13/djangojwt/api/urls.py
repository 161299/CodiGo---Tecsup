from django.urls import path
from .views import lista_de_categorias, categoriaDetalle, CrearUsuario


urlpatterns = [
   path('categorias/' ,lista_de_categorias, name="Lista de Categorias"),
   path('categoria/<int:pk>', categoriaDetalle.as_view(), name="Detalle de Categoria"),
   path('crearusuario/', CrearUsuario.as_view(), name="Creación de Usuario")              
]