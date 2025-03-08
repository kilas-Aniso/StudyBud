from django.db import models

class Resource(models.Model):
    CATEGORY_CHOICES = [
        ("Mental Health", "Mental Health"),
        ("Academic Support", "Academic Support"),
        ("Student Clubs", "Student Clubs"),
        ("Health Services", "Health Services"),
        ("Computing Services", "Computing Services"),
        ("Library Services", "Library Services"),
        ("Career Services", "Career Services"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    link = models.URLField(max_length=200)
    tags = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
