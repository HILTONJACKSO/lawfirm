from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PracticeAreaViewSet

router = DefaultRouter()
router.register(r'', PracticeAreaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
