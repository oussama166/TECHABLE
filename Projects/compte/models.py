from django.db import models
from django.contrib.auth.models import AbstractUser

class user(AbstractUser):
    pass
    
class cour(models.Model):
    name= models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()

class utilisateur(models.Model):
    nameU=models.CharField(max_length=128)
    emailU=models.EmailField(max_length=250)
    passwordU=models.CharField(max_length=128)   

