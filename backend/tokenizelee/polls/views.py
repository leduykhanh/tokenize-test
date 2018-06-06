from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from .serializers import *
# Create your views here.
#
#
# class Order(object):
#     def __init__(self, sum, total, size, bid):
#         self.sum = sum
#         self.total = total
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def data(request):
    data_list = Order.objects.all()
    return JsonResponse({'data':OrderSerializzer(data_list, many=True).data})
