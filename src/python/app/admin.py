from django.contrib import admin

from .models import Text

class TextAdmin(admin.ModelAdmin):
    list_display = ("id", "content", "symbol_number", "word_number", "sentence_number", "most_used_word", "user")
    search_fields = ('id', "symbol_number", "word_number", "sentence_number")

admin.site.register(Text, TextAdmin)
# Register your models here.
