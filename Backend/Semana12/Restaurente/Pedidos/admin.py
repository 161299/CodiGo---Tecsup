from django.contrib import admin

# Register your models here.
from .models import Tipo, Producto

class TipoAdmin(admin.ModelAdmin):
    """Aqui va toda la configuración de mi Modelo en la parte de administración"""
    pass

admin.site.register(Tipo)
admin.site.register(Producto)


