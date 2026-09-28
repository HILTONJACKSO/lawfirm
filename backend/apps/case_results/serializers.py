from rest_framework import serializers
from .models import CaseResult

class CaseResultSerializer(serializers.ModelSerializer):
    practice_area_name = serializers.ReadOnlyField(source='practice_area.name')

    class Meta:
        model = CaseResult
        fields = ['id', 'title', 'practice_area', 'practice_area_name', 'outcome', 'description', 'year', 'anonymized', 'featured']
