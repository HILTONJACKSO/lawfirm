from rest_framework import viewsets
from .models import PracticeArea
from .serializers import PracticeAreaSerializer

class PracticeAreaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PracticeArea.objects.filter(active=True)
    serializer_class = PracticeAreaSerializer
    lookup_field = 'slug'
