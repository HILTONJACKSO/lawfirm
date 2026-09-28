from rest_framework import serializers
from .models import BlogPost, BlogCategory
from apps.attorneys.serializers import AttorneySerializer

class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = ['id', 'name', 'slug']

class BlogPostSerializer(serializers.ModelSerializer):
    author = AttorneySerializer(read_only=True)
    category = BlogCategorySerializer(read_only=True)
    cover_image = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            'id', 'slug', 'title', 'excerpt', 'content', 
            'cover_image', 'author', 'category', 'status', 
            'published_at', 'read_time'
        ]

    def get_cover_image(self, obj):
        if obj.cover_image:
            return obj.cover_image.url
        return None
