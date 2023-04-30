from django.shortcuts import render

# Create your views here.
def connection(request):
  return render(request,'connection.html',{})

def inscription(request):
  return render(request,'inscription.html',{})