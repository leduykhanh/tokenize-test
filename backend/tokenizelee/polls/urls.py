from django.urls import path

from . import views

urlpatterns = [
    path('data', views.data, name='data'),
    path('add_order', views.add_order, name='add_order'),
    path('', views.index, name='index'),
]
