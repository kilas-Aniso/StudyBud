from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    student_number = models.CharField(max_length=20, unique=True, blank=False)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.username
