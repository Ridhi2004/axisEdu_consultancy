from rest_framework import serializers
from .models import *


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model =Gallery
        fields='__all__'

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model= Faq
        fields='__all__'

class TestionomialSerializer(serializers.ModelSerializer):
    class Meta:
        model=Testionomial
        fields='__all__'

class LatestPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=LatestPost
        fields='__all__'

class CountrySerializer(serializers.ModelSerializer):
    flag = serializers.SerializerMethodField()

    class Meta:
        model = Country
        fields = [
            "id",
            "name",
            "code",
            "flag",
        ]

    def get_flag(self, obj):
        return f"https://flagcdn.com/w320/{obj.code.lower()}.png"


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = [
            "id",
            "name",
            "location",
            "website",
            "order",
        ]


class VisaInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisaInformation
        fields = [
            "id",
            "title",
            "description",
            "visa_type",
            "order",
        ]


class RequiredDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredDocument
        fields = [
            "id",
            "title",
            "description",
            "order",
        ]


class AbroadListSerializer(serializers.ModelSerializer):
    country = CountrySerializer()

    class Meta:
        model = Abroad
        fields = [
            "id",
            "country",
            "hero_title",
            "hero_image",
        ]


class AbroadDetailSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only=True)
    universities = UniversitySerializer(many=True, read_only=True)
    visa_information = VisaInformationSerializer(many=True, read_only=True)
    required_documents = RequiredDocumentSerializer(many=True, read_only=True)

    class Meta:
        model = Abroad
        fields = [
            "id",
            "country",
            "hero_title",
            "hero_description",
            "overview_title",
            "overview_description",
            "hero_image",
            "universities",
            "visa_information",
            "required_documents",
            "updated_at",
        ]