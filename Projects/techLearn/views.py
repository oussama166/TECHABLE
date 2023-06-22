from django.shortcuts import render,redirect
from compte.models import cour
# Create your views here.
def home(request):
  cours=cour.objects.all()
  return render(request,'home.html',context={"cour":cours})
def homeu(request):
  cours=cour.objects.all()
  return render(request,'userHome.html',context={"cour":cours})