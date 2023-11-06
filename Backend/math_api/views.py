from rest_framework import generics
from .models import MathResult
from .serializers import MathResultSerializer
<<<<<<< Updated upstream

=======
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime
from rest_framework import status
>>>>>>> Stashed changes
class MathResultListCreateView(generics.ListCreateAPIView):
    queryset = MathResult.objects.all()
    serializer_class = MathResultSerializer

    def get_queryset(self):
        difficult_level = self.request.query_params.get('difficulty')
        if difficult_level:
            return MathResult.objects.filter(difficult_level=difficult_level)[:10]
<<<<<<< Updated upstream
        return MathResult.objects.all()[:10]
=======
        return MathResult.objects.all()[:10]
    
class AddResultView(APIView):
     def post(self,request):
        serializer =MathResultSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
     

class RegisterView(APIView):
    def post(self,request):
        serializer =UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('User not found!')
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.data = {"token": token}
        return response

class UserView(APIView):
    def get(self, request):
        token = request.META.get('HTTP_AUTHORIZATION')

        if not token:
            raise AuthenticationFailed('Unauthenticated')

        try:
            # Usuń prefiks "Bearer " z tokenu
            token = token.split(' ')[1]
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')
        
        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        results = MathResult.objects.filter(user=user)
        serializer2 = MathResultSerializer(results, many=True)
        
        # Tworzymy odpowiedź z danymi użytkownika i wynikami
        response_data = {
            "user": serializer.data,
            "results": serializer2.data
        }
        return Response(response_data)
    

    

class BestResultView(APIView):
    def get(self, request):
        best_results = {}

        # Iteruj przez różne poziomy trudności
        for difficulty in MathResult.DIFFICULTY_CHOICES:
            difficulty_name, _ = difficulty  # Pobierz nazwę poziomu trudności
            best_results[difficulty_name] = []

            # Znajdź 10 najlepszych wyników dla danego poziomu trudności
            best_results_queryset = MathResult.objects.filter(difficult_level=difficulty_name).order_by('time')[:10]

            for result in best_results_queryset:
                user_data = UserSerializer(result.user).data
                result_data = MathResultSerializer(result).data
                best_results[difficulty_name].append((result_data, user_data))

        return Response(best_results)
        
    
class ChangePasswordView(APIView):
    def put(self, request):
        token = request.META.get('HTTP_AUTHORIZATION')

        if not token:
            raise AuthenticationFailed('Unauthenticated')

        try:
            # Usuń prefiks "Bearer " z tokenu
            token = token.split(' ')[1]
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')
        
        user = User.objects.filter(id=payload['id']).first()

        # Sprawdzamy poprawność starego hasła
        old_password = request.data.get('old_password')
        if not user.check_password(old_password):
            return Response({'detail': 'Stare hasło jest niepoprawne'}, status=status.HTTP_400_BAD_REQUEST)

        # Pobieramy nowe hasło i zapisujemy je
        new_password = request.data.get('new_password')
        user.set_password(new_password)
        user.save()

        return Response({'detail': 'Hasło zostało zmienione'}, status=status.HTTP_200_OK)
>>>>>>> Stashed changes
