from django.urls import path
from .views import TaskListCreateAPIView, TaskUpdateAPIView

urlpatterns = [
    path('tasks/', TaskListCreateAPIView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskUpdateAPIView.as_view(), name='task-update'),
]
