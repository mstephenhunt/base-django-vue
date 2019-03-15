from django.db import models

class Button(models.Model):
    title=models.CharField(max_length=20)
