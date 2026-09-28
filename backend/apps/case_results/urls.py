from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CaseResultViewSet

router = DefaultRouter()
router.register(r'', CaseResultViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
