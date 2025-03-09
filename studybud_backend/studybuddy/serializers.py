from rest_framework import serializers
from .models import StudyRequest

class StudyRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyRequest
        fields = '__all__'
