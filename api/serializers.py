from rest_framework import serializers
from .models import Book, Publisher, Author


class BookSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.get_fullname')
    publisher = serializers.CharField(source='publisher.name')

    class Meta:
        model = Book
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    books = BookSerializer(read_only=True, many=True)

    class Meta:
        model = Author
        fields = '__all__'


class PublisherSerializer(serializers.ModelSerializer):
    books = BookSerializer(read_only=True, many=True)

    class Meta:
        model = Publisher
        fields = '__all__'
