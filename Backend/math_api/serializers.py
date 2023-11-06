from rest_framework import serializers
from .models import MathResult

class MathResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = MathResult
        fields = '__all__'