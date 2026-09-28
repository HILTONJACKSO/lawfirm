from rest_framework import viewsets
from .models import Attorney
from .serializers import AttorneySerializer

class AttorneyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Attorney.objects.all()
    serializer_class = AttorneySerializer
    lookup_field = 'slug'

    def get_queryset(self):
        queryset = super().get_queryset()
        featured = self.request.query_params.get('featured')
        if featured is not None:
            queryset = queryset.filter(featured=featured.lower() == 'true')
        return queryset
