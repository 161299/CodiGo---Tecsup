from django.db import models

# Create your models here.
class ProductoModel(models.Model):
      prod_id = models.AutoField(primary_key = True, unique = True)   
      prod_nombre = models.CharField(max_length=45)
      prod_cantidad = models.IntegerField()


      createdAt = models.DateTimeField(auto_now_add = True)
      updatedAt = models.DateTimeField(auto_now = True)
#    def __str__(self):
#       return '{}, {}, {}'.format(self.prod_nombre, self.prod_cantidad) if self.prod_cantidad else '{}, {}, no hay stock'.format(self.prod_nombre, self.prod_cantidad)
      class Meta:
           db_table = 't_productos'
           verbose_name_plural = 'Productos'                          


class VentaModel(models.Model):
      venta_id = models.AutoField(primary_key = True, unique=True)
      venta_cantidad = models.IntegerField()
      venta_cajero = models.IntegerField()            
      venta_fecha = models.DateTimeField()
      prod_id = models.ForeignKey(ProductoModel, on_delete= models.CASCADE)

      createdAt = models.DateTimeField(auto_now_add = True)
      updatedAt = models.DateTimeField(auto_now = True)
      class Meta:
           db_table = 't_venta'
           verbose_name_plural = 'Ventas'               

