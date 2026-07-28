from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router=DefaultRouter()
router.register(r'gallery',GalleryViewSet,basename='gallery')
router.register(r'faq',FaqViewSet,basename='faq')
router.register(r'latestpost',LatestPostViewSet,basename='latestpost')
router.register(r'testonomial',TestonomialaViewSet,basename='testonomial')
router.register(r"country", CountryViewSet, basename="country"),
router.register(r"abroad", AbroadViewSet, basename="abroad")

urlpatterns = [
path("search/", GlobalSearchAPIView.as_view(), name="global-search"),
path('',include(router.urls))
]
