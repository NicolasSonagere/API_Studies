# Generated by Django 5.0.7 on 2024-09-12 13:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_genero_genero_generos_alter_filmes_genero'),
    ]

    operations = [
        migrations.RenameField(
            model_name='genero',
            old_name='generos',
            new_name='genero',
        ),
    ]
