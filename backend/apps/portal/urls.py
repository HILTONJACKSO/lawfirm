from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PortalViewSet

router = DefaultRouter()
router.register(r'', PortalViewSet, basename='portal')

urlpatterns = [
    path('', include(router.urls)),
]
