from rest_framework import serializers
from .models import Filmes, Genero, Classif, Imagem

class FilmesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filmes
        fields = ['id', 'titulo', 'genero', 'ano', 'idioma', 'classif', 'urlImage', 'imagem']

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id', 'genero']

class ClassifSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classif
        fields = ['id', 'classif']

class ImagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagem
        fields = ['id', 'imagem']