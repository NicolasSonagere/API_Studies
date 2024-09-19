from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('filmes', views.listar_filmes),
    path('listarfilmes', views.FilmesViews.as_view()),
    path('filme/<int:pk>', views.FilmesDetailView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('genero/<int:pk>', view=views.GeneroViews.as_view()),
    path('genero/', views.GeneroAllViews.as_view()),
    path('classif/<int:pk>', views.ClassifViews.as_view()),
    path('classif/', views.ClassifAllViews.as_view()),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)