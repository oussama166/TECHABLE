from django.shortcuts import render
from django.contrib.auth import get_user_model,login
from django.shortcuts import render,redirect
from techLearn.views import home
from django.contrib.auth import get_user_model,login,authenticate,logout
from compte.models import utilisateur
# Create your views here.
def connection(request):
    if request.method == "POST":
        username= request.POST.get("name")
        email= request.POST.get("email")
        password= request.POST.get("password")
        if utilisateur.objects.filter(nameU=username,emailU=email,passwordU=password).exists() :
          us=username
          em=email
          return render(request,'admin.html',{"username":us,"email":em})
    return render(request,'connection.html',{})

def inscription(request):
  if request.method == "POST":
    username= request.POST.get("name")
    password= request.POST.get("password")
    email= request.POST.get("email")
    u=utilisateur(nameU=username,emailU=email,passwordU=password)
    u.save()
    return render(request,'connection.html',{})
  return render(request,'inscription.html',{})

def admin(request):
    if request.method == "POST":
        username= request.POST.get("userName")
        email= request.POST.get("UserMail")
        password= request.POST.get("currPass")
        passwordc= request.POST.get("changePass")
        if utilisateur.objects.filter(nameU=username,emailU=email,passwordU=password).exists() :
          u=utilisateur.objects.all().get(nameU='abdo mendoubi')
          print(u)
          # u.passwordU='222'
          # u.save()          
          return render(request,'connection.html',{})
    return render(request,'admin.html',{})