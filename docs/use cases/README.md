# Модель прецедентів

### Загальна схема

<center style="
            border-radius:4px;
            border: 1px solid #cfd7e6;
            box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
            padding: 1em;">

@startuml

actor "Колаборатор" as Collaborator
usecase "<b>Sign Up</b>\nСтворити обліковий запис у системі" as Registration
usecase "<b>Sign In</b>\nУвійти у систему" as Login
usecase "<b>Edit Profile</b>\nРедагувати профіль" as EditProfile
usecase "<b>Task Management</b>\nКерування тасками" as TaskManagement
Collaborator --> Registration
Collaborator --> Login
Collaborator --> EditProfile
Collaborator --> TaskManagement

actor "Тімлід" as Teamlead
usecase "<b>Project Management</b>\nКерування проектом" as ProjectManagement
usecase "<b>Team Management</b>\nКерування командою" as TeamManagement
Teamlead --> ProjectManagement
Teamlead --> TeamManagement
Teamlead -u-|> Collaborator

actor "Адміністратор системи" as Admin
usecase "<b>System Controll</b>\nКерування системою" as SystemControll
usecase "<b>Data Management</b>\nКерування данними" as DataManagement
usecase "<b>Users Management</b>\nКерування користувачами" as UserManagement
usecase "<b>Support</b>\Служба підтримки" as Support
Admin --> SystemControll
Admin --> DataManagement
Admin --> UserManagement
Admin --> Support
Admin -u-|> Teamlead

@enduml

</center>