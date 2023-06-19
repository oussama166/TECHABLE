from django.db import models
from django.contrib.auth.models import AbstractUser

class user(AbstractUser):
    pass
        
class cour(models.Model):
    name= models.CharField(max_length=100, primary_key=True)
    slug= models.SlugField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()
    diff=models.CharField(max_length=100)

class Video_cour(models.Model):
    type=models.CharField(max_length=100,primary_key=True)
    title1 = models.CharField(max_length=100)
    description1 = models.TextField()
    video1 = models.FileField(upload_to='videos/')
    title2 = models.CharField(max_length=100)
    description2 = models.TextField()
    video2 = models.FileField(upload_to='videos/')
    title3 = models.CharField(max_length=100)
    description3 = models.TextField()
    video3= models.FileField(upload_to='videos/')
    title4 = models.CharField(max_length=100)
    description4 = models.TextField()
    video4 = models.FileField(upload_to='videos/')
    title5 = models.CharField(max_length=100)
    description5 = models.TextField()
    video5 = models.FileField(upload_to='videos/')
    name_all = models.ForeignKey(cour, on_delete=models.CASCADE)