from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ClientCase, ClientDocument, Invoice

class ClientDocumentSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = ClientDocument
        fields = ['id', 'name', 'file', 'doc_type', 'uploaded_at']

    def get_file(self, obj):
        if obj.file:
            return obj.file.url
        return None

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = ['id', 'amount', 'currency', 'status', 'due_date', 'issued_at']

class ClientCaseSerializer(serializers.ModelSerializer):
    attorney_name = serializers.ReadOnlyField(source='attorney.full_name')
    documents = ClientDocumentSerializer(many=True, read_only=True)
    invoices = InvoiceSerializer(many=True, read_only=True)

    class Meta:
        model = ClientCase
        fields = ['id', 'title', 'status', 'opened_at', 'attorney_name', 'documents', 'invoices']

class UserProfileSerializer(serializers.ModelSerializer):
    cases = ClientCaseSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'cases', 'is_superuser', 'is_staff']
