from django.shortcuts import render,redirect, HttpResponse
from .models import User
from datetime import datetime
from django.contrib import messages
import bcrypt

def index(request):

    return render(request,'login_app/index.html')


def register(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request,value)
        return redirect('/')
    elif request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        email = request.POST["email"]
        birthday = request.POST["birthdate"]
        password = request.POST["password"]
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        user = User.objects.create(first_name=first_name,last_name=last_name,email=email,birthday=birthday,password=pw_hash.decode())
        print(user)
        request.session['user_id'] = user.id
    return redirect ('/wall')

def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request,value)
        return redirect('/')
    elif request.method=="POST":
        user = User.objects.filter(email=request.POST['email'])
        if user:
            logged_user = user[0]
            if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
                request.session['user_id'] = logged_user.id
                print("password match")
                return redirect('/wall')
            else:
                print("failed password")
                return redirect('/')
        return redirect('/')

def logout(request):
    request.session.clear()
    return redirect('/')