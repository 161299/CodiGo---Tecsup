from django.urls import path
from .views import AsistenciaController


urlpatterns = [
     path('v1/asistencias/<int:pk>', AsistenciaController.as_view(), name="Asistencia")
]