# Проєктування бази даних

В рамках проекту розробляється:

- модель бізнес-об'єктів



@startuml


entity User  #FFFBF5
entity User.password  #F7EFE5
entity User.email #F7EFE5
entity User.username #F7EFE5
entity User.id #F7EFE5


entity Attributes  #FFFBF5
entity Attributes.description  #F7EFE5
entity Attributes.value #F7EFE5
entity Attributes.type #F7EFE5
entity Attributes.name #F7EFE5
entity Attributes.id #F7EFE5

entity DataFolder  #FFFBF5
entity DataFolder.description  #F7EFE5
entity DataFolder.date #F7EFE5
entity DataFolder.owner #F7EFE5
entity DataFolder.name #F7EFE5
entity DataFolder.id #F7EFE5


entity Permissions  #FFFBF5
entity Permissions.id  #F7EFE5
entity Permissions.name #F7EFE5
entity Permissions.description #F7EFE5
entity Permissions.level #F7EFE5

entity Filter  #FFFBF5
entity Filter.parameters  #FFFBF5
entity Filter.status  #F7EFE5
entity Filter.id  #F7EFE5

entity Request  #FFFBF5
entity Request.status  #F7EFE5
entity Request.date  #F7EFE5
entity Request.type #F7EFE5
entity Request.target #F7EFE5
entity Request.id #F7EFE5

entity Data  #FFFBF5
entity Data.size  #F7EFE5
entity Data.date  #F7EFE5
entity Data.type #F7EFE5
entity Data.name #F7EFE5
entity Data.id #F7EFE5
entity Data.description #F7EFE5
entity Data.tags #F7EFE5


entity DataLink  #F7EFE5
entity DataLink.link  #F7EFE5

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
DataFolder.id -d-* DataFolder

Attributes.description -d-* Attributes
Attributes.value -d-* Attributes
Attributes.type -d-* Attributes
Attributes.name -d-* Attributes
Attributes.id -d-* Attributes

Permissions.description -d-* Permissions
Permissions.level -d-* Permissions
Permissions.name -d-* Permissions
Permissions.id -d-* Permissions

	

DataLink.link -d-* DataLink

DataFolder "0,_" --u- "0,_" DataLink
DataLink "0,_" --u- "0,_" Data


@enduml

- ER-модель
- реляційна схема
