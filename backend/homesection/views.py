from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.response import Response

from drf_spectacular.utils import extend_schema, OpenApiParameter
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


class GlobalSearchAPIView(APIView):
    @extend_schema(
        tags=["Search"],
        parameters=[
        OpenApiParameter(
            name="q",
            type=str,
        )
    ]
    )

    def get(self, request):
        query = request.GET.get("q", "").strip()

        if not query:
            return Response({
                "testimonials": [],
                "faqs": [],
                "latest_posts": [],
            })

        # Testimonials
        testimonials = Testionomial.objects.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query)
        )

        # FAQs
        faqs = Faq.objects.filter(
            Q(title__icontains=query) |
            Q(description__icontains=query)
        )

        # Latest Posts
        latest_posts = LAtestPost.objects.filter(
            Q(title__icontains=query) |
            Q(description__icontains=query)
        )

        data = {
            "testimonials": TestionomialSerializer(testimonials, many=True).data,
            "faqs": FaqSerializer(faqs, many=True).data,
            "latest_posts": LatestPostSerializer(latest_posts, many=True).data,
        }

        return Response(data)