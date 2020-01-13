from django.db import models
from django.contrib.auth.models import User 
# Create your models here.

class CategoriaModel(models.Model):
      cat_id = models.AutoField(primary_key=True, unique=True)
      cat_desc = models.CharField(max_length=60)

      class Meta:
           db_table = 't_categoria'
           verbose_name_plural = 'Categorias'                             

class LibroModel(models.Model):
      libro_id = models.AutoField(primary_key= True, unique=True)
      libro_nombre = models.CharField(max_length=45)
      libro_disp = models.BooleanField(default=False)
      cat_id = models.ForeignKey(CategoriaModel, on_delete= models.CASCADE) 

      class Meta:
           db_table = 'Libros'
           verbose_name_plural= 'Libros'    

class ReservaModel(models.Model):
      res_id = models.AutoField(primary_key=True, unique=True)
      res_fech_prestamo = models.DateTimeField()
      libro_id = models.ForeignKey(LibroModel, on_delete=models.CASCADE, default=None)
      usu_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
      res_fech_devolucion = models.DateTimeField(default=None, null=True)

      class Meta:
           db_table = 't_reserva'
           verbose_name_plural='Reservas'               

