# ER-модель

<center style="
    border-radius:12px;
    border: 3px solid #99ffcc;
    padding: 0.7em;"
>

@startuml
entity Project{
    projectid: UUID
    name: TEXT
    description: TEXT
}

entity Projectmembers{
    userid: UUID
    projectid: UUID
}

entity Profile{
    userid: UUID
    username: TEXT
    password: TEXT
    email: TEXT
    pfp: IMAGE
    Roletype_role: UUID
}

entity Roletype <<ENUMERATION>>{
    role: UUID
    role_name: TEXT
}

entity Chatmembers{
    userid: UUID
    chatid: UUID
}

entity Chat{
    chatid: UUID
    username: TEXT
    message: TEXT
    tittle: TEXT
}

entity Support{
    chatid: UUID
    userid: UUID
    tittle: TEXT
    description: TEXT
    Statustype_status: INT
}

entity Statustype <<ENUMERATION>>{
    status: UUID
    statusname: TEXT
}

Projectmembers "0,*" --> "1,1" Project
Profile "*,*" --> Projectmembers
Roletype "0,*" --> "1,1" Profile
Profile "*,*" --> Chatmembers
Chatmembers "0,*" --> "1,1" Chat
Support "0,*" --> "1,1" Chat
Support "0,*" <-- "1,1" Profile
Statustype <-- "1,1" Support

@enduml

**ER-модель**

</center>