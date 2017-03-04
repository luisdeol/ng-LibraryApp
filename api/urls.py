from .api import BookViewSet, AuthorViewSet, PublisherViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'authors', AuthorViewSet)
router.register(r'publishers', PublisherViewSet)

urlpatterns = router.urls
