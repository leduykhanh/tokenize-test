from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Order(models.Model):
    sum = models.IntegerField(default=0)
    total = models.IntegerField(default=0)
    size = models.IntegerField(default=0)
    bid = models.IntegerField(default=0)
