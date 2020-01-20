from django.urls import path
from .views import CategoriaView, LibroView, ReservaView

urlpatterns = [
   path('categoria/', CategoriaView.as_view()),  
   path('libro/', LibroView.as_view()),  
   path('libro/<int:pk>', LibroView.as_view()),  
   path('reserva/', ReservaView.as_view()),                 
   path('reserva/<int:pk>', ReservaView.as_view()),                 
]