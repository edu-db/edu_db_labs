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

<<<<<<< HEAD
![VP9HRiCW38RVUueeUwjAjTvWEy8wxG08t0a9GWH6Ks-_bCLoJEZwPFzVOzdwUCke4vRW3p2Xm_lmKI3THNCs2JI27LvkzITXYDRTt3FgdkHBwQ6FB6IJt8mkJkqVFcD91cHtHWYprxYRTeLSFCgktOV1f0FqqNyBVML8sxeTmm22ThvBVFnsKvVCEkUVc6mBtus1dAcxHW_Rkjc1GVSGQLYfu_e](https://user-images.githubusercontent.com/99608245/168498572-dcc34696-db52-49cb-a1c3-c5c86c30c88e.png)
=======
![image](https://user-images.githubusercontent.com/99608245/168498572-dcc34696-db52-49cb-a1c3-c5c86c30c88e.png)

>>>>>>> 78826bc6f4347da0ecb1e3b41315332ef3bb7433
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
![image](https://user-images.githubusercontent.com/98806855/167298226-41e9e1c0-2a8a-4e55-a42f-ecc08883b8c0.png)
## реляційна схема

