from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import NewsletterSubscription
from .serializers import NewsletterSubscriptionSerializer

class NewsletterSubscriptionViewSet(viewsets.ModelViewSet):
    queryset = NewsletterSubscription.objects.all()
    serializer_class = NewsletterSubscriptionSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        obj, created = NewsletterSubscription.objects.get_or_create(email=email)
        if not created and not obj.is_active:
            obj.is_active = True
            obj.save()
            return Response({"message": "Subscription re-activated"}, status=status.HTTP_200_OK)
        
        if not created:
            return Response({"message": "Already subscribed"}, status=status.HTTP_200_OK)
            
        return Response(NewsletterSubscriptionSerializer(obj).data, status=status.HTTP_201_CREATED)
