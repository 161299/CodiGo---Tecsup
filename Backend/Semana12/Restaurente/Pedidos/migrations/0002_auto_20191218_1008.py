# Generated by Django 3.0 on 2019-12-18 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pedidos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='usu_email',
            field=models.EmailField(max_length=45, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='usu_tipo',
            field=models.IntegerField(),
        ),
    ]
