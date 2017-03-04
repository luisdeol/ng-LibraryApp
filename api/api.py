from .models import Book, Publisher, Author
from .serializers import BookSerializer, PublisherSerializer, AuthorSerializer
from rest_framework.viewsets import ModelViewSet


class PublisherViewSet(ModelViewSet):
    serializer_class = PublisherSerializer
    queryset = Publisher.objects.all()


class AuthorViewSet(ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()


class BookViewSet(ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
