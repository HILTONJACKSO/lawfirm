from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AttorneyViewSet

router = DefaultRouter()
router.register(r'', AttorneyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
