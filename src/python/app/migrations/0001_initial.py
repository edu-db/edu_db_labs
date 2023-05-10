# Generated by Django 4.1.7 on 2023-03-11 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Text',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('symbol_number', models.IntegerField()),
                ('word_number', models.IntegerField()),
                ('sentence_number', models.IntegerField()),
                ('most_used_word', models.CharField(max_length=25)),
            ],
        ),
    ]
