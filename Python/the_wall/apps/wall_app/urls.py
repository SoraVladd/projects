from django.urls import path
from . import views
                    
urlpatterns = [
    path('', views.wall),
    path('postMessage/',views.postMessage),
    path('postComment/',views.postComment),
    path('destroy/<id>/', views.deleteMessage),
] 