from django.db import models

# Create your models here.
class Itels(models.Model):
    title=models.CharField(max_length=250,blank=True)
    description=models.TextField()
    reading=models.CharField(max_length=250,blank=True)
    writing=models.CharField(max_length=250,blank=True)
    listening=models.CharField(max_length=250,blank=True)
    speaking=models.CharField(max_length=250,blank=True)
    exam_fee=models.CharField(max_length=250,blank=True)
    fee_at_axis=models.CharField(max_length=250,blank=True)
    class_duration=models.CharField(max_length=250,blank=True)  

    def __str__(self):
        return self.title
    



class CourseCategory(models.TextChoices):
    GENERAL = "general", "General English"
    SPECIAL = "special", "Special English"


class Course(models.Model):

    name = models.CharField(max_length=100)
    category = models.CharField(
        max_length=20,
        choices=CourseCategory.choices,
        default=CourseCategory.GENERAL,
    )
    tagline = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=100)
    class_time = models.CharField(max_length=150)
    order = models.PositiveSmallIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.name


class CourseFee(models.Model):

    course = models.ForeignKey(Course, related_name="fees", on_delete=models.CASCADE)
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.course.name} — {self.label}: {self.value}"


