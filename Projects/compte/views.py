from django.shortcuts import render
from django.contrib.auth import get_user_model, login
from django.shortcuts import render, redirect, HttpResponse
from techLearn.views import home
from django.contrib.auth import get_user_model, login, authenticate, logout
from compte.models import utilisateur
# Create your views here.
USER = get_user_model()


def connection(request):
    if request.method == "POST":
        username = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")
        if utilisateur.objects.filter(nameU=username, emailU=email, passwordU=password).exists():
            us = username
            em = email
            return render(request, 'admin.html', {"username": us, "email": em})


def inscription(request):
    if request.method == "POST":
        username = request.POST.get("name")
        password = request.POST.get("password")
        email = request.POST.get("email")
        u = utilisateur(nameU=username, emailU=email, passwordU=password)
        u.save()
        return render(request, 'connection.html', {})
    return render(request, 'inscription.html', {})


def Admin(request):
    if request.method == "POST":
        username= request.POST.get("userName")
        email= request.POST.get("UserMail")
        password= request.POST.get("currPass")
        passwordc= request.POST.get("changePass")
        if utilisateur.objects.filter(nameU=username,emailU=email,passwordU=password).exists() :
            u=utilisateur.objects.all()[1]
            u.passwordU='444'
            u.save()
            print('lldldldlldl')
            return render(request, 'connection.html', {})
        return render(request, 'admin.html', {})
