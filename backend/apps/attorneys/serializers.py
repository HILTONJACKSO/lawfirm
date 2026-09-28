from rest_framework import serializers
from .models import Attorney, AttorneySpecialization, AttorneyEducation

class AttorneyEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttorneyEducation
        fields = ['degree', 'institution', 'year']

class AttorneySpecializationSerializer(serializers.ModelSerializer):
    practice_area_name = serializers.ReadOnlyField(source='practice_area.name')
    practice_area_slug = serializers.ReadOnlyField(source='practice_area.slug')

    class Meta:
        model = AttorneySpecialization
        fields = ['practice_area_name', 'practice_area_slug']

class AttorneySerializer(serializers.ModelSerializer):
    specializations = AttorneySpecializationSerializer(many=True, read_only=True)
    education = AttorneyEducationSerializer(many=True, read_only=True)
    photo = serializers.SerializerMethodField()

    class Meta:
        model = Attorney
        fields = [
            'id', 'slug', 'full_name', 'title', 'bio', 'photo', 
            'email', 'linkedin_url', 'bar_number', 'featured', 
            'specializations', 'education'
        ]

    def get_photo(self, obj):
        if obj.photo:
            return obj.photo.url
        return None
