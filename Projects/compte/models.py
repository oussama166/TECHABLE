from django.db import models
from django.contrib.auth.models import AbstractUser
class user(AbstractUser):
    pass
    
class cour(models.Model):
    name= models.CharField(max_length=100)
    

