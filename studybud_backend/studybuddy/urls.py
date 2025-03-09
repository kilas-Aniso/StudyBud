from django.urls import path
from .views import StudyRequestListCreateView

urlpatterns = [
    path('', StudyRequestListCreateView.as_view(), name="studybuddy-list-create"),
]
