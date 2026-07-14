from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema
from .models import *
from .serializers import *

# Create your views here.

@extend_schema(tags=["Gallery"])
class GalleryViewSet(ModelViewSet):
    queryset=Gallery.objects.all()
    serializer_class=GallerySerializer

@extend_schema(tags=["FAQ"])
class FaqViewSet(ModelViewSet):
    queryset=Faq.objects.all()
    serializer_class=FaqSerializer

@extend_schema(tags=["Testonomial"])
class TestonomialaViewSet(ModelViewSet):
    queryset=Testionomial.objects.all()
    serializer_class=TestionomialSerializer


@extend_schema(tags=["Latest Post"])
class LatestPostViewSet(ModelViewSet):
    queryset=LAtestPost.objects.all()
    serializer_class=LatestPostSerializer

