from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router=DefaultRouter()
router.register(r'gallery',GalleryViewSet,basename='gallery')
router.register(r'faq',FaqViewSet,basename='faq')
router.register(r'latestpost',LatestPostViewSet,basename='latestpost')
router.register(r'testonomial',TestonomialaViewSet,basename='testonomial')

urlpatterns = [
path('',include(router.urls))
]
