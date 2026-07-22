from django.db import models

# Create your models here.

class Gallery(models.Model):
    images=models.ImageField(upload_to='gallery/')

    def __str__(self):
        return 'gallery image'


class Testionomial(models.Model):
    name=models.CharField(max_length=250,blank=True)
    image=models.ImageField(upload_to='testionomial/')
    description=models.TextField()
    
    def __str__(self):
        return self.name
    
class Faq(models.Model):
    title=models.TextField(blank=True)
    description=models.TextField(blank=True)

    def __str__(self):
        return self.title
    
class LAtestPost(models.Model):
    title=models.CharField(max_length=500,blank=True)
    description=models.TextField()

    def __str__(self):
        return self.title


class Country(models.Model):
    """A study-abroad destination, e.g. Australia, USA, UK."""
    name = models.CharField(max_length=100, unique=True)
    code = models.CharField(
        max_length=2,
        help_text="ISO 3166-1 alpha-2 country code, e.g. AU, US, GB",
    )

    def __str__(self):
        return self.name
    

class Abroad(models.Model):
    country = models.OneToOneField(
        Country,
        on_delete=models.CASCADE,
        related_name="abroad"
    )

    # Hero Section
    hero_title = models.CharField(max_length=255)
    hero_description = models.TextField()
  
    # Overview
    overview_title = models.CharField(max_length=255)
    overview_description = models.TextField()
    hero_image = models.ImageField(
        upload_to="abroad/",
        blank=True,
        null=True
    )


  
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.country.name



class University(models.Model):
    abroad = models.ForeignKey(
        Abroad,
        on_delete=models.CASCADE,
        related_name="universities"
    )

    name = models.CharField(max_length=255)
    location=models.CharField(max_length=250,blank=True)
    website = models.URLField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name




class VisaInformation(models.Model):
    abroad = models.ForeignKey(
        Abroad,
        on_delete=models.CASCADE,
        related_name="visa_information"
    )

    title = models.CharField(max_length=255)
    description = models.TextField()
    visa_type=models.CharField(max_length=250,blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title


class RequiredDocument(models.Model):
    abroad = models.ForeignKey(
        Abroad,
        on_delete=models.CASCADE,
        related_name="required_documents"
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title