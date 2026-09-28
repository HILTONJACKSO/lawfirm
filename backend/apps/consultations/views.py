import random
import string
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Consultation
from .serializers import ConsultationSerializer

class ConsultationViewSet(viewsets.ModelViewSet):
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Generate reference number
        ref = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        serializer.save(reference_number=f"CL-{ref}")
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
