from django.shortcuts import render,redirect
from django.contrib.auth import get_user_model,login
# Create your views here.
USER= get_user_model()
def connection(request):
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