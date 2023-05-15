# Модель бізнес-об'єктів


<center style="
    border-radius:12px;
    border: 3px solid #99ffcc;
    padding: 0.7em;"
>

@startuml

entity Profile #ffff33
entity Profile.username
entity Profile.password
entity Profile.email
entity Profile.pfp
entity Profile.role

Profile.username -u-* Profile
Profile.password -u-* Profile
Profile.email -u-* Profile
Profile.pfp -u-* Profile
Profile.role -u-* Profile

entity Administrator
entity User
entity SupportUser

Administrator -d-|> Profile
User -d-|> Profile
SupportUser -d-|> Profile

entity Project #ffff33
entity Project.name
entity Project.description
entity Project.administrator
entity Project.team

Project.name -d-* Project
Project.description -d-* Project
Project.administrator -d-* Project
Project.team -d-* Project

Profile "1.1" -l- "0.*" Project :administrator
Profile "0.*" -l- "0.*" Project :collaborator

entity Chat #ffff33
entity Chat.id
entity Chat.users
entity Chat.message
entity Chat.title

Chat.id -d-* Chat
Chat.users -d-* Chat
Chat.message -d-* Chat
Chat.title -d-* Chat

Profile "1.*" --r- "0.*" Chat

entity Support #ffff33
entity Support.chatid
entity Support.title
entity Support.description
entity Support.responsible
entity Support.status

Support.chatid -u-* Support
Support.title -u-* Support
Support.description -u-* Support
Support.responsible -u-* Support
Support.status -u-* Support

Profile "1.*" --d- "0.*" Support
Chat "1.*" --d- "1.1" Support

entity Status #ffff33
entity Status.type

Status.type -u-* Status

entity Unresolved
entity Resolved
entity InProgress

Unresolved -u-|> Status
InProgress -u-|> Status
Resolved -u-|> Status

Status "0.*" --u- "1.1" Support

right footer
    Аналітичний портал. Модель прецедентів.
    НТУУ КПІ ім.І.Сікорського
    Київ-2023
end footer

@enduml

**Модель бізнес-об'єктів**

</center>
