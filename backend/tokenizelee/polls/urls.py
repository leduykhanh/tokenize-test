from django.urls import path

from . import views

urlpatterns = [
    path('data', views.data, name='data'),
    path('', views.index, name='index'),
]
