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
