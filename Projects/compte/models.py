from django.db import models
from django.contrib.auth.models import AbstractUser

class user(AbstractUser):
    pass
    
# class cour(models.Model):
#     name= models.CharField(max_length=100)
#     description = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     price = models.FloatField()



class cour(models.Model):
    name= models.CharField(max_length=100, primary_key=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()