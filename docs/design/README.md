# Проєктування бази даних

В рамках проекту розробляється:

- модель бізнес-об'єктів



@startuml


entity User <<ENTITY>> #FFFBF5
entity User.password <<TEXT>> #F7EFE5
entity User.email<<TEXT>> #F7EFE5
entity User.username<<TEXT>> #F7EFE5
entity User.id<<TEXT>> #F7EFE5


entity Attributes <<ENTITY>> #FFFBF5
entity DataFolder <<ENTITY>> #FFFBF5
entity Permissions <<ENTITY>> #FFFBF5


entity Filter <<ENTITY>> #FFFBF5
entity Filter.parameters <<TEXT>> #FFFBF5
entity Filter.status <<TEXT>> #F7EFE5
entity Filter.id <<TEXT>> #F7EFE5

entity Request <<ENTITY>> #FFFBF5
entity Request.status <<TEXT>> #F7EFE5
entity Request.date <<DATE>> #F7EFE5
entity Request.type<<TEXT>> #F7EFE5
entity Request.target<<TEXT>> #F7EFE5
entity Request.id<<TEXT>> #F7EFE5

entity Data <<ENTITY>> #FFFBF5

User "1,1" --u- "0,_" Attributes
User "1,1" --u- "0,_" Request
User "1,1" --u- "0,_" DataFolder
Request "1,1" --u- "0,_" Filter
Filter "1,1" --u- "0,_" Data
Attributes "1,1" --u- "0,_" Permissions

User.password -d-* User
User.email -d-* User
User.username -d-* User
User.id -d-* User


Request.status -d-* Request
Request.type -d-* Request
Request.target -d-* Request
Request.date -d-* Request
Request.id -d-* Request

Filter.parameters -d-* Filter
Filter.status -d-* Filter
Filter.id -d-* Filter






@enduml

- ER-модель
- реляційна схема
