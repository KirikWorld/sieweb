from django.urls import path
from .views import checkserver, createMedic

urlpatterns = [
    path('checkserver/', checkserver),
    path('create/', createMedic)
]