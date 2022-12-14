from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('appointment.urls')),
    path('auth/', include('authapp.urls')),
]
