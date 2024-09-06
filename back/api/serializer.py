from rest_framework import serializers
from .models import Filmes

class FilmesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filmes
        fields = ['id', 'titulo', 'genero', 'ano', 'idioma', 'classif']