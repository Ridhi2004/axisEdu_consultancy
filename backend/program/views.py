from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema, OpenApiParameter
from .models import *
from .serializers import *

# Create your views here.
@extend_schema(tags=["Itels"])
class ItelsViewSet(ModelViewSet):
    queryset=Itels.objects.all()
    serializer_class=ItelsSerializer


@extend_schema(tags=["Course"])
class CourseViewSet(ModelViewSet):
    queryset=Course.objects.all()
    serializer_class=CourseSerializer


@extend_schema(tags=["Fees"])
class CourseFeeViewSet(ModelViewSet):
    queryset = CourseFee.objects.all()
    serializer_class = CourseFeeSerializer