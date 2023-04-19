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

| ID                 | <span id=USER.REGISTER>`USER.REGISTER`</span>                                                                                                            |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Зареєструвати користувача                                                                                                                                |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                                                                              |
| Передумови:        | Користувач не має облікового запису                                                                                                                      |
| Результат:         | Обліковий запис користувача                                                                                                                              |
| Виключні ситуації: | Користувач не заповнив обов'язкові поля реєстраційної форми EX.NO.REGISTRATION.DATA<br>Користувач вже зареєстрований у системі EX.ACCOUNT.ALREADY.EXISTS |

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
        : Заповнює форму реєстрації;
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

Сценарій використання №1 - зареєструвати користувача в системі

</center>

| ID                 | <span id=USER.AUTHORIZE>`USER.AUTHORIZE`</span>                                                                                                                                                               |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Назва:             | Авторизувати користувача                                                                                                                                                                                      |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                                                                                                                                   |
| Передумови:        | -Користувач зареєстрований у системі<br>-Користувач не авторизований у системі                                                                                                                                |
| Результат:         | Авторизація користувача                                                                                                                                                                                       |
| Виключні ситуації: | У авторизаційній формі не заповнені одне або більше полів EX.NO.AUTHORIZATION.DATA<br>Користувач не зареєстрований у системі EX.ACCOUNT.DOESNT.EXIST<br>Користувач ввів неправильний пароль EX.WRONG.PASSWORD |

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
        : Заповнює форму авторизації;
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

        : Перевіряє заповнену форму авторизації;
        note right #ffaaaa
        <b> Можлива
        <b> EX.WRONG.PASSWORD
        end note

        : Авторизує користувача;
        : Повідомляє користувача про успішну авторизацію;

    |Користувач|
        stop;

@enduml

Сценарій використання №2 - авторизувати користувача в системі

</center>

| ID                 | <span id=TASK.CREATE>`TASK.CREATE`</span>                          |
| :----------------- | :----------------------------------------------------------------- |
| Назва:             | Створити завдання                                                  |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система        |
| Передумови:        | - Користувач авторизований<br>- Користувач обрав проект            |
| Результат:         | Завдання створено                                                  |
| Виключні ситуації: | Користувач не заповнив обов'язкові поля EX.TASK.NO.OBLIGATORY.DATA |

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


    |Система|
        : Створює і відображає завдання у беклозі
        та на відповідних дошках;
        : Повідомляє тим, кому призначене
        завдання, інформацію про завдання;

    |Користувач|
        stop;

@enduml

Сценарій використання №3 - створити завдання

</center>

| ID                 | <span id=TASK.EDIT>`TASK.EDIT`</span>                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Редагувати завдання                                                                                                                |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                                                        |
| Передумови:        | - Користувач авторизований<br>- Користувач обрав завдання                                                                          |
| Результат:         | Завдання відредаговано                                                                                                             |
| Виключні ситуації: | Користувач не заповнив обов'язкові поля EX.TASK.NO.OBLIGATORY.DATA<br>Завдання було видалене під час редагування EX.TASK.NOT.EXIST |

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

    |Система|
        : Виводить форму для редагування завдання;

    |Користувач|
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
        : Повідомляє тим, кому призначене
        завдання, інформацію про завдання;

    |Користувач|
        stop;

@enduml

Сценарій використання №4 - редагувати завдання

</center>

| ID                 | <span id=TASK.DELETE>`TASK.DELETE`</span>                                                                      |
| :----------------- | :------------------------------------------------------------------------------------------------------------- |
| Назва:             | Видалити завдання                                                                                              |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                                    |
| Передумови:        | - Користувач авторизований<br>- Користувач обрав завдання                                                      |
| Результат:         | Завдання видалено                                                                                              |
| Виключні ситуації: | Натиснута кнопка "Скасувати" EX.CANCEL<br>Користувач не має прав на видалення даного завдання EX.ACCESS.DENIED |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Видалити завдання";

    |Система|
        : Виводить вікно для підтвердження видалення;

    |Користувач|
        : Натискає кнопку "Підтвердити";
        note right #ffaaaa
        <b> Можлива
        <b> EX.CANCEL
        end note

    |Система|
        : Перевіряє чи користувач має права на видалення;
        note right #ffaaaa
        <b> Можлива
        <b> EX.ACCESS.DENIED
        end note
        : Система видаляє завдання;
    |Користувач|
        stop;

@enduml

Сценарій використання №5 - видалити завдання

</center>

| ID                 | <span id=DASHBOARD.DISPLAY>`DASHBOARD.DISPLAY`</span> |
| :----------------- | :---------------------------------------------------- |
| Назва:             | Відобразити дашборд                                   |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник)    |
| Передумови:        | -Користувач авторизований<br>-Користувач обрав проект |
| Результат:         | Поточна інформація про проект у вигляді дашборду      |
| Виключні ситуації: | Відсутні                                              |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Dashboard";

    |Система|
        : Виводить список можливих компонентів дашборду;

    |Користувач|
        : Обирає потрібні елементи дашборду;
        : Натискає кнопку "Далі";


    |Система|
        : Виводить поточну інформацію про проект у вигляді дашборду;


    |Користувач|
        stop;

@enduml

Сценарій використання №6 - відобразити дашборд

</center>

| ID                 | <span id=СHANGE.VIEW>`СHANGE.VIEW`</span>                                                            |
| :----------------- | :--------------------------------------------------------------------------------------------------- |
| Назва:             | Змінити вигляд                                                                                       |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                          |
| Передумови:        | -Користувач авторизований<br>-Користувач обрав проект<br>-Користувач перейшов у розділ блоку завдань |
| Результат:         | Змінений вигляд відображення завдань                                                                 |
| Виключні ситуації: | Відсутні                                                                                             |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "View";

    |Система|
        : Повідомляє про поточний тип відображення\n (Backlog/Kanban/Scrum/Roadmap);

    |Користувач|
        : Обирає тип відображення;


    |Система|
        : Змінює вигляд відображення завдань;


    |Користувач|
        stop;

@enduml

Сценарій використання №7 - змінити вигляд

</center>

| ID                 | <span id=TASK.FILTER>`TASK.FILTER`</span>                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------ |
| Назва:             | Відфільтрувати завдання                                                                                       |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                                   |
| Передумови:        | -Користувач авторизований<br>-Користувач обрав проект<br>-Користувач обрав тип відображення завдань "Backlog" |
| Результат:         | Відфільтровані завдання                                                                                       |
| Виключні ситуації: | У проекті нема жодних завдань EX.NO.TASKS                                                                     |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Filter";
        note left #ffaaaa
        <b> Можлива
        <b> EX.NO.TASKS
        end note

    |Система|
        : Виводить список критеріїв фільтрування;

    |Користувач|
        : Обирає критерій фільтрування;


    |Система|
        : Відображає відфільтровані завдання;

    |Користувач|
        stop;

@enduml

Сценарій використання №8 - відфільтрувати завдання

</center>

| ID                 | <span id=TASK.СOMMENT>`TASK.СOMMENT`</span>                                                                             |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Коментувати завдання                                                                                                    |
| Учасники:          | Користувач (менеджер проекту, тімлід або робітник), система                                                             |
| Передумови:        | -Користувач авторизований<br>-Користувач обрав проект<br>-Користувач обрав завдання                                     |
| Результат:         | Коментар до завдання                                                                                                    |
| Виключні ситуації: | Завдання було видалене під час написання коментарію EX.TASK.NOT.EXIST<br>Користувач відмінив операцію EX.CANCEL.COMMENT |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Comment";

    |Система|
        : Виводить поле для написання коментарію;

    |Користувач|
        : Пише коментарій;
        note left #ffaaaa
        <b> Можлива
        <b> EX.CANCEL.COMMENT
        end note
        : Натискає кнопку "Save";
        note left #ffaaaa
        <b> Можлива
        <b> EX.TASK.NOT.EXIST
        end note

    |Система|
        : Зберігає коментарій;
        : Повідомляє інших учасників\n цього завдання про новий коментарій;
    |Користувач|
        stop;

@enduml

Сценарій використання №9 - коментувати завдання

</center>

| ID                 | <span id=USER.BAN>`USER.BAN`</span>                                                              |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| Назва:             | Заблокувати користувача                                                                          |
| Учасники:          | Адміністратор системи, користувач, система                                                       |
| Передумови:        | -Користувач порушив правила проекту<br>-Забезпечення безпеки та ефективної роботи системи        |
| Результат:         | Користувач заблокований                                                                          |
| Виключні ситуації: | Користувача вже заблоковано EX.USER.ALREADY.BANNED<br>Натиснута кнопка "Відміна" EX.PRESS.CANCEL |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Адміністратор натискає кнопку "Заблокувати учасинка";

    |Система|
        : Система відправляє форму для блокування;

    |Користувач|
        : Заповнює всі поля форми;
        : Адміністратор натискає кнопку "Заблокувати учасинка";

    |Система|
        : Перевіряє чи всі поля в формі заповнені;
        note right #ffaaaa
        <b> Можлива
        <b> EX.PRESS.CANCEL
        end note
        : Перевіряє чи вказаний користувач не заблокований у системі;
        note right #ffaaaa
        <b> Можлива
        <b> EX.USER.ALREADY.BANNED
        end note
        : Надсилає сповіщення користувачу про блокування;
        : Відображає користувача у списку заблокованих;

    |Користувач|
        stop;

@enduml

Сценарій використання №10 - заблокувати користувача

</center>

| ID                 | <span id=USER.UNBAN>`USER.UNBAN`</span>    |
| :----------------- | :----------------------------------------- |
| Назва:             | Розблокувати користувача                   |
| Учасники:          | Адміністратор системи, користувач, система |
| Передумови:        | Користувач заблокований                    |
| Результат:         | Розблокування акаунта користувача          |
| Виключні ситуації: | Натиснута кнопка "Відміна" EX.PRESS.CANCEL |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Адміністратор натискає кнопку "Розблокувати учасинка";

    |Система|
        : Система відправляє форму для розблокування;

    |Користувач|
        : Заповнює всі поля форми;
        : Адміністратор натискає кнопку "Розблокувати учасинка";

    |Система|
        : Перевіряє чи всі поля в формі заповнені;
        note right #ffaaaa
        <b> Можлива
        <b> EX.PRESS.CANCEL
        end note
        : Надсилає сповіщення користувачу про розблокування;
        : Відображає користувача у списку розблокованих;

    |Користувач|
        stop;

@enduml

Сценарій використання №11 - розблокувати користувача

</center>

| ID                 | <span id=MEMBER.ADD>`MEMBER.ADD`</span>                                                                                 |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Додати користувача до проекту                                                                                           |
| Учасники:          | Користувач (менеджер проекту, тімлід), система                                                                          |
| Передумови:        | -Користувач авторизований<br>-Користувач обрав проект<br>-Користувач має необхідні права доступу до функціоналу системи |
| Результат:         | Обраний користувач стає учасником проекту/додається до команди                                                          |
| Виключні ситуації: | Такого користувача не існує EX.USER_DONT_EXISTS<br>Користувач вже є учасником проєкту EX.USER_IS_ALREADY_MEMBER         |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Натискає кнопку "Додати учасника";

    |Система|
        : Виводить вікно форми для додавання учасника до проекту;

    |Користувач|
        : Вводить username або адресу електронної пошти учасника;
        : Користувач натискає кнопку "Додати учасника";

    |Система|
        : Перевіряє чи вказаний користувач зареєстрований у системі;
        note right #ffaaaa
        <b> Можлива
        <b> EX.USER_DONT_EXISTS
        end note
        : Перевіряє чи користувач не є учасником проекту;
        note right #ffaaaa
        <b> Можлива
        <b> EX.USER_IS_ALREADY_MEMBER
        end note
        : Надсилає сповіщення користувачу про призначення до проекту/команди;
        : Надсилає сповіщення про успішне призначення користувача;
        : Відображає користувача у списку учасників проекту/команди;

    |Користувач|
        stop;

@enduml

Сценарій використання №12 - додати користувача

</center>

| ID                 | <span id=MEMBER.DELETE>`MEMBER.DELETE`</span>                                                                                |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Видалити користувача з проекту                                                                                               |
| Учасники:          | Користувач (менеджер проекту, тімлід), система                                                                               |
| Передумови:        | -Користувач обрав проект<br>-Користувач має необхідні права доступу до функціоналу системи<br>-Існують інші учасники проекту |
| Результат:         | Користувач більше не учасник проекту                                                                                         |
| Виключні ситуації: | Натиснута кнопка "Відмінити" EX.CANCEL_DELETE_MEMBER<br>Користувач не має прав для видалення учасника EX.PERMISION_DENIED    |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Відкриває список учасників проекту;

    |Система|
        : Виводить список учасників проекту;

    |Користувач|
        : Ставить "галочку" біля вибраного учасника;
        : Користувач нажимає кнопку "Видалити";
        note left #ffaaaa
        <b> Можлива
        <b> EX.PERMISION_DENIED
        end note

    |Система|
        : Надсилає діалогове вікно з метою підтвердити видалення;
        note right #ffaaaa
        <b> Можлива
        <b> EX.CANCEL_DELETE_MEMBER
        end note

    |Користувач|
        : Підтверджує видалення учасника;

    |Система|
        : Надсилає сповіщення про успішне видалення учасника проекту;
        : Не відображає користувача у списку учасників проекту;

    |Користувач|
        stop;

@enduml

Сценарій використання №13 - видалити користувача

</center>

| ID                 | <span id=CREATE.PROJECT>`CREATE.PROJECT`</span>                                                                                                     |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Створити проект                                                                                                                                     |
| Учасники:          | Користувач (менеджер проекту, тімлід), система                                                                                                      |
| Передумови:        | Користувач авторизований                                                                                                                            |
| Результат:         | Новий проект створений у системі                                                                                                                    |
| Виключні ситуації: | Проект з такою назвою вже існує EX.PROJECT_NAME_EXISTS<br>Користувач ввів некоректні дані EX.INVALID_DATA<br>Натиснута кнопка "Скасувати" EX.CANCEL |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Нажимає кнопку "Створити новий проект";

    |Система|
        : Виводить вікно форми для створення проекту;

    |Користувач|
        : Користувач заповнює поля форми;

    |Система|
        : Перевіряє коректність введених даних;
        note right #ffaaaa
        <b> Можлива
        <b> EX.INVALID_DATA
        end note

    |Користувач|
        : Користувач нажимає кнопку "Створити";
        note left #ffaaaa
        <b> Можлива
        <b> EX.CANCEL
        end note

    |Система|
        : Перевіряє чи не існує проект з такою назвою;
        note right #ffaaaa
        <b> Можлива
        <b> EX.PROJECT_NAME_EXISTS
        end note
        : Система створює проект;
        : Повідомляє користувача про успішне створення проекту;
        : Відкриває новостворений проект;

    |Користувач|
        stop;

@enduml

Сценарій використання №14 - створити проект

</center>

| ID                 | <span id=DELETE.PROJECT>`DELETE.PROJECT`</span>                                                            |
| :----------------- | :--------------------------------------------------------------------------------------------------------- |
| Назва:             | Видалити проект                                                                                            |
| Учасники:          | Користувач (менеджер проекту), система                                                                     |
| Передумови:        | Існує проект                                                                                               |
| Результат:         | Проект створений у системі                                                                                 |
| Виключні ситуації: | Користувач не має прав на видалення проекту EX.PERMISION.DENIED<br>Проекту не існує EX.PROJECT_DONT_EXISTS |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Нажимає кнопку "Видалити проект";

    |Система|
        : Система перевіряє права користувача;
        note right #ffaaaa
        <b> Можлива
        <b> EX.PERMISION.DENIED
        end note
        : Відкриває вікно для підтвердження видалення;
        note right #ffaaaa
        <b> Можлива
        <b> EX.CANCEL
        end note

    |Користувач|
        : Користувач нажимає кнопку "Видалити";

    |Система|
        : Система видаляє проект;
        : Повідомляє користувача про успішне видалення проекту;

    |Користувач|
        stop;

@enduml

Сценарій використання №15 - видалити проект

</center>

| ID                 | <span id=CREATE.SPRINT>`CREATE.SPRINT`</span> |
| :----------------- | :-------------------------------------------- |
| Назва:             | Створити спринт                               |
| Учасники:          | Користувач (менеджер проекту)                 |
| Передумови:        | Користувач авторизований                      |
| Результат:         | Спринт створено                               |
| Виключні ситуації: | Натиснута кнопка "Скасувати" EX.CANCEL        |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Переходить до типу відображення завдань "Scrum";
        : Натискає кнопку "Cтворити спринт";

    |Система|
        : Виводить форму для створення спринта та беклог завдань;

    |Користувач|
        : Вводить ім'я спринта, дату початку, дату завершення та ціль;
        : Натискає на кнопку "Почати спринт";
        note left #ffaaaa
        <b> Можлива
        <b> EX.CANCEL
        end note

    |Система|
        : Відображає спринт у розділі "Активні спринти";
        : Повідомляє учасникам спринту інформацію про спринт;
    |Користувач|
        stop;

@enduml

Сценарій використання №16 - створити спринт

</center>

| ID                 | <span id=FINISH.SPRINT>`FINISH.SPRINT`</span> |
| :----------------- | :-------------------------------------------- |
| Назва:             | Завершити спринт                              |
| Учасники:          | Користувач (менеджер проекту)                 |
| Передумови:        | Користувач авторизований                      |
| Результат:         | Спринт завершено                              |
| Виключні ситуації: | Натиснута кнопка "Скасувати" EX.CANCEL        |

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Переходить до типу відображення завдань "Scrum";
        : Обирає спринт;
        : Користувач натискає кнопку "Завершити спринт";

    |Система|
        : Виводить вікно для підтвердження;

    |Користувач|
        : Підтверджує завершення спринта;
        note left #ffaaaa
        <b> Можлива
        <b> EX.CANCEL
        end note

    |Система|
        : Відображає спринт у розділі "Завершені спринти";
        : Повідомляє учасників спринта про його завершення;
    |Користувач|
        stop;

@enduml

Сценарій використання №17 - завершити спринт

</center>
