# Модель прецедентів

## Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
!theme cerulean-outline

    actor "Робітник" as Collaborator

    usecase "<b>USER.REGISTER</b>\nЗареєструватися" as USER.REGISTER
    usecase "<b>USER.AUTHORIZE</b>\nУвійти в систему" as USER.AUTHORIZE
    usecase "<b>TASK.MANAGE</b>\nКерувати завданнями" as TASK.MANAGE
    usecase "<b>DASHBOARD.DISPLAY</b>\nПереглядати прогрес проекту" as DASHBOARD.DISPLAY
    usecase "<b>TEAMLEAD.REQEST</b>\nВідправити запит\nбути тімлідом" as TEAMLEAD.REQEST

    Collaborator -r-> USER.REGISTER
    Collaborator -u-> USER.AUTHORIZE
    Collaborator -l-> TASK.MANAGE
    Collaborator -u-> DASHBOARD.DISPLAY
    Collaborator -u-> TEAMLEAD.REQEST


     note bottom of Collaborator #fff
    
        Робітник може у повній мірі керувати лише 
        <b>власними завданнями</b> та на призначених йому 
        завданнях він має можливість тільки <b>змінювати тег</b> 
        (todo/in progress/done/in rewiew).
        <b>Переглядати</b> та <b>коментувати</b> робітник може <b>всі</b> 
        <b>завдання проекту</b>.
    
    end note


    
    actor "Тімлід" as Teamlead

    usecase "<b>COMMAND.MANAGE</b>\nКерувати командою" as COMMAND.MANAGE

    Teamlead -r-> COMMAND.MANAGE
    Teamlead -u-|> Collaborator


    actor "Менеджер проектів" as Manager

    usecase "<b>PROJECT.MANAGE</b>\nКерувати проектом" as PROJECT.MANAGE
    usecase "<b>SPRINT.MANAGE</b>\nКерувати спринтом" as SPRINT.MANAGE
    usecase "<b>MEMBER.MANAGE</b>\nКерувати учасниками проекту" as MEMBER.MANAGE

    Manager -> PROJECT.MANAGE
    Manager -d-> SPRINT.MANAGE
    Manager -l-> MEMBER.MANAGE
    Manager -u-|> Teamlead


    actor "Адміністратор" as Admin
    
    usecase "<b>DATA.MANAGE</b>\nКерувати даними системи" as DATA.MANAGE

    Admin --> DATA.MANAGE
    Admin -u-|> Manager
@enduml
</center>

## Робітник

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
!theme cerulean-outline

    actor "Робітник" as Collaborator
     
    package "Обов'язкові дії для використання вcіх інших функцій системи"{
    usecase "<b>USER.REGISTER</b>\nЗареєструватися" as USER.REGISTER
    usecase "<b>USER.AUTHORIZE</b>\nУвійти в систему" as USER.AUTHORIZE
    }
    usecase "<b>TASK.MANAGE</b>\nКерувати завданнями" as TASK.MANAGE
    usecase "<b>TASK.CREATE</b>\nСтворити завдання" as TASK.CREATE
    usecase "<b>TASK.EDIT</b>\nРедагувати завдання" as TASK.EDIT
    usecase "<b>TASK.DELETE</b>\nВидалити завдання" as TASK.DELETE
    usecase "<b>TASK.VIEW</b>\nПереглядати завдання" as TASK.VIEW
    usecase "<b>СHANGE.VIEW</b>\nЗмінити вигляд" as СHANGE.VIEW
    usecase "<b>TASK.FILTER</b>\nВідфільтрувати завдання" as TASK.FILTER
    usecase "<b>TASK.СOMMENT</b>\nКоментувати завдання" as TASK.СOMMENT
    usecase "<b>DASHBOARD.DISPLAY</b>\nПереглядати прогрес проекту" as DASHBOARD.DISPLAY
    usecase "<b>TEAMLEAD.REQUEST</b>\nВідправити запит\nбути тімлідом" as TEAMLEAD.REQUEST
 
    Collaborator -r-> USER.REGISTER
    Collaborator -u-> USER.AUTHORIZE
    Collaborator --> TASK.MANAGE
    Collaborator --> DASHBOARD.DISPLAY
    Collaborator -l-> TEAMLEAD.REQUEST

    TASK.CREATE .u.> TASK.MANAGE:extends
    TASK.EDIT .u.> TASK.MANAGE:extends
    TASK.DELETE .u.> TASK.MANAGE:extends
    TASK.VIEW ..> TASK.MANAGE:extends
    СHANGE.VIEW ..> TASK.VIEW:extends
    TASK.FILTER ..> TASK.VIEW:extends
    TASK.FILTER ..> TASK.FILTER:extends
    TASK.FILTER .l.> СHANGE.VIEW:includes
    TASK.СOMMENT .l.> TASK.MANAGE:extends

     note right of Collaborator #fff
    
        Робітник може у повній мірі керувати лише 
        <b>власними завданнями</b> та на призначених йому 
        завданнях він має можливість тільки <b>змінювати тег</b> 
        (todo/in progress/done/in rewiew).
        <b>Переглядати</b> та <b>коментувати</b> робітник може <b>всі</b> 
        <b>завдання проекту</b>.
    
    end note
@enduml

</center>

## Тімлід

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
!theme cerulean-outline
    actor "Тімлід" as Teamlead

    usecase "<b>COMMAND.MANAGE</b>\nКерувати командою" as COMMAND.MANAGE
    usecase "<b>MEMBER.ADD</b>\nДодати користувача" as MEMBER.ADD
    usecase "<b>MEMBER.DELETE</b>\nВидалити користувача" as MEMBER.DELETE
    
    Teamlead -d-> COMMAND.MANAGE
    MEMBER.ADD .u.> COMMAND.MANAGE:extends
    MEMBER.DELETE .u.> COMMAND.MANAGE:extends
@enduml
</center>

## Менеджер проекту

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
!theme cerulean-outline
    actor "Менеджер проектів" as Manager

    usecase "<b>PROJECT.MANAGE</b>\nКерувати проектом" as PROJECT.MANAGE
  
      usecase "<b>CREATE.PROJECT</b>\nСтворити проект" as CREATE.PROJECT
    usecase "<b>DELETE.PROJECT</b>\nВидалити проект" as DELETE.PROJECT

    usecase "<b>SPRINT.MANAGE</b>\nКерувати спринтом" as SPRINT.MANAGE

    usecase "<b>CREATE.SPRINT</b>\nСтворити спринт" as CREATE.SPRINT
    usecase "<b>FINISH.SPRINT</b>\nЗавершити спринт" as FINISH.SPRINT

    usecase "<b>MEMBER.MANAGE</b>\nКерувати учасниками проекту" as MEMBER.MANAGE

    usecase "<b>TEAMLEAD.APPROVE</b>\nПідтвердити запит учасника\nпроекту бути тімлідом" as TEAMLEAD.APPROVE
    usecase "<b>TEAMLEAD.DECLINE</b>\nВідхилити запит учасника\nпроекту бути тімлідом" as TEAMLEAD.DECLINE
    usecase "<b>MEMBER.ADD</b>\nДодати користувача" as MEMBER.ADD
    usecase "<b>MEMBER.DELETE</b>\nВидалити користувача" as MEMBER.DELETE
 
    Manager -d-> PROJECT.MANAGE
    Manager -r-> SPRINT.MANAGE
    Manager -l-> MEMBER.MANAGE
    MEMBER.ADD .u.> MEMBER.MANAGE:extends
    MEMBER.DELETE .u.> MEMBER.MANAGE:extends
    CREATE.SPRINT .d.> SPRINT.MANAGE:extends
    FINISH.SPRINT .l.> SPRINT.MANAGE:extends
    TEAMLEAD.APPROVE .d.> MEMBER.MANAGE:extends
    TEAMLEAD.DECLINE .d.> MEMBER.MANAGE:extends
    CREATE.PROJECT .u.> PROJECT.MANAGE:extends
    CREATE.PROJECT .u.> CREATE.PROJECT:extends
    DELETE.PROJECT .l.> PROJECT.MANAGE:extends
@enduml
</center>


## Адміністратор

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
!theme cerulean-outline
    actor "Адміністратор" as Admin
    usecase "<b>DATA.MANAGE</b>\nКерувати даними системи" as DATA.MANAGE
    usecase "<b>USER.BAN</b>\nЗаблокувати користувача" as USER.BAN 
    usecase "<b>USER.UNBAN</b>\nРозблокувати користувача" as USER.UNBAN
    Admin -d-> DATA.MANAGE
    USER.BAN .u.> DATA.MANAGE:extends
    USER.UNBAN .u.> DATA.MANAGE:extends
@enduml
</center>

---

# Cценарії використання
