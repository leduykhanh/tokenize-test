from rest_framework import serializers

class OrderSerializzer(serializers.Serializer):
    sum = serializers.CharField(max_length=200)
    total = serializers.CharField(max_length=200)
    size = serializers.CharField(max_length=200)
    bid = serializers.CharField(max_length=200)
