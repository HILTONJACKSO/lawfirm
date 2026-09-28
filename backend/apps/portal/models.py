from django.db import models
from django.contrib.auth.models import User
from apps.attorneys.models import Attorney
from cloudinary.models import CloudinaryField

class ClientCase(models.Model):
    STATUS = [('active', 'Active'), ('pending', 'Pending'), ('closed', 'Closed'), ('on_hold', 'On Hold')]
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cases')
    attorney = models.ForeignKey(Attorney, on_delete=models.SET_NULL, null=True, related_name='assigned_cases')
    title = models.CharField(max_length=300)
    status = models.CharField(max_length=20, choices=STATUS, default='active')
    opened_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return self.title

class ClientDocument(models.Model):
    case = models.ForeignKey(ClientCase, on_delete=models.CASCADE, related_name='documents')
    name = models.CharField(max_length=200)
    file = CloudinaryField('document', resource_type='raw')
    doc_type = models.CharField(max_length=100)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Invoice(models.Model):
    STATUS = [('paid', 'Paid'), ('unpaid', 'Unpaid'), ('overdue', 'Overdue')]
    case = models.ForeignKey(ClientCase, on_delete=models.CASCADE, related_name='invoices')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default='USD')
    status = models.CharField(max_length=20, choices=STATUS, default='unpaid')
    due_date = models.DateField()
    issued_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Invoice {self.id} - {self.case.title}"
