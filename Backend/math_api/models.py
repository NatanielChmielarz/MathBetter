from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    name= models.CharField(max_length=255)
    email =models.CharField(max_length=255,unique=True)
    password = models.CharField(max_length=255)
    username=None
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

class MathResult(models.Model):
    DIFFICULTY_CHOICES = (
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    )
    user = models.ForeignKey(User,on_delete= models.CASCADE)
    time = models.FloatField()
    difficult_level = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)

