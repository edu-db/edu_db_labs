@startuml
entity Project
    entity Project.name #ffffff
    entity Project.description #ffffff
    entity Project.status #ffffff



    entity Member

    entity User
    entity User.login #ffffff
    entity User.password #ffffff
    entity User.email #ffffff
    entity User.picture #ffffff
    entity User.role #ffffff



    Project.name --u-*  Project
    Project.description --u-*  Project
    Project.status --u-*  Project


    Member "0,*" -- "1,1" User
    
    User.login --u-* User
    User.password --u-* User
    User.email --u-* User
    User.picture --u-* 
    User.role --u-* User
    
    Member "1,1" -- "0,*" Project:Замовник
    Member "1,*" -- "0,*" Project:Керівник
    Member "1,*" -- "0,*" Project:Розробник
@enduml