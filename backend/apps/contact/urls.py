from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactSubmissionViewSet

router = DefaultRouter()
router.register(r'submit', ContactSubmissionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
