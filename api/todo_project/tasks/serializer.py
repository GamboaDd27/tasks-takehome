from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

    def validate_name(self, value):
        # Evitar nombres vacíos o solo espacios
        if not value.strip():
            raise serializers.ValidationError("El nombre de la tarea no puede estar vacío.")
        return value
