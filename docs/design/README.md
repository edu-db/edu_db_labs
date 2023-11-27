# Проєктування бази даних

В рамках проекту розробляється:

- модель бізнес-об'єктів

@startuml

entity User <<ENTITY>> #FFFBF5
entity User.password <<TEXT>> #ffffff

entity Attributes <<ENTITY>> #F7EFE5
entity DataFolder <<ENTITY>> #FFFBF5
entity Permissions <<ENTITY>> #FFFBF5
entity Filter <<ENTITY>> #FFFBF5
entity Request <<ENTITY>> #FFFBF5
entity Data <<ENTITY>> #FFFBF5

User "1,1" --u- "0,_" Attributes
User "1,1" --u- "0,_" Request
User "1,1" --u- "0,_" DataFolder
Request "1,1" --u- "0,_" Filter
Filter "1,1" --u- "0,_" Data
Attributes "1,1" --u- "0,_" Permissions

@enduml

- ER-модель
- реляційна схема
