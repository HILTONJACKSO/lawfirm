from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import CaseResult
from .serializers import CaseResultSerializer

class CaseResultViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CaseResult.objects.all()
    serializer_class = CaseResultSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['practice_area__slug', 'featured']
