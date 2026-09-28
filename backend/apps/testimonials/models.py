from django.db import models

class Testimonial(models.Model):
    client_name = models.CharField(max_length=200)
    case_type = models.CharField(max_length=200)
    rating = models.PositiveIntegerField()
    review = models.TextField()
    approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client_name} - {self.case_type}"
