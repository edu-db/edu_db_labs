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

Role "1,1" -d- "0,*" User

entity SystemAdministrator
entity WorkspaceManager
entity ProjectManager
entity ProjectUser

SystemAdministrator -d-|> Role
WorkspaceManager -d-|> Role
ProjectManager -d-|> Role
ProjectUser -d-|> Role
Role.name -l-* Role

entity Workspace #ffff33
entity Workspace.name
entity Workspace.description
entity Workspace.manager

Workspace.name -d-* Workspace
Workspace.description -d-* Workspace
Workspace.manager -d-* Workspace

entity Project #ffff33
entity Project.name
entity Project.description
entity Project.manager

Project.name -d-* Project
Project.description -u-* Project
Project.manager -r-* Project

entity Board #ffff33
entity Board.name
entity Board.description

Board.name -l-* Board
Board.description -u-* Board

entity Task #ffff33
entity Task.id
entity Task.title
entity Task.description
entity Task.deadline
entity Task.responsible

Task.id -l-* Task
Task.title -r-* Task
Task.description --* Task
Task.deadline --* Task
Task.responsible --* Task

Task "0.*" -u- "1.1" Board

Board "0.*" -- "1.1" Project

Project "0.*" -u- "1.1" Workspace

entity Status
entity Status.type

entity Unassigned
entity Accepted
entity Started
entity Completed

Unassigned -u-|> Status
Pending -u-|> Status
Accepted -u-|> Status
Started -u-|> Status
Completed -u-|> Status

Status.type -l-* Status

Task "0.*" -d- "1.1" Status

entity Action
entity State
entity StateResolve

Action "1.*" -- "1.1" User
Action "0.*" -u- "1.1" Workspace
Action "0.*" -l- "1.1" Project
Action "0.*" -- "1.1" Board

Action "0*" -u-> "1,1" State
StateResolve "0*" --> "1,1" State :previous
StateResolve "0*" --> "1,1" State :next

@enduml

## ER-модель

@startuml

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

Action "0*" -u-> "1,1" State
StateResolve "0*" --> "1,1" State :previous
StateResolve "0*" --> "1,1" State :next

namespace UserAdministration {

  entity User <<ENTITY>> #ffff00 {
    id: UUID
    username: TEXT
    email: TEXT
    password: TEXT
    avatar: TEXT
  }

  entity Role <<ENUMERATION>>{
    id: UUID
    name: TEXT
    description: TEXT
  }

  object SystemAdministrator #ffffff
  object WorkspaceManager #ffffff
  object ProjectManager #ffffff
  object ProjectUser #ffffff

  SystemAdministrator -.-> Role
  WorkspaceManager -.-> Role
  ProjectManager -.-> Role
  ProjectUser -.-> Role

  Role "1,1" -d->  "0,*" User
  User "1,1" -l-> "1,*" Action
}

namespace ActionManagment {

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
    name: TEXT
  }

  object Unassigned #ffffff
  object Accepted #ffffff
  object Started #ffffff
  object Completed #ffffff

  Unassigned -u.-> Status
  Accepted -u.-> Status
  Started -u.-> Status
  Completed -u.-> Status

  Workspace "1,1" -r-> "0,*" Project
  Project "1,1" -r-> "0,*"  Board
  Board "1,1" -r-> "0,*"  Task
  Status "1.1" -u-> "0.*" Task

  Action "0*" --> "1,1" Workspace
  Action "0,*" --> "1,1"  Project
  Action "0*" --> "1,1" Board
  Action "0*" --> "1,1" Task
}

@enduml

## Реляційна схема

<img src="../../database_scheme.png"/>
