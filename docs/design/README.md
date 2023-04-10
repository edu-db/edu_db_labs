# Проєктування бази даних

В рамках проекту розробляється: 

## Модель бізнес-об'єктів 

@startuml

entity User
entity User.id
entity User.username
entity User.password
entity User.email
entity User.avatar

User.id -r-* User
User.username -u-* User
User.password -u-* User
User.email -l-* User
User.avatar -u-* User

entity Role
entity Role.name

Role "1,*" -d- "1,1" User

entity SystemAdministrator
entity WorkspaceManager
entity ProjectManager
entity ProjectUser

SystemAdministrator -d-|> Role
WorkspaceManager -d-|> Role
ProjectManager -d-|> Role
ProjectUser -d-|> Role
Role.name -l-* Role

entity Workspace
entity Workspace.name
entity Workspace.description
entity Workspace.manager

Workspace.name -d-* Workspace
Workspace.description -d-* Workspace
Workspace.manager -l-* Workspace

entity Project
entity Project.name
entity Project.description
entity Project.manager

Project.name -u-* Project
Project.description -u-* Project
Project.manager -r-* Project

entity Board
entity Board.name
entity Board.description

Board.name -u-* Board
Board.description -d-* Board

entity Task
entity Task.id
entity Task.title
entity Task.description
entity Task.deadline
entity Task.responsible

Task.id -u-* Task
Task.title -d-* Task
Task.description -r-* Task
Task.deadline -d-* Task
Task.responsible -l-* Task

Task "0.*" -l- "1.1" Board

Board "0.*" -l- "1.1" Project

Project "0.*" -u- "1.1" Workspace

entity Status
entity Status.type

entity Unassigned
entity Pending
entity Accepted
entity Started
entity Completed

Unassigned -u-|> Status
Pending -u-|> Status
Accepted -u-|> Status
Started -u-|> Status
Completed -u-|> Status

Status.type -l-* Status

Task "1.1" -d- "0.1" Status

entity Action
entity State

Action "0,*" -r-  "1,1" User
Action "0,*" -d-  "1,1" Workspace
Action "0,*" -l-  "1,1" Project
Action "0,*" -d-  "1,1" Board
Action "0,*" -u-  "1,1" Task
Action "0,*" -u-  "1,1" State

entity StateResolve

StateResolve "0,*" -d->  "1,1" State :prev
StateResolve "0,*" -d->  "1,1" State :next

@enduml

## ER-модель

@startuml

  
entity User{
    id: UUID
    email: TEXT
    password: TEXT
    username: TEXT
    avatar: TEXT
}

entity Role <<ENUMERATION>>{
    id: UUID
    name: TEXT
    description: TEXT
}

entity Workspace{
    id: UUID
    description: TEXT
    manager: TEXT
}

entity Project{
    id: UUID
    description: TEXT
    manager: TEXT
}

entity Board{
    id: UUID
    description: TEXT
}

entity Task{
    id: UUID
    description: TEXT
    deadline: DATETIME
    responsible: TEXT
}

entity Status <<ENUMERATION>>{
    id: UUID
    email: TEXT
    password: TEXT
    username: TEXT
    avatar: TEXT
}

entity Action{
    datetime: DATETIME <<NULLABLE>>
    comment: TEXT
}

entity State <<ENUMERATION>>{
    id: UUID
    name: TEXT
    description: TEXT
}

entity StateResolve <<ENUMERATION>>{
    rule: TEXT
}

User "0,*" ->  "1,1" Role

Status "0.1" --> "1.1" Task

Action "0,*" --> "1,1"  User
Action "0*" --> "1,1" Workspace
Action "0,*" --> "1,1"  Project
Action "0*" --> "1,1" Board
Action "0*" --> "1,1" Task
Action "0*" --> "1,1" State
StateResolve "0*" --> "1,1" State :previous
StateResolve "0*" --> "1,1" State :next
@enduml

## Реляційна схема

