# ER-дiаграмма

"Користувач" as Actor

"Аккаунт звичайного користувача" as ActorUser

"Аккаунт адмiна" as "AdminAccount"

Як це виглядає у вигляді кодi:
    
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

Як це виглядає у вигляді діаграми:
![image](https://user-images.githubusercontent.com/98806855/167298226-41e9e1c0-2a8a-4e55-a42f-ecc08883b8c0.png)

