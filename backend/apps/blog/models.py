from django.db import models
from cloudinary.models import CloudinaryField
from apps.attorneys.models import Attorney

class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    STATUS = [('draft', 'Draft'), ('published', 'Published')]
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=300)
    excerpt = models.TextField()
    content = models.TextField()
    cover_image = CloudinaryField('image')
    author = models.ForeignKey(Attorney, on_delete=models.SET_NULL, null=True, related_name='blog_posts')
    category = models.ForeignKey(BlogCategory, on_delete=models.SET_NULL, null=True, related_name='posts')
    status = models.CharField(max_length=20, choices=STATUS, default='draft')
    published_at = models.DateTimeField(null=True, blank=True)
    read_time = models.PositiveIntegerField(default=5)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-published_at']
