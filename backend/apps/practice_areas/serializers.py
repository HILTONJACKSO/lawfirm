from rest_framework import serializers
from .models import PracticeArea, WhatWeHandle

class WhatWeHandleSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatWeHandle
        fields = ['item', 'order']

class PracticeAreaSerializer(serializers.ModelSerializer):
    handles = WhatWeHandleSerializer(many=True, read_only=True)

    class Meta:
        model = PracticeArea
        fields = [
            'id', 'slug', 'name', 'icon', 'short_description', 
            'full_description', 'category', 'order', 'handles'
        ]
