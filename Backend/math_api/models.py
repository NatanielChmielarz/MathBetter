from django.db import models

class MathResult(models.Model):
    DIFFICULTY_CHOICES = (
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    )

    user_name = models.CharField(max_length=100)
    time = models.FloatField()
    difficult_level = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)

    def __str__(self):
        return f'{self.user_name} - {self.difficult_level}'
