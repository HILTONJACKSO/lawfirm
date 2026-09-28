from django.db import models

class ContactSubmission(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    subject = models.CharField(max_length=300)
    practice_area = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    preferred_contact = models.CharField(max_length=20)
    urgency = models.CharField(max_length=20, default='normal')
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} from {self.full_name}"
