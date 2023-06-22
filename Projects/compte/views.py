from django.shortcuts import render
from django.contrib.auth import get_user_model, login
from django.shortcuts import render, redirect, HttpResponse,get_object_or_404
from techLearn.views import home
from django.contrib.auth import get_user_model, login, authenticate, logout
from django.http import HttpResponse
from .models import cour,Video_cour
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
          return redirect('homeu')
    return render(request,'connection.html',{})

def inscription(request):
  if request.method == "POST":
    username= request.POST.get("name")
    password= request.POST.get("password")
    email= request.POST.get("email")
    em=str(email)
    em1=em.split("@")
    em2=em1[1]
    if em2=="teach.com" or em2=="edu.com":
      user=USER.objects.create_user(username=username,email=email,password=password)
      return redirect('connection')
  return render(request,'inscription.html',{})

def admin(request):
  cours=cour.objects.all()
  if request.method == "POST":
      username= request.POST.get("userName")
      email= request.POST.get("UserMail")
      password= request.POST.get("currPass")
      passwordc= request.POST.get("changePass")
      tcour=request.POST.get("coursTitle")
      pcour=request.POST.get("coursPrice")
      dcour=request.POST.get("coursDifficlty")
      Ncour=request.POST.get("coursSections")
      tv1=request.POST.get("sectionCoursTitle1")
      dv1=request.POST.get("sectionCoursDescription1")
      v1=request.FILES['file1']
      tv2=request.POST.get("sectionCoursTitle2")
      dv2=request.POST.get("sectionCoursDescription2")
      tv3=request.POST.get("sectionCoursTitle3")
      dv3=request.POST.get("sectionCoursDescription3")
      tv4=request.POST.get("sectionCoursTitle4")
      dv4=request.POST.get("sectionCoursDescription4")
      tv5=request.POST.get("sectionCoursTitle5")
      dv5=request.POST.get("sectionCoursDescription5")
      nc=str(Ncour)
      cour1=cour(name=tcour,slug=tcour,price=pcour,diff=dcour)
      cour1.save()
      if nc=="1":
        vd=Video_cour(type=dcour,title1=tv1,description1=dv1,video1=v1,name_all_id=tcour)
        vd.save()
      elif nc=="2":
        v2=request.FILES['file2']
        vd=Video_cour(type=dcour,title1=tv1,description1=dv1,video1=v1,title2=tv2,description2=dv2,video2=v2,name_all_id=tcour)
        vd.save()
      elif nc=="3":
        v2=request.FILES['file2']
        v3=request.FILES['file3']
        vd=Video_cour(type=dcour,title1=tv1,description1=dv1,video1=v1,title2=tv2,description2=dv2,video2=v2,title3=tv3,description3=dv3,video3=v3,name_all_id=tcour)
        vd.save()
      elif nc=="4":
        v2=request.FILES['file2']
        v3=request.FILES['file3']
        v4=request.FILES['file4']
        vd=Video_cour(type=dcour,title1=tv1,description1=dv1,video1=v1,title2=tv2,description2=dv2,video2=v2,title3=tv3,description3=dv3,video3=v3,title4=tv4,description4=dv4,video4=v4,name_all_id=tcour)
        vd.save()
      elif nc == "5":
        v2=request.FILES['file2']
        v3=request.FILES['file3']
        v4=request.FILES['file4']
        v5=request.FILES['file5']
        vd=Video_cour(type=dcour,title1=tv1,description1=dv1,video1=v1,title2=tv2,description2=dv2,video2=v2,title3=tv3,description3=dv3,video3=v3,title4=tv4,description4=dv4,video4=v4,title5=tv5,description5=dv5,video5=v5,name_all_id=tcour)
        vd.save()
      else:
        user1=authenticate(username=username,email=email,password=password)
      if user1 :
          u=USER.objects.all().get(username=username)
          u.set_password(passwordc)
          u.save()   
          return redirect('connection') 
  return render(request,'admin.html',context={"cour":cours})
def cours(request,slug):
  cour1= get_object_or_404(Video_cour,name_all=slug)
  return render(request,'watch.html',context={"cour":cour1})
