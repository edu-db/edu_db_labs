# Проєктування бази даних

## Business Entity Model

@startuml

    entity Project
    entity Project.name #ffffff
    entity Project.description #ffffff
    entity Project.status #ffffff
    entity Task #ffffff
    entity Task.status #ffffff
    entity Task.name #ffffff
    entity Task.developer #ffffff
    entity Task.deadline #ffffff
    entity Task.ID #ffffff

    entity PaymentData #ffffff
    entity PaymentData.email #ffffff
    entity PaymentData.cardNumber #ffffff
    entity PaymentData.cardExpireDate #ffffff
    entity PaymentData.cardCVV #ffffff

    entity Review
    entity Review.text #ffffff
    entity Review.rate #ffffff

    entity User
    entity User.login #ffffff
    entity User.password #ffffff
    entity User.email #ffffff
    entity User.picture #ffffff
    entity User.role #ffffff

    entity Member
    
    entity Role
    entity Role.id #ffffff
    
    entity RoleGrant
    
    entity Permission 
    
    Role "1,1"--l-"0,*" RoleGrant
    RoleGrant "0,*"--u-"1,1" Permission
    Role.id --d-* Role

    Project.name --d-*  Project
    Project.description --d-*  Project
    Project.status --d-*  Project
    Task "0,*" -- "1,1"  Project
    Task.status --u-*  Task
    Task.name --d-*  Task
    Task.developer --r-*  Task
    Task.deadline --d-*  Task
    Task.ID --u-*  Task

    PaymentData "0,*" --u- "1,1" Project
    PaymentData.email --l-* PaymentData
    PaymentData.cardNumber --r-* PaymentData
    PaymentData.cardExpireDate --u-* PaymentData
    PaymentData.cardCVV --u-* PaymentData

    Review  "0,*" --u- "1,1" Project
    Review.text --u-* Review
    Review.rate --u-* Review

    User.login --r-* User
    User.password --u-* User
    User.email --u-* User
    User.picture --l-* User
    User.role --u-* User

    Member "0,*"--u-"1,1" Role
    Member "0,*" -- "1,1" User
    Member  "1,*" -- "0,*" Project

@enduml

## ER-model

@startuml

namespace ProjectManagment  {

entity Project <<ENTITY>> {
    ID: UUID
    name: TEXT
    description: TEXT
    status: TEXT
}

entity Task <<ENTITY>> {
    ID: UUID
    name: TEXT
    developer: TEXT
    status: TEXT
    deadline: DATE
}

entity PaymentData <<ENTITY>> {
    ID: UUID  
    cardNumber: NUMBER
    cardCVV: NUMBER
    cardExpireDate: DATE
    email: TEXT  
}

entity Review <<ENTITY>>{
    ID: UUID
    text: TEXT
    rate: NUMBER
}

}

Project "1.1  "<---"0.*" Task
Project "1.1 "<---"0.* " PaymentData
Project "1.1"<---"0.*   " Review
@enduml
