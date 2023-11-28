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
entity DataFolder.description <<TEXT>> #F7EFE5
entity DataFolder.date<<DATE>> #F7EFE5
entity DataFolder.owner<<TEXT>> #F7EFE5
entity DataFolder.name<<TEXT>> #F7EFE5
entity DataFolder.id<<TEXT>> #F7EFE5


entity Permissions <<ENTITY>> #FFFBF5


entity Filter <<ENTITY>> #FFFBF5
entity Filter.parameters <<LIST>> #FFFBF5
entity Filter.status <<TEXT>> #F7EFE5
entity Filter.id <<TEXT>> #F7EFE5

entity Request <<ENTITY>> #FFFBF5
entity Request.status <<TEXT>> #F7EFE5
entity Request.date <<DATE>> #F7EFE5
entity Request.type<<TEXT>> #F7EFE5
entity Request.target<<TEXT>> #F7EFE5
entity Request.id<<TEXT>> #F7EFE5

entity Data <<ENTITY>> #FFFBF5
entity Data.size <<NUMBER>> #F7EFE5
entity Data.date <<DATE>> #F7EFE5
entity Data.type<<TEXT>> #F7EFE5
entity Data.name<<TEXT>> #F7EFE5
entity Data.id<<TEXT>> #F7EFE5
entity Data.description<<TEXT>> #F7EFE5
entity Data.tags<<LIST>> #F7EFE5

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

Data.size -d-* Data
Data.date -d-* Data
Data.type -d-* Data
Data.id -d-* Data
Data.name -d-* Data
Data.description -d-* Data
Data.tags -d-* Data

DataFolder.description -d-* DataFolder
DataFolder.date -d-* DataFolder
DataFolder.owner -d-* DataFolder
DataFolder.name -d-* DataFolder






@enduml

- ER-модель
- реляційна схема
