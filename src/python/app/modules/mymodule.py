import difflib as df
from langdetect import detect

class MostUsedWordModule:
    def get_words(self, input_text):
        text = input_text.replace("\n", " ")
        text = text.replace(",", "").replace(".", "").replace("?", "").replace("!", "")
        text = text.lower()
        words = text.split()
        words.sort()
        return words

    def get_words_dict(self, words):
        words_dict = dict()

        for word in words:
            if word in words_dict:
                words_dict[word] = words_dict[word] + 1
            else:
                words_dict[word] = 1
        return words_dict

    def dict_used_word(self, arg1):

        words = self.get_words(arg1)
        words_dict = self.get_words_dict(words)
        word_list_result = []
        for i in words_dict.items():
            word_list_result.append({'word':i[0], 'quantity':i[1]})

        return word_list_result




class GeneralParametresModule:
    '''Улучшить нужно методы, учесть ексепшены'''
    @staticmethod
    def get_plagiat_coeficient(txt1, txt2):
        '''Коефициент плагиата'''
        y = df.SequenceMatcher(None, txt1.lower(), txt2.lower()).ratio() * 100
        return y

    @staticmethod
    def get_number_symobols(txt):
        '''Количество символов'''
        return len([i for i in txt if not i.isspace()])

    @staticmethod
    def get_number_words(txt):
        '''Количество слов'''
        punctuation = [',', '.', ':', ';', '!', '?']
        for i in punctuation:
            txt = txt.replace(i, "")
        result = txt.split(' ')
        return len(result) - len([i for i in result if not i])

    @staticmethod
    def get_number_sentences(txt):
        '''Количество предложений'''
        text = txt.replace("?", ".").replace("!", ".")
        result = text.split('.')
        return len(result)

    @staticmethod
    def get_text_language(txt1, txt2):
        '''Определния языка текста'''
        lang1 = detect(txt1)
        lang2 = detect(txt2)
        if lang1 == lang2:
            return lang1
        else:
            return f'{lang1}-{lang2}'





