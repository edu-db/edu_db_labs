@startuml

    entity Project
    entity Project.name #ffffff
    entity Project.description #ffffff
    entity Project.status #ffffff
    entity Tasks #ffffff
    entity Tasks.status #ffffff
    entity Tasks.name #ffffff
    entity Tasks.developer #ffffff
    entity Tasks.deadline #ffffff
    entity Tasks.ID #ffffff

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

    Project.name --u-*  Project
    Project.description --u-*  Project
    Project.status --u-*  Project
    Tasks "0,*" -- "1,1"  Project
    Tasks.status --u-*  Tasks
    Tasks.name --l-*  Tasks
    Tasks.developer --r-*  Tasks
    Tasks.deadline --u-*  Tasks
    Tasks.ID --u-*  Tasks

    PaymentData "0,*" --u-* "1,1" Project
    PaymentData.email --u-* PaymentData
    PaymentData.cardNumber --u-* PaymentData
    PaymentData.cardExpireDate --u-* PaymentData
    PaymentData.cardCVV --u-* PaymentData

    Review  "0,*" --u-* "0,1" Project
    Review.text --u-* Review
    Review.rate --u-* Review

    User.login --u-* User
    User.password --u-* User
    User.email --u-* User
    User.picture --u-* User
    User.role --u-* User

    Member "0,*" -- "1,1" User
    Member "1,1" -- "0,*" Project:Замовник
    Member "1,*" -- "0,*" Project:Тімлід
    Member "1,*" -- "0,*" Project:Розробник

@enduml
