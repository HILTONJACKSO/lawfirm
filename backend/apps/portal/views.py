from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import ClientCase, ClientDocument, Invoice
from .serializers import ClientCaseSerializer, ClientDocumentSerializer, InvoiceSerializer, UserProfileSerializer

class PortalViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ClientCaseSerializer

    def get_queryset(self):
        return ClientCase.objects.filter(client=self.request.user)

    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def documents(self, request, pk=None):
        case = self.get_object()
        documents = case.documents.all()
        serializer = ClientDocumentSerializer(documents, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def invoices(self, request, pk=None):
        case = self.get_object()
        invoices = case.invoices.all()
        serializer = InvoiceSerializer(invoices, many=True)
        return Response(serializer.data)
