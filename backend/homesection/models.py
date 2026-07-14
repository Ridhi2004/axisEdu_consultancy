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