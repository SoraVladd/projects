from django.shortcuts import render,redirect, HttpResponse
from .models import User,Message,Comment
from datetime import datetime
from django.contrib import messages

def wall(request):
    if 'user_id' in request.session:
        user = User.objects.get(id=request.session['user_id'])
        message = Message.objects.all().order_by("-created_at")
        context = {
            "user": user,
            "all_the_messages": message,
        }
    else:
        return redirect('/')
    return render(request,'wall_app/wall.html',context)

def postMessage(request):
    if 'user_id' in request.session:
        if request.method=="POST":
            wall_message = request.POST["wall_message"]
            user = User.objects.get(id=request.session['user_id'])
            Message.objects.create(message=wall_message,user=user)
    return redirect('/wall')

def postComment(request):
    if 'user_id' in request.session:
        if request.method=="POST":
            wall_comment = request.POST["wall_comment"]
            user = User.objects.get(id=request.session['user_id'])
            wall_message = Message.objects.get(id=request.POST["m_id"])
            Comment.objects.create(comment=wall_comment,message=wall_message,user=user)
    return redirect('/wall')

def deleteMessage(request,id):
    if 'user_id' in request.session:
        if request.method == "GET":
            Message.objects.get(id=id).delete()
        return redirect('/wall')