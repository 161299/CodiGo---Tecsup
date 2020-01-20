from django.db import models

class Usuario(models.Model):
   usu_id = models.AutoField(primary_key = True, unique = True)
   usu_nom = models.CharField(max_length=45, blank= False, help_text='Aqui va el nombre completo del usuario')  
   usu_hash = models.TextField()
   usu_salt = models.TextField() 
   usu_tipo = models.IntegerField()
   usu_email = models.EmailField(max_length=45, unique= True)
   usu_fono = models.CharField(max_length=20)  

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   
   def __str__(self):
        return 'correo: {}'.format(self.usu_email)

   def json(self):
      return {'id' : self.usu_id, 'nombre' : self.usu_nom, 'fono': self.usu_fono, 'correo': self.usu_email}
   class Meta:
      db_table = "t_usuario"
      verbose_name_plural = "Usuarios" 
      ordering = ['usu_nom']


class Mesa(models.Model):
   mesa_id = models.AutoField(primary_key= True)
   mesa_est = models.BooleanField(default=True)
   mesa_nro = models.IntegerField()
   mesa_cant = models.IntegerField() 

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   def retornar_json(self):
      return {
         'id': self.mesa_id,
         'numero': self.mesa_nro,
         'estado': self.mesa_est,
         'cantidad': self.mesa_cant
      }
   class Meta:
      db_table = "t_mesa"
      verbose_name_plural = "Mesas" 
                   

class Reserva(models.Model):
   res_id = models.AutoField(primary_key = True)
   res_dni = models.CharField(max_length=10)
   res_fecha = models.DateTimeField()
   res_est = models.BooleanField()

   usu_id = models.ForeignKey(Usuario, on_delete= models.CASCADE)
   mesa_id = models.ForeignKey(Mesa, on_delete= models.CASCADE)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   class Meta:
      db_table = "t_reserva"
      verbose_name_plural = "Reservas" 


class Asignacion(models.Model):
   asig_id = models.AutoField(primary_key = True)
   usu_id = models.ForeignKey(Usuario, on_delete = models.CASCADE)
   mesa_id = models.ForeignKey(Mesa, on_delete= models.CASCADE)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   class Meta:
      db_table = "t_asignacion"
      verbose_name_plural = "Asignaciones"                                  


class Tipo(models.Model):
   tipo_id = models.AutoField(primary_key = True)
   tipo_desc = models.CharField(max_length=45)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   def __str__(self):
      return 'Tipo %s, %s'% (self.tipo_id, self.tipo_desc)
   
   class Meta:
      db_table = "t_tipo"
      verbose_name_plural = "Tipos" 


class Cabecera_Documento(models.Model):
   cd_id = models.AutoField(primary_key= True)
   cd_fecha = models.DateTimeField(auto_now=True)
   cd_nomCli = models.CharField(max_length=45)
   cd_dniCli = models.CharField(max_length=15)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   class Meta:
      db_table = "t_cabeceraDocumento"
      verbose_name_plural = "Cabecera de Documentos" 


class Producto(models.Model):
   prod_id = models.AutoField(primary_key= True)
   prod_nom = models.CharField(max_length=45)
   prod_desc = models.TextField()
   prod_img = models.TextField(null = True, blank=True)
   prod_disp = models.BooleanField(default=True)
   tipo_id = models.ForeignKey(Tipo, on_delete = models.CASCADE)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)

   def __str__(self):
      return '{}, {}, disponible'.format(self.prod_nom, self.prod_desc) if self.prod_disp else '{}, {}, no disponible'.format(self.prod_nom, self.prod_desc)

   class Meta:
      db_table = "t_producto"
      verbose_name_plural = "Productos" 

class Precio(models.Model):
   precio_id = models.AutoField(primary_key = True)
   precio_inicio = models.DateTimeField()
   precio_fin = models.DateTimeField()
   precio_monto = models.DecimalField(decimal_places=2, max_digits=5)
   prod_id = models.ForeignKey(Producto, on_delete = models.CASCADE)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   class Meta:
      db_table = "t_precio"
      verbose_name_plural = "Precios" 


class Detalle_Documento(models.Model):
   dd_id = models.AutoField(primary_key= True)
   dd_cant = models.IntegerField()
   dd_total = models.DecimalField(decimal_places=2, max_digits=5)
   precio_id = models.ForeignKey(Precio, on_delete= models.CASCADE)
   cd_id = models.ForeignKey(Cabecera_Documento, on_delete= models.CASCADE)
   mesa_id = models.ForeignKey(Mesa, on_delete= models.CASCADE)

   createdAt = models.DateTimeField(auto_now_add=True)
   updatedAt = models.DateTimeField(auto_now=True)
   class Meta:
      db_table = "t_detalleDocumento"
      verbose_name_plural = "Detalle de Documentos" 

