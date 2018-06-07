from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
import json
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
    data_list = Order.objects.order_by('-bid')
    return JsonResponse({'data':OrderSerializzer(data_list, many=True).data})

@csrf_exempt
def add_order(request):
    data = json.loads(request.body.decode('utf-8'))
    order = Order(sum=data.get("unit"), bid=data.get("bid"),size=data.get("unit"),total=data.get("unit") * data.get("bid"))
    order.save()
    data_list = Order.objects.order_by('-bid')
    return JsonResponse({'data':OrderSerializzer(data_list, many=True).data})
