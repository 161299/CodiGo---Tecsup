# Generated by Django 3.0 on 2019-12-06 22:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alumno',
            fields=[
                ('alum_id', models.AutoField(help_text='Id del alumno', primary_key=True, serialize=False, unique=True)),
                ('alum_nom', models.CharField(help_text='Nombre del alumno', max_length=50, unique=True)),
                ('alum_ape', models.CharField(help_text='Apellido del alumno', max_length=50, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Alumnos',
                'db_table': 't_alumno',
            },
        ),
        migrations.CreateModel(
            name='AlumnoCurso',
            fields=[
                ('almcur_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('alum_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='alumnitos.Alumno')),
            ],
            options={
                'verbose_name_plural': 'AlumnosCursos',
                'db_table': 't_alumno_curso',
            },
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('cur_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('cur_nom', models.CharField(help_text='Nombre del curso', max_length=50, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Cursos',
                'db_table': 't_curso',
            },
        ),
        migrations.CreateModel(
            name='Asistencia',
            fields=[
                ('asis_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('asis_fecha', models.DateField()),
                ('asis_est', models.BooleanField(default=False)),
                ('almcur_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='alumnitos.AlumnoCurso')),
            ],
            options={
                'verbose_name_plural': 'Asistencias',
                'db_table': 't_asistencia',
            },
        ),
        migrations.AddField(
            model_name='alumnocurso',
            name='cur_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='alumnitos.Curso'),
        ),
    ]
