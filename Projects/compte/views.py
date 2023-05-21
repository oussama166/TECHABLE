from django.shortcuts import render
from django.contrib.auth import get_user_model,login
from django.shortcuts import render,redirect
from techLearn.views import home
from django.contrib.auth import get_user_model,login,authenticate,logout
# Create your views here.
USER= get_user_model()
def connection(request):
    if request.method == "POST":
        username= request.POST.get("name")
        email= request.POST.get("email")
        password= request.POST.get("password")
        user1= authenticate( username=username,email=email,password=password)
        if user1:
          return render(request,'inscription.html',{})

    return render(request,'connection.html',{})

def inscription(request):
  if request.method == "POST":
    username= request.POST.get("name")
    password= request.POST.get("password")
    email= request.POST.get("email")
    user=USER.objects.create_user(
      username=username,
      password=password,
      email=email
    )
    login(request,user)
    return render(request,'connection.html',{})
  return render(request,'inscription.html',{})

def admin(request):
  return render(request,'admin.html',{})