from django.db import models
from apps.attorneys.models import Attorney
from apps.practice_areas.models import PracticeArea

class Consultation(models.Model):
    URGENCY_CHOICES = [('normal', 'Normal'), ('urgent', 'Urgent'), ('emergency', 'Emergency')]
    TYPE_CHOICES = [('in_person', 'In Person'), ('virtual', 'Virtual')]
    STATUS_CHOICES = [('pending', 'Pending'), ('confirmed', 'Confirmed'), ('completed', 'Completed'), ('cancelled', 'Cancelled')]

    reference_number = models.CharField(max_length=20, unique=True)
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    practice_area = models.ForeignKey(PracticeArea, on_delete=models.SET_NULL, null=True)
    attorney = models.ForeignKey(Attorney, on_delete=models.SET_NULL, null=True, blank=True)
    consultation_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    preferred_date = models.DateField()
    preferred_time = models.TimeField()
    case_description = models.TextField()
    urgency = models.CharField(max_length=20, choices=URGENCY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.reference_number} - {self.full_name}"
