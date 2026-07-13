from django.db import models

# Create your models here.

class Gallery(models.Model):
    images=models.ImageField(upload_to='gallery/')

    def __str__(self):
        return 'galler image'


