from django.db import models
from apps.practice_areas.models import PracticeArea

class CaseResult(models.Model):
    title = models.CharField(max_length=300)
    practice_area = models.ForeignKey(PracticeArea, on_delete=models.SET_NULL, null=True, related_name='case_results')
    outcome = models.CharField(max_length=200)
    description = models.TextField()
    year = models.PositiveIntegerField()
    anonymized = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-year']
