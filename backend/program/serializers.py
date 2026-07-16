from rest_framework import serializers
from .models import Itels, Course, CourseFee


class ItelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Itels
        fields = "__all__"


class CourseFeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseFee
        fields = "__all__"


class CourseSerializer(serializers.ModelSerializer):
    fees = CourseFeeSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = "__all__"