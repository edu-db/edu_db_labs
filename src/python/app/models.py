from django.contrib.auth.models import User
from django.db import models

class Text(models.Model):
    content = models.TextField(verbose_name='Контент')
    symbol_number = models.IntegerField(verbose_name='Кількість символів')
    word_number = models.IntegerField(verbose_name='Кількість слів')
    sentence_number = models.IntegerField(verbose_name='Кількість речень')
    most_used_word = models.CharField(max_length=25, verbose_name="Найчастіше використовуване слово")
    user = models.ForeignKey(User, verbose_name='Користувач', on_delete=models.CASCADE)

    def __str__(self):
        return self.content

    class Meta:
        verbose_name = "Текст"
        verbose_name_plural = "Тексти"
        ordering = ["id", "content"]

# Create your models here.
