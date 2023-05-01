# Проєктування бази даних

## Модель бізнес-об'єктів 

@startuml

entity User

    entity User.login
    entity User.password
    entity User.email
    entity User.role

        User *-- User.login
        User *-- User.password
        User *-- User.email
        User *-- User.role

entity Access

    entity Access.is_staff
    entity Access.auth_token

        Access *-- Access.is_staff
        Access *-- Access.auth_token

entity Request

    entity Request.id
    entity Request.description

        Request *-- Request.id
        Request *-- Request.description

entity Text

    entity Text.id
    entity Text.content
    entity Text.symbols_number
    entity Text.words_number
    entity Text.sentences_number
    entity Text.most_used_word
    entity Text.user

        Text *-- Text.id
        Text *-- Text.content
        Text *-- Text.symbols_number
        Text *-- Text.words_number
        Text *-- Text.sentences_number
        Text *-- Text.most_used_word
        Text *-- Text.user

entity Help

    entity Help.id
    entity Help.title
    entity description

        Help *-- Help.id
        Help *-- Help.title
        Help *-- description

entity Question

    entity Question.id
    entity Question.question
    entity Question.answer

        Question *-- Question.id
        Question *-- Question.question
        Question *-- Question.answer

User "1,1" -- "0,*" Access
Access "0,*" -- "1,1" Request
Request "0,*" -- "1,1" Text
Request "0,*" -r- "1,1" Help
Help "0,*" -r- "1,1" Question
@enduml

## ER-модель

@startuml

entity User {
    login: TEXT
    password: TEXT
    email: TEXT
    role: TEXT
}

entity Request {
    id: INT
    description: TEXT
}

entity Text {
    id: INT
    content: TEXT
    symbol_number: INT
    word_number: INT
    sentence_number: INT
    most_used_word: TEXT
    user: INT
}

entity Help {
    id: INT
    title: TEXT
    description: TEXT
}

entity Access {
    is_staff: BOOLEAN
    auth_token: TEXT
}

entity Question{
    id: INT
    question: TEXT
    answer: TEXT
}


User "1,1" -- "0,*" Access
Access "0,*" -- "1,1" Request
Request "0,*" -- "1,1" Text
Request "0,*" -r- "1,1" Help
Help "0,*" -r- "1,1" Question

@enduml

## Реляційна схема
