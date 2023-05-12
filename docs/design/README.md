# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
@startuml

 
entity User.id
entity User.name
entity User.email
entity User.password
entity User.role

entity Request
entity Request.id
entity Request.description
entity Request.data


entity Role
entity Role.id
entity Role.role
entity Role.user_id


entity Help
entity Help.id
entity Help.title
entity Help.description
entity Help.review


entity Analysis
entity Analysis.title
entity Analysis.description


entity Filter
entity Filter.key_word
entity Filter.region
entity Filter.date


entity Data


entity Marker
entity Marker.id
entity Marker.region
entity Marker.events
entity Marker.key_points
entity Marker.source


entity Media_File
entity Media_File.id
entity Media_File.name
entity Media_File.source
entity Media_File.region


entity Source
entity Source.id
entity Source.name
entity Source.source
entity Source.rating
entity Source.author
entity Source.data

Role.user_id --* Role
Role.id --* Role
Role.role --* Role

User.role --* User
User.password --* User
User.email --* User
User.name --* User
User.id --* User

Help.id --* Help
Help.title --* Help
Help.description --* Help
Help.review --* Help

Request.id --* Request
Request.description --* Request
Request.data --* Request

Analysis.title --* Analysis
Analysis.description --* Analysis

Filter.key_word --* Filter
Filter.region --* Filter
Filter.date --* Filter

Marker  *-- Marker.id
Marker  *-- Marker.region
Marker  *-- Marker.events
Marker  *-- Marker.key_points
Marker  *-- Marker.source

Media_File.id --* Media_File
Media_File.name --* Media_File
Media_File.source --* Media_File
Media_File.region --* Media_File

Source  *-- Source.id
Source  *-- Source.name
Source  *-- Source.rating
Source  *-- Source.source
Source *-- Source.author
Source*-- Source.data


Help "1,*"*-- "1,*" User
Role "1,*"*- "1,1" User
User "1,1"---* "1,*" Request
Request "1,1" --* "0,*" Analysis
Request "1,1" -- "1,1" Filter
Filter "1,1" --* "0,*" Data
Data "0,*" --- "1,*" Marker
Data "0,*" -- "1,*" Media_File
Media_File "1,*" -- "1,*" Source
@enduml


- ER-модель
- реляційна схема

