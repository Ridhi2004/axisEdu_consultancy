from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router=DefaultRouter()
router.register("itels", ItelsViewSet)
router.register("courses", CourseViewSet)
router.register("course-fees", CourseFeeViewSet)

urlpatterns = [
    path('',include(router.urls))
]
