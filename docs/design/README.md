# Проєктування бази даних

В рамках проекту розробляється:

- модель бізнес-об'єктів

@startuml


entity User  #190482
entity User.password  #C2D9FF
entity User.email #C2D9FF
entity User.username #C2D9FF
entity User.id #C2D9FF


entity Attributes  #190482
entity Attributes.description  #C2D9FF
entity Attributes.value #C2D9FF
entity Attributes.type #C2D9FF
entity Attributes.name #C2D9FF
entity Attributes.id #C2D9FF

entity DataFolder  #190482
entity DataFolder.description  #C2D9FF
entity DataFolder.date #C2D9FF
entity DataFolder.owner #C2D9FF
entity DataFolder.name #C2D9FF
entity DataFolder.id #C2D9FF

entity Permissions  #190482
entity Permissions.id  #C2D9FF
entity Permissions.name #C2D9FF
entity Permissions.description #C2D9FF
entity Permissions.level #C2D9FF

entity Filter  #190482
entity Filter.parameters  #C2D9FF
entity Filter.status  #C2D9FF
entity Filter.id  #C2D9FF

entity Request  #190482
entity Request.status  #C2D9FF
entity Request.date  #C2D9FF
entity Request.type #C2D9FF
entity Request.target #C2D9FF
entity Request.id #C2D9FF

entity Data  #190482
entity Data.size  #C2D9FF
entity Data.date  #C2D9FF
entity Data.type #C2D9FF
entity Data.name #C2D9FF
entity Data.id #C2D9FF
entity Data.description #C2D9FF
entity Data.tags #C2D9FF

entity UserAttributes  #190482
entity UserAttributes.UserID  #C2D9FF
entity UserAttributes.AttributeID #C2D9FF

entity DataLinkReference  #190482
entity DataLinkReference.DataLinkID  #C2D9FF
entity DataLinkReference.DataID #C2D9FF

entity DataLink #190482
entity DataLink.link #C2D9FF

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


DataLink.link -d-* DataLink



DataFolder.description -d-* DataFolder
DataFolder.date -d-* DataFolder
DataFolder.owner -d-* DataFolder
DataFolder.name -d-* DataFolder
DataFolder.id -d-* DataFolder

DataLinkReference.DataLinkID -d-* DataLinkReference
DataLinkReference.DataID -d-* DataLinkReference

UserAttributes.UserID -d-* UserAttributes
UserAttributes.AttributeID -d-* UserAttributes


Attributes.description -d-* Attributes
Attributes.value -d-* Attributes
Attributes.type -d-* Attributes
Attributes.name -d-* Attributes
Attributes.id -d-* Attributes

Permissions.description -d-* Permissions
Permissions.level -d-* Permissions
Permissions.name -d-* Permissions
Permissions.id -d-* Permissions

User "1,_" --u- "0,_" UserAttributes
User "1,1" --u- "0,_" Request
User "1,1" --u- "0,_" DataFolder
Request "1,1" --u- "0,_" Filter
Filter "1,*" --u- "0,_" Data
UserAttributes "0,_" --u- "1,_" Attributes
Attributes "1,1" --u- "0,_" Permissions
DataFolder "1,1" --u- "0,*" DataLink 
DataLink "1,1" --u- "0,*" DataLinkReference
DataLinkReference "0,*" --u- "1,1" Data

@enduml

- ER-модель
- реляційна схема
