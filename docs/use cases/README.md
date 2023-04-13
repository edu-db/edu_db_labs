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

    usecase "<b>TEAM.MANAGE</b>\nКерувати командою" as TEAM.MANAGE

    Teamlead -r-> TEAM.MANAGE
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

    usecase "<b>TEAM.MANAGE</b>\nКерувати командою" as TEAM.MANAGE
    usecase "<b>MEMBER.ADD</b>\nДодати користувача" as MEMBER.ADD
    usecase "<b>MEMBER.DELETE</b>\nВидалити користувача" as MEMBER.DELETE
    
    Teamlead -d-> TEAM.MANAGE
    MEMBER.ADD .u.> TEAM.MANAGE:extends
    MEMBER.DELETE .u.> TEAM.MANAGE:extends
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

| ID                 | <span id=USER.REGISTER>`USER.REGISTER`</span>|
| :----------------- | :----------- |
| Назва:             | Зареєструвати користувача|
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система|
| Передумови:        | Користувач не має облікового запису|
| Результат:         | Обліковий запис користувача|
| Виключні ситуації: | Користувач не заповнив обов'язкові поля реєстраційної форми EX.NO.REGISTRATION.DATA<br>Користувач вже зареєстрований у системі EX.ACCOUNT.ALREADY.EXISTS|
| Основний сценарій: | 1. Користувач натискає кнопку "Створити обліковий запис"<br>2. Користувач вводить реєстраційні дані<br>3. Користувач натискає кнопку "Зареєструватися" (можлива EX.NO.REGISTRATION.DATA)<br>4. Система перевіряє наявність облікового запису користувача (можлива EX.ACCOUNT.ALREADY.EXISTS)<br>5. Система створює новий обліковий запис<br>6. Система повідомляє користувача про успішну реєстрацію|

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Створити обліковий запис";
        
    |Система|
        : Виводить форму реєстрації;

    |Користувач|
        : Вводить реєстраційні дані;
        : Натискає кнопку "Зареєструватися";
        note right #ffaaaa
        <b> Можлива
        <b> EX.NO.REGISTRATION.DATA
        end note
        
    |Система|
        : Перевіряє наявність
        облікового запису користувача;
        note right #ffaaaa
        <b> Можлива
        <b> EX.ACCOUNT.ALREADY.EXISTS
        end note
        
        : Створює новий обліковий запис;
        : Повідомляє користувача 
        про успішну реєстрацію;

    |Користувач|
        stop;

@enduml

Сценарій використання №1 - реєстрація користувача в системі

</center>

| ID                 | <span id=USER.AUTHORIZE>`USER.AUTHORIZE`</span>|
| :----------------- | :----------- |
| Назва:             | Авторизувати користувача|
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система|
| Передумови:        | -Користувач зареєстрований у системі<br>-Користувач не авторизований у системі|
| Результат:         | Авторизація користувача|
| Виключні ситуації: | У авторизаційній формі не заповнені одне або більше полів EX.NO.AUTHORIZATION.DATA<br>Користувач не зареєстрований у системі EX.ACCOUNT.DOESNT.EXIST<br>Користувач ввів неправильний пароль EX.WRONG.PASSWORD|
| Основний сценарій: | 1. Користувач вводить авторизаційні дані<br>2. Користувач натискає кнопку "Увійти" (можлива EX.NO.AUTHORIZATION.DATA)<br>3. Система перевіряє наявність облікового запису користувача (можлива EX.ACCOUNT.DOESNT.EXIST)<br>4. Система перевіряє отримані авторизаційні дані (можлива EX.WRONG.PASSWORD)<br>5. Система авторизує користувача<br>6. Система повідомляє користувача про успішну авторизацію|

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start

    |Система|
        : Виводить форму авторизації;

    |Користувач|
        : Вводить авторизаційні дані;
        : Натискає кнопку "Увійти";
        note right #ffaaaa
        <b> Можлива
        <b> EX.NO.AUTHORIZATION.DATA
        end note
        
    |Система|
        : Перевіряє наявність облікового 
        запису користувача;
        note right #ffaaaa
        <b> Можлива
        <b> EX.ACCOUNT.DOESNT.EXIST
        end note
        
        : Перевіряє отримані авторизаційні дані;
        note right #ffaaaa
        <b> Можлива
        <b> EX.WRONG.PASSWORD
        end note
        
        : Авторизує користувача;
        : Повідомляє користувача про успішну авторизацію;

    |Користувач|
        stop;

@enduml

Сценарій використання №2 - авторизація користувача в системі

</center>

| ID                 | <span id=TASK.CREATE>`TASK.CREATE`</span>|
| :----------------- | :----------- |
| Назва:             | Створити завдання|
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система|
| Передумови:        | - Користувач авторизований<br>- Користувач обрав проект|
| Результат:         | Завдання створено|
| Виключні ситуації: | -Користувач не заповнив обов'язкові поля EX.TASK.NO.OBLIGATORY.DATA|
| Основний сценарій: | 1. Користувач натискає кнопку "Створити завдання"<br>2. Користувач вводить назву завдання(обов'язково), його опис, зазначає теги(todo/in progress/done/in rewiew), дедлайн, кому призначене завдання<br>3. Користувач натискає кнопку "Створити"<br>4. Система перевіряє наявність обов'язкових полів(можлива EX.TASK.NO.OBLIGATORY.DATA)<br>5. Система створює і відображає завдання у беклозі та на відповідних дошках<br>6. Система повідомляє тим, кому призначене завдання, інформацію про завдання|

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Створити завдання";

    |Система|
        : Виводить форму для створення завдання;

    |Користувач|
        : Вводить назву завдання(обов'язково),
        його опис, зазначає теги(todo/in progress/done/in rewiew),
        дедлайн, кому призначене завдання;
        : Натискає кнопку "Створити";

    |Система|
        : Перевіряє наявність обов'язкових полів;
        note right #ffaaaa
        <b> Можлива
        <b> EX.NO.AUTHORIZATION.DATA
        end note

    |Користувач|
        : Вводить авторизаційні дані;
        : Натискає кнопку "Увійти";
        note right #ffaaaa
        <b> Можлива
        <b> EX.TASK.NO.OBLIGATORY.DATA
        end note
        
    |Система|
        : Створює і відображає завдання у беклозі 
        та на відповідних дошках;
        : Повідомляє тим, кому призначене 
        завдання, інформацію про завдання;

    |Користувач|
        stop;

@enduml

Сценарій використання №3 - створення завдання

</center>

| ID                 | <span id=TASK.EDIT>`TASK.EDIT`</span>|
| :----------------- | :----------- |
| Назва:             | Редагувати завдання|
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система|
| Передумови:        | - Користувач авторизований<br>- Користувач обрав завдання|
| Результат:         | Завдання відредаговано|
| Виключні ситуації: | -Користувач не заповнив обов'язкові поля EX.TASK.NO.OBLIGATORY.DATA<br>-Завдання було видалене під час редагування EX.TASK.NOT.EXIST|
| Основний сценарій: | 1. Користувач натискає кнопку "Редагувати завдання"<br>2. Користувач редагує завдання<br>3. Користувач натискає кнопку "Зберегти"(можлива EX.TASK.NOT.EXIST)<br>4. Система перевіряє наявність обов'язкових полів(можлива EX.TASK.NO.OBLIGATORY.DATA)<br>5. Система зберігає зміни та відображає відредаговане завдання<br>6. Система повідомляє тим, кому призначене завдання, інформацію про завдання|

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Редагувати завдання";
        : Редагує завдання;
        : Натискає кнопку "Зберегти";
        note right #ffaaaa
        <b> Можлива
        <b> EX.TASK.NOT.EXIST
        end note

    |Система|
        : Перевіряє наявність обов'язкових полів;
        note right #ffaaaa
        <b> Можлива
        <b> EX.TASK.NO.OBLIGATORY.DATA
        end note
        : Зберігає зміни та відображає відредаговане завдання;
        : Система повідомляє тим, кому призначене 
        завдання, інформацію про завдання;
  
    |Користувач|
        stop;

@enduml

Сценарій використання №4 - редагування завдання

</center>
