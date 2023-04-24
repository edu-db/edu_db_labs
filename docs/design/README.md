# Проєктування бази даних

## Модель бізнес-об'єктів 

```plantuml
@startuml

entity User

    entity User.id
    entity User.login
    entity User.password
    entity User.email

        User *-- User.id
        User *-- User.login
        User *-- User.password
        User *-- User.email

entity Role

    entity Role.id
    entity Role.name
    entity Role.description

        Role *-- Role.id
        Role *-- Role.name
        Role *-- Role.description

entity Access

    entity Access.auth_token
    entity Access.role

        Access *-- Access.auth_token
        Access *-- Access.role

entity Request

    entity Request.id
    entity Request.description

        Request *-- Request.id
        Request *-- Request.description

entity Text

    entity Text.id
    entity Text.content
    entity Text.user_id

        Text *-- Text.id
        Text *-- Text.content
        Text *-- Text.user_id

entity Question

    entity Question.id
    entity Question.title

        Question *-- Question.id
        Question *-- Question.title

entity FAQ

    entity FAQ.id
    entity FAQ.title
    entity FAQ.answer

        FAQ *-- FAQ.id
        FAQ *-- FAQ.title
        FAQ *-- FAQ.answer

entity TextAnalysis

    entity TextAnalysis.data

        TextAnalysis *-r- TextAnalysis.data

entity Result

    entity Result.id
    entity Result.symbol_number
    entity Result.word_number
    entity Result.sentence_number
    entity Result.most_used_word

        Result *-u- Result.id
        Result *-u- Result.symbol_number
        Result *-u- Result.word_number
        Result *-u- Result.sentence_number
        Result *-u- Result.most_used_word



User "0,*" -- "1,1" Role
Access "0,*" -- "1,1" User
Access "0,*" -- "1,1" Request
Request "0,*" -- "1,1" Text
Request "0,*" -- "1,1" Question
Question "0,*" -- "1,1" FAQ
Request "0,*" -- "1,1" TextAnalysis
TextAnalysis "0,*" -u- "1,1" Result
@enduml
```

## ER-модель

```plantuml
@startuml

@startuml

entity User {
    id: INT
    login: TEXT
    password: TEXT
    email: TEXT
}

entity Request {
    id: INT
    description: TEXT
}

entity Text {
    id: INT
    content: TEXT
    user_id: INT
}

entity Question {
    id: INT
    title: TEXT
}

entity Role <<ENUMERATION>> {
    id: INT
    name: TEXT
    description: TEXT
}

entity Access {
    auth_token: TEXT
    role: TEXT
}

entity FAQ{
    id: INT
    title: TEXT
    answer: TEXT
}

entity TextAnalysis {
    data: DICT
}

entity Result {
    id: INT
    symbol_number: INT
    word_number: INT
    sentence_number: INT
    most_used_word: TEXT
}


Access "0,*" --> "1,1" User
User "0,*" -r-> "1,1" Role
Access "0,*" --> "1,1" Request
Request "0,*" -d-> "1,1" Text
Request "0,*" -l-> "1,1" Question
Question "0,*" -l-> "1,1" FAQ
Request "0,*" -d-> "1,1" TextAnalysis
TextAnalysis "0,*" --> "1,1" Result

@enduml
```

## Реляційна схема
