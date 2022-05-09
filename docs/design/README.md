# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
@startuml
entity User {
email: TEXT
password: TEXT
name: TEXT
role: TEXT(enum:"TEAMLEAD", "PROJECT MANAGER", "DEVELOPER", "USER")
}

entity Project {
name: TEXT
description: TEXT
}

entity ProjectPack {
}


entity Action {
actedAt: DATETIME
status: TEXT(enum:"TO DO", "IN PROGRESS", "RESOLVED", "DONE")
}

entity Task{
name : TEXT
description: TEXT
dependence: INT
deadline: DATE
}

Entity Artifact{
name: TEXT
description: TEXT
link: TEXT
}


User "(0,*)" -- "(1,1)" Project
User "(1,1)" <--> "(0,*)" ProjectPack
Project "(0,*)" <--> "(1,1)" ProjectPack
Action "(1,1)" -- "(0,*)" Task
Action "(0,*)" -- "(1,1)" User
Task "(1,1)" -- "(0,*)" Project
Artifact "(0,*)" -- "(1,1)" Task


@enduml
- реляційна схема

