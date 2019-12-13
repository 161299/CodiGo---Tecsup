from django.db import models

class Alumno(models.Model):
      alum_id = models.AutoField(primary_key=True, unique=True, help_text="Id del alumno")
      alum_nom = models.CharField(max_length=50, unique=True,help_text="Nombre del alumno")
      alum_ape = models.CharField(max_length=50,unique=True,help_text="Apellido del alumno")

      def __str__(self):
          return '{}'.format(self.alum_nom, self.alum_ape)

      class Meta:
          db_table = "t_alumno"
          verbose_name_plural = "Alumnos"


class Curso(models.Model):
      cur_id = models.AutoField(primary_key=True,unique=True)
      cur_nom = models.CharField(max_length=50,unique=True,help_text="Nombre del curso")

      def __str__(self):
          return '{}'.format(self.cur_nom)
      
      class Meta:
           db_table = "t_curso"
           verbose_name_plural = "Cursos"

class AlumnoCurso(models.Model):
      almcur_id = models.AutoField(primary_key=True, unique=True)
      alum_id = models.ForeignKey(Alumno, on_delete=models.CASCADE)
      cur_id = models.ForeignKey(Curso,on_delete=models.CASCADE)

      def __str__(self):
          return '{}'.format(self.alum_id, self.cur_id)

      class Meta:
          db_table = "t_alumno_curso"
          verbose_name_plural = "AlumnosCursos"

class Asistencia(models.Model):
      asis_id = models.AutoField(primary_key=True, unique=True)
      asis_fecha = models.DateField()
      asis_est = models.BooleanField(default=False)
      almcur_id = models.ForeignKey(AlumnoCurso,on_delete=models.CASCADE)

      def __str__(self):
          return '{}'.format(self.asis_fecha, self.asis_est, self.almcur_id)

      class Meta:
           db_table = "t_asistencia"
           verbose_name_plural = "Asistencias"
      

