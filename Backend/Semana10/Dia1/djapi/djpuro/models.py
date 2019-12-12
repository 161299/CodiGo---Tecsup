from django.db import models

# Create your models here.

class CategoriaModel(models.Model):
    #definimos todos los atributos de nuestra tabla
    id_categoria = models.AutoField(auto_created=True,unique=True, primary_key=True, null=False)
    descripcion = models.CharField(max_length=100) # varchar(100)
    activo = models.BooleanField(default=True) #booleano

    def __str__(self):
        """Para convertir el objeto creado a un string"""
        return '{}'.format(self.descripcion)
#       return (f'{self.descripcion}')

    #Ahora si queremos nostros modificar otros datos (Nombre de la tabla)
    class Meta:
        #Cambiar el nombre de la table
        db_table = "t_categoria"
        #Cambiar su denominación  en plural
        verbose_name_plural = "Categorias"