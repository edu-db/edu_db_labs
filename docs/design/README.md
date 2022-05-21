# Проєктування бази даних

В рамках проекту розробляється: 
## модель бізнес-об'єктів 

@startuml

entity Query
entity Query.created #ffffff
entity Query.modified #ffffff
entity Query.id #ffffff
entity Query.title #ffffff
entity Query.description #ffffff

entity Source
entity Source.template #ffffff

entity Result
entity Result.id #ffffff
entity Result.name #ffffff
entity Result.description #ffffff

entity User
entity User.name #ffffff
entity User.email #ffffff
entity User.login #ffffff
entity User.password #ffffff

entity Access

entity Role
entity Role.name #ffffff
entity Role.description #ffffff

Query.created --* Query
Query.modified --* Query
Query.id --* Query
Query.title --* Query
Query.description --* Query

Result.id --* Result
Result.name --* Result
Result.description -l-* Result

Role.name -u-* Role
Role.description -u-* Role

Source.template -l-* Source

User.email -u-* User
User.name -u-* User
User.login -r-* User
User.password --* User

Query "0,*" -d- "0,*" Access

Query "0,*" -r- "1,1" Source
Query "0,*" -- "1,1" Result
User "1,1" -u- "0,*" Access
Role "1,1" -l- "0,*" Access

@enduml

## ER-модель

@startuml

' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity Account {
  *Account_id : int
  *name : str
  *login : str
  *password : str
  *permissions : str
}
entity ActorUser {
  *permissions = "User"
}
entity AdminUser {
  *permissions = "Admin"
}
entity Application {
  *Application_id : int
  *name : str
  *other_details : str  
}
entity Actor {
  *Actor_id : int  
}
entity Registration
entity Authentication
entity DataValidation
entity System
Actor --> Registration
Actor --> Authentication
DataValidation <-- Registration
DataValidation <-- Authentication
DataValidation --> System 
System ||..o{ ActorUser 
System ||..o{ Actor 
System ||..o{ Account
Account ||..o{ ActorUser 
Account ||..o{ AdminUser 
ActorUser ||--o{ Application
Application ||..o{ AdminUser
AdminUser ||..o{ System
@enduml

## реляційна схема

