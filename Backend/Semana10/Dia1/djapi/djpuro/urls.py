# path es la libreria para espicificar las rutas
from django.urls import path
from .views import lista_categoria, categoria_id, agregarCategoria, actualizarCategoria
# en esta variable se almacenan todas las rutas de nuestra aplicación
urlpatterns = [
    path('categorias/',lista_categoria, name="Lista de Categorias"),
    path('categorias/<int:pk>',categoria_id, name="Lista de Categoria por Id"),
    path('categorias/add',agregarCategoria , name="Agregar Categorias"),
    path('categorias/update/<int:pk>',actualizarCategoria, name='Actualizar categoria')
]