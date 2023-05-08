from rest_framework import serializers
from .models import *

class Get_data(serializers.Serializer):
    content1 = serializers.CharField()
    content2 = serializers.CharField()

class TextSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Text
        fields = "__all__"