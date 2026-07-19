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


class ContactSerializer(serializers.Serializer):
    full_name = serializers.CharField(max_length=500)
    phone = serializers.CharField(max_length=20, required=False)
    email = serializers.EmailField()
    message = serializers.CharField()


class RegistrationSerializer(serializers.Serializer):
    course_country = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    gender = serializers.ChoiceField(choices=["male", "female"])
    permanent_address = serializers.CharField()
    temporary_address = serializers.CharField(required=False, allow_blank=True)
    contact_number = serializers.CharField(max_length=20)
    email = serializers.EmailField()
    dob = serializers.DateField()
    guardian = serializers.CharField(max_length=255)
    occupation_income = serializers.CharField()
    nationality = serializers.CharField(max_length=100)
    language_known = serializers.CharField()
    financial_sponsor_name = serializers.CharField(max_length=255)
    sponsor_contact = serializers.CharField(max_length=20)
    sponsor_address = serializers.CharField()
    sponsor_email = serializers.EmailField()
    academic_details = serializers.CharField()
    ielts_toefl_score = serializers.CharField(
        required=False,
        allow_blank=True
    )
    course_willing_to_study = serializers.CharField(max_length=255)
    hear_about = serializers.ChoiceField(
        choices=[
            "Advertisement",
            "Friends",
            "Internet"
        ]
    )