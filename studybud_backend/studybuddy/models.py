from django.db import models
from user.models import User

class StudyRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="study_requests")
    subject = models.CharField(max_length=255)
    description = models.TextField()
    availability = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} - {self.user.username}"
