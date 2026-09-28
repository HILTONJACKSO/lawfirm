from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/attorneys/', include('apps.attorneys.urls')),
    path('api/v1/practice-areas/', include('apps.practice_areas.urls')),
    path('api/v1/blog/', include('apps.blog.urls')),
    path('api/v1/consultations/', include('apps.consultations.urls')),
    path('api/v1/case-results/', include('apps.case_results.urls')),
    path('api/v1/testimonials/', include('apps.testimonials.urls')),
    path('api/v1/portal/', include('apps.portal.urls')),
    path('api/v1/contact/', include('apps.contact.urls')),
    path('api/v1/newsletter/', include('apps.newsletter.urls')),
]
