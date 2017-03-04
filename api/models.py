from django.db import models


# Create your models here.
class Author(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)

    def __str__(self):
        return "{0}, {1}".format(self.last_name, self.first_name)


class Publisher(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return "{0}".format(self.name)


class Book(models.Model):
    title = models.CharField(max_length=100)
    isbn = models.CharField(max_length=15)
    publish_year = models.CharField(max_length=4)
    publisher = models.ForeignKey(Publisher, related_name="books")
    author = models.ForeignKey(Author, related_name="books")

    def __str__(self):
        return "{0}, {1}, {2}".format(self.title, self.author, self.publish_year)
