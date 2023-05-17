from django.db import models
from django.conf import settings

# Create your models here.
class Movie(models.Model):
    id = models.IntegerField(primary_key=True)
    adult = models.BooleanField(default=False)
    backdrop_path = models.CharField(max_length=100, blank=True, null=True)
    
    genre_id = models.CharField(max_length=100, blank=True, null=True)
    
    original_language = models.CharField(max_length=20, blank=True, null=True)
    original_title = models.CharField(max_length=100, blank=True, null=True)
    overview = models.CharField(max_length=200, blank=True, null=True)
    popularity = models.FloatField(blank=True, null=True)
    poster_path = models.CharField(max_length=100, blank=True, null=True)
    release_date = models.DateField(blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    video = models.BooleanField(blank=True, null=True)
    vote_average = models.FloatField(blank=True, null=True)
    vote_count = models.IntegerField(blank=True, null=True)
    
class Comment(models.Model):
    Movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
