from rest_framework import routers

from backend.views import ButtonViewSet

router = routers.DefaultRouter()
router.register('buttons', ButtonViewSet)
