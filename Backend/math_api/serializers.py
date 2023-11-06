from rest_framework import serializers
from .models import MathResult
from .models import User
class MathResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = MathResult
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=['id','name','email','password']
        extra_kwargs={
            'password':{'write_only':True}
        }

    def create(self,validated_data):
        password = validated_data.pop('password',None)
        isinstance=self.Meta.model(**validated_data)
        if password is not None:
            isinstance.set_password(password)
        isinstance.save()
        return isinstance
    

