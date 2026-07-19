from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.core.mail import send_mail
from django.conf import settings
from drf_spectacular.utils import extend_schema, OpenApiParameter,OpenApiResponse
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

@extend_schema(tags=["Contact Us "])
class ContactUsView(APIView):

    @extend_schema(
        request=ContactSerializer,
        responses={
            200: OpenApiResponse(
                response=None,
                description="Message sent successfully"
            ),
            400: OpenApiResponse(
                description="Validation error"
            ),
        },
        summary="Contact Us",
        description="Send a contact inquiry from the website."
    )

    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            data = serializer.validated_data

            email_body = f"""
🚀 New Contact Inquiry Received

----------------------------------------
Full Name : {data['full_name']}
Email     : {data['email']}
Phone     : {data.get('phone', 'N/A')}
Message   :
{data['message']}
----------------------------------------
Source    : Website Contact Form
"""

            msg = EmailMessage(
                subject=f"New Contact Inquiry - {data['full_name']}",
                body=email_body,
                from_email=settings.EMAIL_HOST_USER,
                to=[settings.EMAIL_HOST_USER],
                reply_to=[data['email']],
            )

            msg.send(fail_silently=False)

            return Response(
                {"message": "Message sent successfully"},
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@extend_schema(tags=[" Registration "])

@extend_schema(
    request=RegistrationSerializer,
    responses={200: None}
)
class RegistrationView(APIView):

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)

        if serializer.is_valid():
            data = serializer.validated_data

            email_body = f"""
🎓 New Online Registration Received

------------------------------------------
Course / Country:
{data['course_country']}

Name:
{data['name']}

Gender:
{data['gender']}

Permanent Address:
{data['permanent_address']}

Temporary Address:
{data['temporary_address']}

Contact Number:
{data['contact_number']}

Email:
{data['email']}

Date of Birth:
{data['dob']}

Guardian:
{data['guardian']}

Occupation / Annual Income:
{data['occupation_income']}

Nationality:
{data['nationality']}

Language Known:
{data['language_known']}

Financial Sponsor Name:
{data['financial_sponsor_name']}

Sponsor Contact:
{data['sponsor_contact']}

Sponsor Address:
{data['sponsor_address']}

Sponsor Email:
{data['sponsor_email']}

Academic Details:
{data['academic_details']}

IELTS / TOEFL Score:
{data['ielts_toefl_score']}

Course Willing To Study:
{data['course_willing_to_study']}

Heard About Axis From:
{data['hear_about']}
"""

            send_mail(
                subject="New Online Registration",
                message=email_body,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[
                    "admission@axiseducation.com"
                ],
                fail_silently=False,
            )

            return Response(
                {
                    "success": True,
                    "message": "Application submitted successfully."
                },
                status=status.HTTP_200_OK,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )