from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'game-home'),
    path('game/', views.create, name = 'create'),
    path('game/play/', views.overview, name = 'game-overview'),
    path('game/play/<str:pk>/', views.play, name='game_play'),
    path('donate/', views.donate, name = 'donate')
]
