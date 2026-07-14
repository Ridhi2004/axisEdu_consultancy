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
        model=LAtestPost
        fields='__all__'