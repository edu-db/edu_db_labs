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
usecase "<b>Users Management</b>\nКерування користувачами" as UserManagement
usecase "<b>Support</b>\nСлужба підтримки" as Support
Admin --> SystemControll
Admin --> UserManagement
Admin --> Support
Admin -u-|> Teamlead

@enduml

</center>

### Колаборатор

<center style="
            border-radius:4px;
            border: 1px solid #cfd7e6;
            box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
            padding: 1em;">

@startuml

actor "Колаборатор" as Collaborator

usecase "<b>Sign Up</b>\nРегістрація" as Registration 
usecase "<b>Sign In</b>\nАвторизація у систему" as Login 
usecase "<b>Edit Profile</b>\nРедагування профілю користувача" as EditProfile
usecase "<b>Task Management</b>\nУправління тасками" as TaskManagement
usecase "<b>Create Task</b>\nСтворити таску" as CreateTask
usecase "<b>Edit Task</b>\nРедагувати таску" as EditTask
usecase "<b>Delete Task</b>\nВидалити таску" as DeleteTask

Collaborator -l-> Registration
Collaborator -r-> Login
Collaborator -u-> EditProfile
Collaborator -d-> TaskManagement
TaskManagement <.d. CreateTask
TaskManagement <.d. EditTask
TaskManagement <.d. DeleteTask

@enduml

</center>

### Тімлід

<center style="
            border-radius:4px;
            border: 1px solid #cfd7e6;
            box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
            padding: 1em;">

@startuml

actor "Тімлід" as Teamlead

usecase "<b>Project Management</b>\nКерування проектами" as ProjectManagement
usecase "<b>Create Project</b>\nСтворити проект" as CreateProject 
usecase "<b>Edit Project</b>\nРедагувати проект" as EditProject 
usecase "<b>Delete Project</b>\nВидалити проект" as DeleteProject
usecase "<b>Archive Project</b>\nАрхівувати проект" as ArchiveProject
usecase "<b>Task Management</b>\nКерування тасками проекту" as TaskManagement
usecase "<b>Create Task</b>\nСтворити таску" as CreateTask
usecase "<b>Edit Task</b>\nРедагувати таску" as EditTask
usecase "<b>Delete Task</b>\nВидалити таску" as DeleteTask
usecase "<b>Team Management</b>\nКерування командою розробки проекту" as TeamManagement
usecase "<b>Add Collaborator</b>\nДобавити нового розробника у проект" as AddCollaborator
usecase "<b>Delete Collaborator</b>\nВидалити розробника з проект" as DeleteCollaborator

Teamlead -l-> ProjectManagement
ProjectManagement <.u. CreateProject
ProjectManagement <.u. EditProject
ProjectManagement <.u. DeleteProject
ProjectManagement <.l. ArchiveProject
ProjectManagement <.d. TaskManagement
TaskManagement <.d. CreateTask
TaskManagement <.d. EditTask
TaskManagement <.d. DeleteTask
Teamlead -r-> TeamManagement
TeamManagement <.u. AddCollaborator
TeamManagement <.d. DeleteCollaborator

@enduml

</center>

### Адміністратор

<center style="
            border-radius:4px;
            border: 1px solid #cfd7e6;
            box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
            padding: 1em;">

@startuml

actor "Адміністратор системи" as Admin

usecase "<b>System Controll</b>\nКерування системою" as SystemControll
usecase "<b>Ban User</b>\nЗаблокувати юзера системою" as BanUser
usecase "<b>Users Management</b>\nКерування користувачами" as UserManagement
usecase "<b>Assign Manager</b>\nЗмінити тімліда на проекті" as AssignManager
usecase "<b>Support</b>\nСлужба підтримки" as Support

Admin --> SystemControll
SystemControll <.d. BanUser
Admin --> UserManagement
UserManagement <.d. AssignManager
Admin -u-> Support

@enduml

</center>