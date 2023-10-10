# Модель прецедентів

**Діаграма прецедентів**

## Загальна схема

@startuml

    actor "Користувач" as User
    actor "Тімлід" as Teamlead
    actor "Замовник" as Customer
    actor "Розробник" as Developer

    usecase "<b>SignUp</b>\nРеєстрація" as SignUp
    usecase "<b>SignIn</b>\nАвторизація" as SignIn
    usecase "<b>CreateProject</b>\nСтворити новий проєкт" as CreateProject
    usecase "<b>DeleteProject</b>\nВидалити проєкт" as DeleteProject
    usecase "<b>ProjectManage</b>\nУправління проектом" as ProjectManage
    usecase "<b>PayServices</b>\nОплатити послуги розробки" as PayServices
    usecase "<b>LeaveReview</b>\nЗалишити відгук" as LeaveReview
    usecase "<b>DevelopersManage</b>\nКерування розробниками" as DevelopersManage
    usecase "<b>DevelopmentManage</b>\nУправління розробкою проекту" as DevelopmentManage
    usecase "<b>MakeChange</b>\nВнесення змін до проекту" as MakeChange

    Developer -u-> User
    Customer -u-> User
    Teamlead -u-> Developer

    User -u-> SignUp
    User -u-> SignIn
    User -u-> CreateProject
    User -u-> DeleteProject

    Customer -r->  ProjectManage
    Customer -->  PayServices
    Customer -->  LeaveReview

    Teamlead --> DevelopersManage
    Teamlead --> DevelopmentManage

    Developer -l-> MakeChange

@enduml

## Робітник

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml

    skinparam noteFontColor white

    actor "Розробник" as Collaborator

    usecase "<b>SignUp</b>\nРеєстрація" as SignUp
    usecase "<b>SignIn</b>\nВхід" as SignIn
    usecase "<b>TaskManage</b>\nКерувати завданнями" as TaskManage
    usecase "<b>ChangeTaskStatus</b>\nЗмінити статус завдання" as ChangeTaskStatus
    usecase "<b>SendingTaskForReview</b>\nНадіслати завдання для огляду" as SendingTaskForReview

    Collaborator -l-> SignUp
    Collaborator -r-> SignIn
    Collaborator -u-> TaskManage
    TaskManage <.u. ChangeTaskStatus:extends
    TaskManage <.u. SendingTaskForReview:extends

    note bottom of Collaborator #4e4e4e

        Робітник, як і всі користувачі може зареєструватися і авторизовуватись
        Також він має дозвіл змінювати статус і надсилати завдання для огляду
        для завдань які він робить.
    end note

@enduml

</center>

| ID                 | <span id=SignUp>`UserSignUp`</span>                                                                                                                                                                                                                                                                                                                                       |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Реєстрація.                                                                                                                                                                                                                                                                                                                                                               |
| Учасники:          | Користувач, Система.                                                                                                                                                                                                                                                                                                                                                      |
| Передумови:        | - Користувач не зареєстрований в системі.                                                                                                                                                                                                                                                                                                                                 |
| Результат:         | Користувач зареєстрований в системі.                                                                                                                                                                                                                                                                                                                                      |
| Виключні ситуації: | Користувач з таким ім'ям вже існує. <font color="red">SignUp_EX_UsernameExist</font><br> Логін Користувача недопустимий. <font color="red">SignUp_EX_UsernameNotAllowed</font><br> Користувач з таким email вже існує. <font color="red">SignUp_EX_EmailExist</font><br> Email користувача не допустимий або не існує. <font color="red">SignUp_EX_EmailNotAllowed</font> |

@startuml

    |Користувач|
    start;
    : Натискає кнопку "Реєстрація";

    |Система|
        : Відкриває форму реєстрації;

    |Користувач|
    : Вводить email, пароль, логін;
    : Натискає кнопку "Зареєструватися";

    |Система|
    : Реєструє Користувача в системі;
    note right #F08080
    <b> SignUp_EX_UsernameExist
    <b> SignUp_EX_UsernameNotAllowed
    <b> SignUp_EX_EmailExist
    <b> SignUp_EX_EmailNotAllowed
    end note

    : Надсилає підтвердження про реєстрацію;

    |Користувач|
    : Отримує підтверження про реєстрацію;
    stop;

@enduml

| ID                 | <span id=SignIn>`UserSignIn`</span>                                                                                                                                                              |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Авторизація.                                                                                                                                                                                     |
| Учасники:          | Користувач, Система.                                                                                                                                                                             |
| Передумови:        | - Користувач зареєстрований в системі.                                                                                                                                                           |
| Результат:         | Користувач авторизований в системі.                                                                                                                                                              |
| Виключні ситуації: | Користувача з таким ім'ям не існує. <font color="red">SignIn_EX_UsernameNotExist</font><br> Логін або email і пароль не співпадають. <font color="red">SignIn_EX_UsernamePasswordNotMatch</font> |

@startuml

    |Користувач|
    start;
    : Натискає кнопку "Авторизуватись".;

    |Система|
        : Відкриває форму авторизації;

    |Користувач|
    : Вводить email або логін і пароль;
    : Натискає кнопку "Зареєструватися";

    |Система|
    : Авторизовує Користувача в системі.;
    note right #F08080
    <b> SignIn_EX_UsernameNotExist
    <b> SignIn_EX_UsernamePasswordNotMatch
    end note

    : Надсилає підтвердження про авторизацію Користувача;

    |Користувач|
    : Отримує підтверження про авторизацію;
    stop;

@enduml

| ID                 | <span id=ChangeProjectStatus>`ChangeProjectStatus`</span>                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Змінити статус проекта.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Учасники:          | Замовник, Система.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Передумови:        | Проект існує в системі, замовник є власником проекту.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Результат:         | Статус проекта успішно змінений.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Виключні ситуації: | Замовник не є власником проекту. <font color="red">ChangeProjectStatus_EX_Unauthorized</font><br> Спроба змінити на недопустимий статус. <font color="red">ChangeProjectStatus_EX_InvalidStatus</font><br> Проект не знайдений в системі, спроба зміни статусу над неправильним проектом. <font color="red">ChangeProjectStatus_EX_ProjectNotFound</font><br> Виникла внутрішня помилка системи під час спроби зміни статусу проекта. <font color="red">ChangeProjectStatus_EX_InternalError</font> |

@startuml

    |Користувач|
    start;
    : Входить в систему;

    |Користувач|
    : Обирає конкретний проект, для якого він хоче змінити статус;
    note left #F08080
    <b> ChangeProjectStatus_EX_Unauthorized
    <b> ChangeProjectStatus_EX_ProjectNotFound
    end note

    |Користувач|
    : Обирає новий статус для проекта з доступних опцій;
    note left #F08080
    <b> ChangeProjectStatus_EX_InvalidStatus
    end note

    |Користувач|
    : Підтверджує зміну статусу проекта;
    note left #F08080
    <b> ChangeProjectStatus_EX_InternalError
    end note

    |Система|
    : Перевіряє, чи має замовник права на зміну статусу даного проекту
        та чи є новий статус допустимим для зміни.;

    : Система змінює статус проекта на новий;

    : Система автоматично надсилає повідомлення
    всім учасникам проекту про зміну статусу.;
    stop;

@enduml

| ID                 | <span id=DeleteDeveloper>`DeleteDeveloper`</span>                              |
|:-------------------|:-------------------------------------------------------------------------------|
| Назва:             | Видалити розробника                                                            |
| Учасники:          | Розробник, Тімлід, Система                                                     |
| Передумови:        | Тімлід авторизувався у системі                                                 |
| Результат:         | Розробника видалено                                                            |
| Виключні ситуації: | Розробника не існує. <font color="red">DeleteDeveloper_EX_NotExist </font><br> |

@startuml

    |Тімлід|
    start;
    : Відкриває меню розробників;

    |Тімлід|
    : Обирає потрібного розробника з списку;

    |Система|
    : Виділяє потрібного розробника;

    |Тімлід|
    : Натискає "Видалити";

    |Система|
    : Просить підтверження;

    |Тімлід|
    : Натискає "Так";
    
    |Система|
    : Перевіряє наявість розробника;
    note right #F08080
    <b> DeleteDeveloper_EX_NotExist
    end note
    : Система видаляє розробника;
    stop;

@enduml

| ID                 | <span id=ChangeStatus>`ChangeStatus`</span>                                       |
|:-------------------|:----------------------------------------------------------------------------------|
| Назва:             | Змінити статус розробки проєкту                                                   |
| Учасники:          | Тімлід, Система                                                                   |
| Передумови:        | Тімлід авторизувався у системі <br> Проєкт вже створено                           |
| Результат:         | Статус проєкту змінився                                                           |
| Виключні ситуації: | Проєкта не існує. <font color="red">ChangeStatus_EX_UnexistingProject </font><br> |

@startuml

    |Тімлід|
    start;
    : Відкриває меню проєктів;

    |Тімлід|
    : Натискає на кнопку "Змінити статус";

    |Система|
    : Пропонує можливі статуси проєкту;

    |Тімлід|
    : Обирає потрібний статус;

    |Система|
    : Просить підтверження;

    |Тімлід|
    : Натискає кнопку "Зберегти зміни";
    
    |Система|
    : Змінює статус проєкту;
    note right #F08080
    <b> ChangeStatus_EX_UnexistingProject
    end note
    stop;

@enduml

| ID                 | <span id=AddTask>`AddTask`</span>                                                                                                                          |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Додати нову задачу до проекту                                                                                                                              |
| Учасники:          | Тімлід, Система                                                                                                                                            |
| Передумови:        | Тімлід авторизувався у системі <br> Проєкт вже створено                                                                                                    |
| Результат:         | Задача додана до проекту                                                                                                                                   |
| Виключні ситуації: | Задача вже існує. <font color="red">ChangeStatus_EX_UnexistingProject </font><br> Дані містять помилку. <font color="red">AddTask_EX_ErrorData </font><br> |

@startuml

    |Тімлід|
    start;
    : Відкриває меню задач;

    |Тімлід|
    : Натискає на кнопку "Додати задачу";

    |Система|
    : Відкриває меню додавання задачі;

    |Тімлід|
    : Вводить дані для задачі;

    |Тімлід|
    : Натискає кнопку "Додати";
    
    |Система|
    : Перевіряє правильність даних;
    note right #F08080
    <b> AddTask_EX_ErrorData
    end note

    : Перевіряє дані задачі;
    note right #F08080
    <b> AddTask_EX_AlreadyAdd
    end note
    
    : Додає задачу;
    stop;

@enduml