# Generated by Django 3.0 on 2020-01-09 21:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('escuelita', '0002_auto_20200109_1612'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='reservamodel',
            options={'verbose_name_plural': 'Reservas'},
        ),
        migrations.AlterModelTable(
            name='reservamodel',
            table='t_reserva',
        ),
    ]
