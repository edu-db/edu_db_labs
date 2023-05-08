# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: aapp
-- ------------------------------------------------------
-- Server version	8.0.31

DROP SCHEMA IF EXISTS aapp;
CREATE SCHEMA aapp;
USE aapp;

--
-- Table structure for table `app_text`
--

DROP TABLE IF EXISTS `app_text`;
CREATE TABLE `app_text` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `symbol_number` int NOT NULL,
  `word_number` int NOT NULL,
  `sentence_number` int NOT NULL,
  `most_used_word` varchar(25) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_text_user_id_767ad96a_fk_auth_user_id` (`user_id`),
  CONSTRAINT `app_text_user_id_767ad96a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `app_text`
--

LOCK TABLES `app_text` WRITE;
INSERT INTO `app_text` VALUES (1,'A text is a passage of words that conveys a set of meanings to the person who is reading it. It’s a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.',12,12,12,'a',1),(2,'I need to migrate my db from sqlite to mysql, and the various tools/scripts out there are too many for me to easily spot the safest and most elegant solution.\r\n\r\nThis seemed to me nice http://djangosnippets.org/snippets/14/ but appears to be 3 years since getting an update which is worrying..\r\n\r\nCan you recommend a solution that is known to be reliable with Django 1.1.1 ?',34,34,34,'I',1),(3,'sdfsdfsdf',6,4,4,'sdf',1),(4,'There were quite a few long nights, long weeks and even long weekends full of cloud rendering but I couldn’t have been prouder of what my team and Lytro as a whole achieved under amazing delivery pressure and a fast evolving technology stack.\r\n\r\nIt was fun (at least kinda) to be reminded that mainstream entertainment deadlines (which I was used to from working with Wild Rover) are absolutely, thoroughly immovable. Doing deep, rich and highly collaborative technical and creative work under those constraints creates a work environment that is often beautiful but sometimes terrifying.\r\n\r\nOne thing that my father reminded me of early on was that high pressure environments with “positive energy” can be fairly inspiring but the same with “bad energy” can be toxic and completely defeating and draining. He knew this well from his years as a TV Executive, Script Writer and Producer. It proved to be some of the most crucial advice I’ve ever received. “The Smell of A Place” is a great clip for anyone interested in how this plays out.\r\n\r\nAnd then my time (and the time of many others) at Lytro was over.',14,23,22,'One',1);
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$2kYgPOR1A8mnH2NbziBNMY$IeOxAlH3s2JgZlBsCTGRE5D4igkQpVm778Vzv9kciog=','2023-05-03 07:23:58.584969',1,'adminbd','','','',1,1,'2023-03-12 14:16:43.747000'),(2,'pbkdf2_sha256$390000$WFbOmwgKrN8MqNw2Kq3TGo$3D6lDPM2+cQh2hcJ0SKGbXJpdEm9bZwKjW8x8gc9lRA=','2023-04-25 11:52:42.853000',0,'user1','','','helloworld@gmail.com',0,1,'2023-03-14 19:54:41.474000'),(3,'pbkdf2_sha256$390000$XxYHbChiYHOUCBrPivY2KX$R5x3p/QZ9/gZwuKViu6uq/+E0GAPd4KFAxCX2xGzxZA=','2023-04-25 11:10:33.437000',0,'user2','','','helloworld@gmail.com',0,1,'2023-04-04 13:30:45.373000');
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `authtoken_token`
--

DROP TABLE IF EXISTS `authtoken_token`;
CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`key`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `authtoken_token_user_id_35299eff_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `authtoken_token`
--

LOCK TABLES `authtoken_token` WRITE;
INSERT INTO `authtoken_token` VALUES ('64e764799e54d71deae0aa6f55191d7552300324','2023-04-05 13:23:06.522000',3);
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
INSERT INTO `django_admin_log` VALUES (1,'2023-04-28 10:33:51.056403','2','I need to migrate my db from sqlite to mysql, and the various tools/scripts out there are too many for me to easily spot the safest and most elegant solution.\r\n\r\nThis seemed to me nice http://djangosn',1,'[{\"added\": {}}]',7,1),(2,'2023-04-28 15:46:32.677251','3','sdfsdfsdf',1,'[{\"added\": {}}]',7,1),(3,'2023-05-03 07:15:34.744132','4','There were quite a few long nights, long weeks and even long weekends full of cloud rendering but I couldn’t have been prouder of what my team and Lytro as a whole achieved under amazing delivery pres',1,'[{\"added\": {}}]',7,1);
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'app','text'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(8,'authtoken','token'),(9,'authtoken','tokenproxy'),(5,'contenttypes','contenttype'),(6,'sessions','session');
UNLOCK TABLES;

-- Dump completed on 2023-05-05 13:35:00

```
## RESTfull сервіс для управління даними

### Головний файл з якого відбувається запуск сервера

```python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'plagiatcheck.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if name == 'main':
    main()
```

### Фрагмент коду який відповідає за користування базою данних

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'OPTIONS': {
            'read_default_file': BASE_DIR.as_posix() + '/my.cnf',
        },

    }
}
```

### Фрагмент який відповідає за реалізацію REST API

```python
from django import forms
from rest_framework import generics
from rest_framework.response import Response
from .modules.mainmodule import TextAnalys
from .serializer import *
from .permissions import IsOwnerOrReadOnly
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated


class TextAPIView(generics.ListCreateAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    permission_classes = (IsAuthenticated, )


class OneTextAPIView(generics.RetrieveAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    permission_classes = (IsAuthenticated, )


class TextDeleteAPIView(generics.DestroyAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    permission_classes = (IsOwnerOrReadOnly, )


class Get_data_view(APIView):
    permission_classes = (IsAuthenticated, )
    def post(self, request):
        text_one = request.data['content1']
        text_two = request.data['content2']
        if len(text_one) > 500000 or len(text_two) > 500000:
            return Response({'data': {'message': 'Too much symbols in sdtin!'}})
        t = TextAnalys()
        coef = TextAnalys.get_plagiat_coeficient(text_one, text_two)
        used_words = t.dict_used_word(text_one)
        used_words_second = t.dict_used_word(text_two)
        dict_to_return = {
            'data': {
                'plagiat_coeficient': coef,
                'lang': TextAnalys.get_text_language(text_one, text_two),
                'count_symbols': TextAnalys.get_number_symobols(text_one),
                'count_symbols_second': TextAnalys.get_number_symobols(text_two),
                'count_words': TextAnalys.get_number_words(text_one),
                'count_words_second': TextAnalys.get_number_words(text_two),
                'count_sentences': TextAnalys.get_number_sentences(text_one),
                'count_sentences_second': TextAnalys.get_number_sentences(text_two),
                'used_words': used_words,
                'used_words_second': used_words_second,
            }
        }
        return Response(dict_to_return)
```

### Модуль який відповідає за розподілення маршутів для REST-сервісу

```python
from django.contrib import admin
from django.urls import path, include, re_path
from app.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/get_data/', Get_data_view.as_view()),
    path('api/v1/textlist/', TextAPIView.as_view()),
    path('api/v1/textlist/<int:pk>/', OneTextAPIView.as_view()),
    path('api/v1/textdelete/<int:pk>/', TextDeleteAPIView.as_view()),
    path(r'api/v1/auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken'))]
```

### Модуль який відповідає за структуру моделі Text

```python
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
```

### Фрагмент коду який відповідає за створення інтерфейсу адміністратора

```python
from django.contrib import admin

from .models import Text

class TextAdmin(admin.ModelAdmin):
    list_display = ("id", "content", "symbol_number", "word_number", "sentence_number", "most_used_word", "user")
    search_fields = ('id', "symbol_number", "word_number", "sentence_number")

admin.site.register(Text, TextAdmin)
```