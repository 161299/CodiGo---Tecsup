from django.urls import path
from .views import VentaView, ProductoView

urlpatterns = {
     path('venta/', VentaView.as_view(), name="Realizar una venta"),
     path('producto/', ProductoView.as_view())               
}