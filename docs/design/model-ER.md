# Модель бізнес-об'єктів

## Модель

@startuml
entity Poll{
    id: UUID
    description: TEXT
    title: TEXT
    datetime: DATETIME
}

entity PollType <<ENUMERATION>>{
    id: UUID
    name: TEXT
}

entity Account{
    id: UUID
    email: TEXT
    password: TEXT
    username: TEXT
}

entity Query{
    id: UUID
    content: TEXT
}

entity QueryType <<ENUMERATION>>{
    id: UUID
    name: TEXT
}

entity Answer{
    id: UUID
    description: TEXT
    datetime: DATETIME
}

entity Option{
    id: UUID
    description: TEXT
}

entity OptionType <<ENUMERATION>>{
    id: UUID
    name: TEXT
}

entity ChosenOption{
    datetime: DATETIME
}
entity Action{
    datetime: DATETIME <<NULLABLE>>
    comment: TEXT
}

entity State <<ENUMERATION>>{
    id: UUID
    name: TEXT
    description: TEXT
}

entity StateResolve <<ENUMERATION>>{
    rule: TEXT
}

entity Role <<ENUMERATION>> {
    id: NUMBER
    name: TEXT
    description: TEXT
}

Role "1,*" -u- "1,1"Account

Poll *--- Poll.id
Poll *--- Poll.description
Poll *--- Poll.type
Poll *--- Poll.title
Poll *--- Poll.datetime
Poll *--- Poll.state

Query *--- Query.id
Query *--- Query.content
Query *--- Query.type

Option *--- Option.id
Option *--- Option.description
Option *--- Option.type

Answer *--- Answer.id
Answer *--- Answer.description
Answer *--- Answer.datetime
Poll "1,1"--l-- "0,*" Query
Query "1,1" --- "0,*" Option
Query "1,1" --l-- "0,*" Answer
Option "0,*" --l-- "1,1" ChosenOption
ChosenOption "0,*" -----l---- "1,1" Answer

PollType "1,1" <-- "0,*" Poll
QueryType "1,1" <-- "0,*" Query
OptionType "1,1" <-- "0,*" Option
Action "0,*" --> "1,1" Account
Action "0*" --> "1,1" Poll
Action "0*" --> "1,1" State
StateResolve "0*" --> "1,1" State :previous
StateResolve "0*" --> "1,1" State :next
@enduml