from django.db import models
from cloudinary.models import CloudinaryField

class Attorney(models.Model):
    slug = models.SlugField(unique=True)
    full_name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    bio = models.TextField()
    photo = CloudinaryField('photo')
    email = models.EmailField()
    linkedin_url = models.URLField(blank=True)
    bar_number = models.CharField(max_length=100)
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

    class Meta:
        ordering = ['order', 'full_name']

class AttorneySpecialization(models.Model):
    attorney = models.ForeignKey(Attorney, related_name='specializations', on_delete=models.CASCADE)
    practice_area = models.ForeignKey('practice_areas.PracticeArea', on_delete=models.CASCADE, related_name='specialized_attorneys')

    def __str__(self):
        return f"{self.attorney.full_name} - {self.practice_area.name}"

class AttorneyEducation(models.Model):
    attorney = models.ForeignKey(Attorney, related_name='education', on_delete=models.CASCADE)
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    year = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.degree} at {self.institution} ({self.year})"
