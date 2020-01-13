from django.urls import path, include
from .views import Registrar, Logear, TipoProducto, MesasView, ProductoView
from rest_framework.routers import DefaultRouter
# ViewSets
router = DefaultRouter()
router.register('tipoProducto', TipoProducto, basename='Tipo Producto')
router.register('mesa', MesasView, basename= 'Mesas')
router.register('producto', ProductoView, basename='Productos')

# APIViews
urlpatterns = [
   path('registro/', Registrar.as_view(), name="Registro de Usuarios"),
   path('login/', Logear.as_view(), name="Login de Usuarios"), 

   path('', include(router.urls)),               
]