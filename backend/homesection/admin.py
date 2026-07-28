from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ("id", "images")


@admin.register(Testionomial)
class TestionomialAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(Faq)
class FaqAdmin(admin.ModelAdmin):
    list_display = ("id", "title")
    search_fields = ("title",)


@admin.register(LatestPost)
class LatestPostAdmin(admin.ModelAdmin):
    list_display = ("id", "title")
    search_fields = ("title",)


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "code")
    search_fields = ("name", "code")
    ordering = ("name",)


class UniversityInline(admin.TabularInline):
    model = University
    extra = 1


class VisaInformationInline(admin.TabularInline):
    model = VisaInformation
    extra = 1


class RequiredDocumentInline(admin.TabularInline):
    model = RequiredDocument
    extra = 1


@admin.register(Abroad)
class AbroadAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "country",
        "hero_title",
        "updated_at",
    )
    search_fields = (
        "country__name",
        "hero_title",
    )
    list_filter = (
        "country",
    )
    autocomplete_fields = (
        "country",
    )

    inlines = [
        UniversityInline,
        VisaInformationInline,
        RequiredDocumentInline,
    ]


@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "abroad",
        "location",
        "order",
    )
    search_fields = (
        "name",
        "location",
        "abroad__country__name",
    )
    list_filter = (
        "abroad",
    )
    ordering = ("order",)


@admin.register(VisaInformation)
class VisaInformationAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "visa_type",
        "abroad",
        "order",
    )
    search_fields = (
        "title",
        "visa_type",
        "abroad__country__name",
    )
    list_filter = (
        "abroad",
    )
    ordering = ("order",)


@admin.register(RequiredDocument)
class RequiredDocumentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "abroad",
        "order",
    )
    search_fields = (
        "title",
        "abroad__country__name",
    )
    list_filter = (
        "abroad",
    )
    ordering = ("order",)