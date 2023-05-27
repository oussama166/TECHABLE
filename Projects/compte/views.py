from django.shortcuts import render
from django.contrib.auth import get_user_model, login
from django.shortcuts import render, redirect, HttpResponse
from techLearn.views import home
from django.contrib.auth import get_user_model, login, authenticate, logout
from django.http import HttpResponse
# Create your views here.
USER= get_user_model()
def connection(request):
    if request.method == "POST":
        username= request.POST.get("name")
        email= request.POST.get("email")
        password= request.POST.get("password")
        user1= authenticate(username=username,email=email,password=password)
        if user1 :
          login(request,user1)
          return redirect('admin')
    return render(request,'connection.html',{})

def inscription(request):
  if request.method == "POST":
    username= request.POST.get("name")
    password= request.POST.get("password")
    email= request.POST.get("email")
    user=USER.objects.create_user(username=username,email=email,password=password)
    return redirect('connection')
  return render(request,'inscription.html',{})

def admin(request):
  if request.method == "POST":
      username= request.POST.get("userName")
      email= request.POST.get("UserMail")
      password= request.POST.get("currPass")
      passwordc= request.POST.get("changePass")
      user1=authenticate(username=username,email=email,password=password)
      if user1 :
          u=USER.objects.all().get(username=username)
          u.set_password(passwordc)
          u.save()   
          return redirect('connection') 
  return render(request,'admin.html',{})