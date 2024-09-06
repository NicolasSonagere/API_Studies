from typing import Any
from django.db import models

class Filmes(models.Model):
    titulo = models.CharField(max_length=255)
    genero = models.CharField(max_length=255)
    ano = models.CharField(max_length=255)
    idioma = models.CharField(max_length=255)
    classif = models.CharField(max_length=255)



class Genero(models.Model):
    genero = models.CharField(max_length=255)
