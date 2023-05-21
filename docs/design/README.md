# Проєктування бази даних

В рамках проекту розробляється: 

## модель бізнес-об'єктів
@startuml
entity User
entity User.id #ffffff
entity User.username #ffffff
entity User.email #ffffff
entity User.password #ffffff

entity Role
entity Role.name #ffffff 
entity Admin #ffffff 
entity Editor #ffffff 
entity RegisteredUser #ffffff 

entity Access

entity Action
entity Action.id #ffffff 
entity Action.name #ffffff 
entity DataDelete #ffffff 
entity DataDownload #ffffff 
entity DataUpload #ffffff 
entity DataFilter #ffffff
entity DataSearch #ffffff 

entity FileCollection

entity DataFile
entity DataFile.id #ffffff 
entity DataFile.name #ffffff 
entity DataFile.description #ffffff 
entity DataFile.uploadDate #ffffff
entity DataFile.fileType #ffffff 

User.username -d-* User
User.id -d-* User
User.email -l-* User 
User.password -d-* User

Role.name -r-* Role

Action.id -r-* Action
Action.name -d-* Action

DataFile.name -u-* DataFile
DataFile.id -u-* DataFile
DataFile.description -l-* DataFile
DataFile.uploadDate -d-* DataFile
DataFile.fileType -d-* DataFile

User "1,1" -l- "0,1" Role
Role "0,1" -d- "0,*" Access
Access "0,*" -d- "0,1" Action
Access "0,*" -d- "0,*" FileCollection
FileCollection "0,*" -r- "1,1" DataFile


Admin .d.> Role : instanceOf
Editor  .d.> Role : instanceOf
RegisteredUser .d.> Role : instanceOf

DataDelete .u.> Action : instanceOf
DataDownload  .u.> Action : instanceOf
DataUpload .u.> Action : instanceOf
DataFilter .u.> Action : instanceOf
DataSearch  .u.> Action : instanceOf
@enduml

## ER-модель
@startuml
entity User <<ENTITY>> {
    id: INT
    username: TEXT
    email: TEXT
    password: TEXT
}

entity Role <<ENTITY>> {
    name: TEXT
}

object Admin #ffffff 
object Editor #ffffff 
object RegisteredUser #ffffff 

entity Access

entity Action <<ENTITY>> {
    id: INT
    name: TEXT
}
object DataDelete #ffffff 
object DataDownload #ffffff 
object DataUpload #ffffff 
object DataFilter #ffffff
object DataSearch #ffffff 

entity FileCollection

entity DataFile <<ENTITY>> {
    id: INT
    name: TEXT
    description: TEXT
    uploadDate: DATE
    fileType: TEXT
}

User "1,1" -l- "0,1" Role
Role "0,1" -d- "0,*" Access
Access "0,*" -d- "0,1" Action
Access "0,*" -r- "0,*" FileCollection
FileCollection "0,*" -r- "1,1" DataFile


Admin .d.> Role : instanceOf
Editor  .d.> Role : instanceOf
RegisteredUser .d.> Role : instanceOf

DataDelete .u.> Action : instanceOf
DataDownload  .u.> Action : instanceOf
DataUpload .u.> Action : instanceOf
DataFilter .u.> Action : instanceOf
DataSearch  .u.> Action : instanceOf
@enduml

## реляційна схема
<img src="./relational_schema.png"/>