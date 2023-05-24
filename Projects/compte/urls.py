from django.urls import path
from . import views

urlpatterns = [
    path('connection/', views.connection,name="connection"),
    path('register/', views.inscription, name="register"),
    path("admins/", views.admin, name="admin")
]
