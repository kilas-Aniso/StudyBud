from rest_framework import generics
from .models import StudyRequest
from .serializers import StudyRequestSerializer

class StudyRequestListCreateView(generics.ListCreateAPIView):
    queryset = StudyRequest.objects.all()
    serializer_class = StudyRequestSerializer
