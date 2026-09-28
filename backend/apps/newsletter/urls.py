from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsletterSubscriptionViewSet

router = DefaultRouter()
router.register(r'subscribe', NewsletterSubscriptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
