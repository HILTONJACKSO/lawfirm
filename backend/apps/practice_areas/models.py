from django.db import models

class PracticeArea(models.Model):
    slug = models.SlugField(unique=True)
    name = models.CharField(max_length=200)
    icon = models.CharField(max_length=100)
    short_description = models.TextField()
    full_description = models.TextField()
    category = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order', 'name']

class WhatWeHandle(models.Model):
    practice_area = models.ForeignKey(PracticeArea, related_name='handles', on_delete=models.CASCADE)
    item = models.CharField(max_length=300)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.item

    class Meta:
        ordering = ['order']
