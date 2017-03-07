from .models import Book, Publisher, Author
from .serializers import PublisherSerializer, AuthorSerializer, BookSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions


class PublisherViewSet(ModelViewSet):
    serializer_class = PublisherSerializer
    queryset = Publisher.objects.all()
    permission_classes = (permissions.IsAuthenticated,)


class AuthorViewSet(ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()
    permission_classes = (permissions.IsAuthenticated,)


class BookViewSet(ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
