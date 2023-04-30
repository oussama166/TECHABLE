from django.urls import path
from . import views

urlpatterns = [
    path('connection/', views.connection,name="conncetion"),
    path('register/', views.inscription, name="register"),
]
