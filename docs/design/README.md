# Проєктування бази даних

## Модель бізнес-об'єктів

@startuml
entity User
entity User.firstname
User.firstname -u-* User
entity User.lastname
User.lastname -u-* User
entity User.nickname
User.nickname -u-* User
entity User.email
User.email -u-* User
entity User.password
User.password -u-* User

entity Permission
entity Permission.name
Permission.name -d-* Permission

entity Right
entity Right.name
Right.name -u-* Right

entity Grant

entity Role
entity Role.name
Role.name -d-* Role
entity Role.description
Role.description -d-* Role

entity Access

entity Request
entity Request.target
Request.target -u-* Request
entity Request.type
Request.type -u-* Request
entity Request.date
Request.date -u-* Request

entity Search

entity Filter
entity Filter.keyword
Filter.keyword -d-* Filter
entity Filter.country
Filter.country -d-* Filter
entity Filter.fileFormat
Filter.fileFormat -l-* Filter

entity File
entity File.name
File.name -d-* File
entity File.description
File.description -d-* File
entity File.uploadDate
File.uploadDate -d-* File
entity File.lastEditDate
File.lastEditDate -d-* File
entity File.format
File.format -d-* File
entity File.hasVisualization
File.hasVisualization -u-* File
entity File.authorId
File.authorId -l-* File
entity File.country
File.country -r-* File

User "0,*" -l- "1,1" Role
User "1,1" -r- "0,*" Request

Access "0,*" -d- "1,1" User
Access "0,*" -d- "1,1" Role
Access "0,*" -u- "1,1" File

Grant "0,*" -l- "1,1" Right
Grant "0,*" -r- "1,1" Role

Right "1,1" -l- "0,*" Permission

Search "0,*" -d- "1,1" Request
Search "0,*" -u- "1,1" File

Filter "0,*" -l- "1,1" Request
@enduml

## ER-модель

@startuml
namespace ProfileManagement {
    entity User <<ENTITY>> {
    id: UUID
    nickname: TEXT
    firstname: TEXT
    lastname: TEXT
    email: TEXT
    password: TEXT
    }
}

namespace AccessPolicy {
    entity Permission <<ENTITY>> {
    id: NUMBER
    name: TEXT
    }
    
    entity Right <<ENTITY>> {
    id: NUMBER
    name: TEXT
    }
    
    entity Grant
    
    enum Role <<ENUMERATION>> #yellow {
    id: NUMBER
    name: TEXT
    description: TEXT
    }
    
    object Guest #white
    Guest .u.> Role :instanceOf
    object RegisteredUser #white
    RegisteredUser .u.> Role :instanceOf
    object Editor #white
    Editor .u.> Role :instanceOf
    object Administrator #white
    Administrator .u.> Role :instanceOf
    
    entity Access
}

namespace DataReceiving {
    entity Request <<ENTITY>> {
    id: NUMBER
    target: TEXT
    type: TEXT
    date: DATETIME
    }
    
    entity Search
    
    entity Filter <<ENTITY>> {
    id: NUMBER
    keyword: TEXT
    country: TEXT
    fileFormat: TEXT
    }
}

namespace DataManipulation {
    entity File <<ENTITY>> {
    id: UUID
    name: TEXT
    description: TEXT
    uploadDate: DATETIME
    lastEditDate: DATETIME
    format: TEXT
    hasVisualization: BOOLEAN
    authorId: UUID
    country: TEXT
    }
}

User "0,*" --> "1,1" Role

Permission "0,*" -l-> "1,1" Right

Grant "0,*" -r-> "1,1" Right
Grant "0,*" --> "1,1" Role

Access "0,*" -l-> "1,1" User
Access "0,*" -d-> "1,1" Role
Access "0,*" -u-> "1,1" File

Request "0,*" --> "1,1" User

Search "0,*" --> "1,1" Request
Search "0,*" --> "1,1" File 

Filter "0,*" --> "1,1" Request
@enduml

## Реляційна схема

![relational-schema](https://github.com/StrivingToAdoniss/IM-22_lab_and_course_works/assets/115948037/263dac8d-e9b1-442a-a0d5-4df81d7c7c81)
