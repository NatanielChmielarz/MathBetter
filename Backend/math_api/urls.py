from django.urls import path

from django.conf.urls.static import static
from rest_framework_swagger.views import get_swagger_view
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.conf import settings

schema_view = get_schema_view(
    openapi.Info(
        title="Episyche Technologies",
        default_version='v1',),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
from .views import RegisterView,LoginView,AddResultView,UserView,BestResultView,ChangePasswordView
urlpatterns = [
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0),name='schema-swagger-ui'),
    path('register/', RegisterView.as_view()),
    path('login/',LoginView.as_view()),
    path('AddResult/',AddResultView.as_view()),
    path('user/', UserView.as_view()),
    path('BestResults/',BestResultView.as_view()),
    path('ChangePassword/',ChangePasswordView.as_view())

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)