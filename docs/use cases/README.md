# Модель прецедентів

**Діаграма прецедентів**

## Загальна схема

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml

    actor "Користувач" as User
    actor "Тімлід" as Teamlead
    actor "Замовник" as Customer
    actor "Розробник" as Developer

    usecase "<b>SignUp</b>\nРеєстрація" as SignUp
    usecase "<b>SignIn</b>\nАвторизація" as SignIn
    usecase "<b>ProjectManage</b>\nУправління проектом" as ProjectManage
    usecase "<b>PayServices</b>\nОплатити послуги розробки" as PayServices
    usecase "<b>LeaveReview</b>\nЗалишити відгук" as LeaveReview
    usecase "<b>DevelopersManage</b>\nКерування розробниками" as DevelopersManage
    usecase "<b>DevelopmentManage</b>\nУправління розробкою проекту" as DevelopmentManage
    usecase "<b>TaskManage</b>\nКерування завданнями проєкту" as TaskManage

    Developer -u-> User
    Customer -u-> User
    Teamlead -u-> Developer

    User -u-> SignUp
    User -u-> SignIn

    Customer -r->  ProjectManage
    Customer -->  PayServices
    Customer -->  LeaveReview

    Teamlead --> DevelopersManage
    Teamlead --> DevelopmentManage

    Developer -l-> TaskManage

@enduml

</center>

## Замовник

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml

    skinparam noteFontColor white

    actor "Замовник" as Customer

    usecase "<b>SignUp</b>\nРеєстрація" as SignUp
    usecase "<b>SignIn</b>\nВхід" as SignIn
    usecase "<b>PayServices</b>\nОплатити послуги розробки" as PayServices
    usecase "<b>LeaveReview</b>\nЗалишити відгук" as LeaveReview
    usecase "<b>ProjectManage</b>\nУправління проєктом" as ProjectManage #a28de3
    usecase "<b>CreateProject</b>\nСтворити проєкт" as CreateProject
    usecase "<b>DeleteProject</b>\nВидалити проєкт" as DeleteProject
    usecase "<b>ChangeProjectStatus</b>\nЗміна статусу проекта" as ChangeProjectStatus
    usecase "<b>TrackDevelopmentStatus</b>\nВідстежити статус розробки" as TrackDevelopmentStatus

    Customer -r-> SignUp
    Customer -l-> SignIn
    Customer --> PayServices
    Customer --> LeaveReview
    Customer -u-> ProjectManage
    ProjectManage <.u. CreateProject:extends
    ProjectManage <.u. DeleteProject:extends
    ProjectManage <.r. ChangeProjectStatus:extends
    ProjectManage <.l. TrackDevelopmentStatus:extends

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

## Тімлід

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml

    skinparam noteFontColor white

    actor "Тімлід" as Teamlead

    usecase "<b>SignUp</b>\nРеєстрація" as SignUp
    usecase "<b>SignIn</b>\nВхід" as SignIn
    usecase "<b>DevelopmentManage</b>\nУправління розробкою\n проєкту" as DevelopmentManage
    usecase "<b>DevelopersManage</b>\nКерування\n розробниками" as DevelopersManage
    usecase "<b>AddDeveloper</b>\nДодати розробника" as AddDeveloper
    usecase "<b>DeleteDeveloper</b>\nВидалити розробника" as DeleteDeveloper
    usecase "<b>SetDeveloper</b>\nПоставити розробника\n на завдання" as SetDeveloper
    usecase "<b>ChangeProjectStatus</b>\nЗмінити сатус\n розробки проєкту" as ChangeProjectStatus
    usecase "<b>ChangeTaskStatus</b>\nЗмінити сатус\n завдання" as ChangeTaskStatus
    usecase "<b>AddTask</b>\nДодати нову\n задачу" as AddTask
    usecase "<b>RemoveTask</b>\nВидалити існуючу\n задачу" as RemoveTask

    Teamlead -d-> SignUp
    Teamlead -d-> SignIn
    Teamlead -u-> DevelopersManage
    Teamlead -u-> DevelopmentManage
    DevelopersManage <.u. AddDeveloper:extends
    DevelopersManage <.l. DeleteDeveloper:extends
    DevelopersManage <.u. SetDeveloper:extends
    DevelopmentManage <.d. AddTask:extends
    DevelopmentManage <.u. ChangeTaskStatus:extends
    DevelopmentManage <.u. ChangeProjectStatus:extends
    DevelopmentManage <.r. RemoveTask:extends

@enduml

</center>

## Сценарії використання

| ID                 | <span id=SignUp>`SignUp`</span>                                                                                                                                                                                                                                                                                                                                           |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
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
    : Реєструє Користувача в системі
    <font color="red"><b> SignUp_EX_UsernameExist
    <font color="red"><b> SignUp_EX_UsernameNotAllowed
    <font color="red"><b> SignUp_EX_EmailExist
    <font color="red"><b> SignUp_EX_EmailNotAllowed;
    
    : Надсилає підтвердження про реєстрацію;

    |Користувач|
    : Отримує підтверження про реєстрацію;
    stop;

@enduml

| ID                 | <span id=SignIn>`SignIn`</span>                                                                                                                                                                  |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
    : Авторизовує Користувача в системі
    <font color="red"><b> SignIn_EX_UsernameNotExist
    <font color="red"><b> SignIn_EX_UsernamePasswordNotMatch;
    
    : Надсилає підтвердження про авторизацію Користувача;

    |Користувач|
    : Отримує підтверження про авторизацію;
    stop;

@enduml

| ID                 | <span id=CreateProject>`CreateProject`</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Назва:             | Створити новий проєкт                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Учасники:          | Замовник, Cистема                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Передумови:        | Замовник авторизувався у системі <br> Проєкт не є створеним                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Результат:         | Новий проєкт                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Виключні ситуації: | Клієнт намагається створити новий проєкт в системі, з назвою вже існуючого проєкта:<br><font color="red">CreateProject_EX_DuplicateProjectNameError. </font><br> Клієнт намагається створити новий проєкт, але вже досягнув максимальної дозволеної кількості проєктів у системі або обмеження для свого облікового запису:<br><font color="red">CreateProject_EX_ProjectLimitExceededError. </font><br> Cтворення нового проєкту неможливе через тимчасові проблеми з мережею або інфраструктурою серверів. Система спробує автоматично відновити з'єднання:<br><font color="red">CreateProject_EX_NetworkError. </font> |

@startuml

    |Замовник|
    start;
    : Користувач відкриває розділ з проєктами;
    : Користувач натискає на кнопку "Новий проєкт";

    |Система|
    : Система відкриває форму зі створення проєкту;

    |Замовник|
    : Користувач вводить дані
     (назва,опис,залучені особи)
     про новий проєкт
    <font color="red"><b> CreateProject_EX_DuplicateProjectNameError;

    : Користувач натискає на кнопку "Створити"
    <font color="red"><b> CreateProject_EX_NetworkError;
      
    |Система|
    : Система перевіряє кількість
     вже створених користувачем
     проєктів і максимальний ліміт
     кількості проєктів
     для заданого користувача
    <font color="red"><b> CreateProject_EX_ProjectLimitExceededError;

    : Система добавляє новостворений проєкт до списку існуючих;
    : Система надсилає повідомлення про успішне створення проєкту;

    |Замовник|
    stop;

@enduml

| ID                 | <span id=DeleteProject>`DeleteProject`</span>                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Видалити проєкт                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Учасники:          | Замовник, Cистема                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Передумови:        | Замовник авторизувався у системі <br> Проєкт вже створений                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Результат:         | Проєкт видалений                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Виключні ситуації: | Клієнт не підтвердив своє бажання видалити проєкт:<br><font color="red">DeleteProject_EX_ConfirmationRequiredError. </font><br> Видалення проєкту неможливе через тимчасові проблеми з мережею або інфраструктурою серверів. Система спробує автоматично відновити з'єднання:<br><font color="red">DeleteProject_EX_NetworkError. </font><br> Видалення проєкту неможливе через відсутність прав доступу:<br><font color="red">DeleteProject_EX_UnauthorizedDeletionError. </font> |

@startuml

    |Замовник|
    start;
    : Користувач відкриває розділ з проєктами;
    : Користувач натискає на ім'я проєкту;

    |Система|
    : Система відкриває сторінку з проєктом;

    |Замовник|
    : Користувач натискає
      на кнопку "Налаштування проєкту";

    |Система|
    : Система відкриває сторінку
     з налаштуваннями проєкту;

    |Замовник|
    : Користувач натискає
     на кнопку "Видалити цей проєкт"
    <font color="red"><b> DeleteProject_EX_UnauthorizedDeletionError;

    |Система|
    : Система відкриває віконце з попередженнями,
     і полем для верифікації підтвердження;

    |Замовник|
    : Користувач вводить в поле свій нікнейм;
    : Користувач натискає
     кнопку "Підтвердити видалення проєкту"
    <font color="red"><b> DeleteProject_EX_ConfirmationRequiredError;

    |Система|
    : Система видаляє проєкт зі списку існуючих
    <font color="red"><b> DeleteProject_EX_NetworkError;

    : Система надсилає повідомлення
     про успішне видалення проєкту;

    |Замовник|
    stop;

@enduml

| ID                 | <span id=ChangeProjectStatus>`ChangeProjectStatus`</span>                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Змінити статус проекта.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Учасники:          | Замовник, Система.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Передумови:        | Проект існує в системі, замовник є власником проекту.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Результат:         | Статус проекта успішно змінений.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Виключні ситуації: | Замовник не є власником проекту. <font color="red">ChangeProjectStatus_EX_Unauthorized</font><br> Спроба змінити на недопустимий статус. <font color="red">ChangeProjectStatus_EX_InvalidStatus</font><br> Проект не знайдений в системі, спроба зміни статусу над неправильним проектом. <font color="red">ChangeProjectStatus_EX_ProjectNotFound</font><br> Виникла внутрішня помилка системи під час спроби зміни статусу проекта. <font color="red">ChangeProjectStatus_EX_InternalError</font> |

@startuml

    |Замовник|
    start;
    : Входить в систему;

    |Замовник|
    : Обирає конкретний проект, для якого він хоче змінити статус
    <font color="red"><b> ChangeProjectStatus_EX_Unauthorized
    <font color="red"><b> ChangeProjectStatus_EX_ProjectNotFound;

    |Замовник|
    : Обирає новий статус для проекта з доступних опцій
    <font color="red"><b> ChangeProjectStatus_EX_InvalidStatus;

    |Замовник|
    : Підтверджує зміну статусу проекта
    <font color="red"><b> ChangeProjectStatus_EX_InternalError;

    |Система|
    : Перевіряє, чи має замовник права на зміну статусу даного проекту\n та чи є новий статус допустимим для зміни.;

    : Система змінює статус проекта на новий;

    : Система автоматично надсилає повідомлення\n всім учасникам проекту про зміну статусу.;


    |Замовник|
    stop;

@enduml

| ID                 | <span id=PayServices>`PayServices`</span>                                                                                                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Оплатити послуги розробки                                                                                                                                                                                              |
| Учасники:          | Замовник, Система                                                                                                                                                                                                      |
| Передумови:        | Замовник авторизувався у системі                                                                                                                                                                                       |
| Результат:         | Замовник оплатив надані йому послуги                                                                                                                                                                                   |
| Виключні ситуації: | Клієнт не має достатньо коштів на рахунку:<br><font color="red">PayServices_EX_NotEnoughMoney. </font><br>Клієнт надав не правильні банківські дані:<br><font color="red">PayServices_EX_IncorrectBankDetails. </font> |

@startuml

    |Замовник|
    start;
    : Користувач відкриває розділ оплати;

    |Система|
    : Система підраховує сумму яку потрібно заплатити;
    : Система надає користувачеві сумму яку потрібно заплатити та всі необхідні дані для оплати;

    |Замовник|
    : Користувач натискає на кнопку "Оплата";
    : Користувач вводить свої банківські дані;
    : Користувач натискає на кнопку "Зробити транзакцію";

    |Система|

    : Система зв'язується з банком
    <font color="red"><b> PayServices_EX_IncorrectBankDetails;
    : Система перевіряє дані та кошти на рахунку
    <font color="red"><b> PayServices_EX_NotEnoughMoney;
    : Система списує кошти;
    : Система надсилає підтвердження про успішну оплату у виді чеку;

    |Замовник|
    stop;

@enduml

| ID                 | <span id=LeaveReview>`LeaveReview`</span>                                            |
| :----------------- | :----------------------------------------------------------------------------------- |
| Назва:             | Залишити відгук                                                                      |
| Учасники:          | Замовник, Система                                                                    |
| Передумови:        | Замовник авторизувався у системі<br>Проект завершений                                |
| Результат:         | Замовник залишив відгук про надані йому послуги                                      |
| Виключні ситуації: | Проект ще не завершено:<br><font color="red">LeaveReview_EX_ProjectIsNotOver.</font> |

@startuml

    |Замовник|
    start;
    : Користувач відкриває сторінку команди;
    : Користувач переходить в розділ "Відгуки";

    |Система|
    : Система відкриває розділ з відгуками;

    |Замовник|
    : Користувач натискає на кнопку "Залишити відгук";

     |Система|
    : Система відкриває вікно залишення відгуку;

    |Замовник|
    : Користувач пише відгук та оцінює роботу команди;
    : Користувач натискає на кнопку "Залишити відкук";

    |Система|

    : Система зберігає відгук
    <font color="red"><b> LeaveReview_EX_ProjectIsNotOver;
    : Система інформує користувача що відгук збережено;

    |Замовник|
    stop;

@enduml

| ID                 | <span id=TrackDevelopmentStatus>`TrackDevelopmentStatus`</span>                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Відстежити статус розробки                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Учасники:          | Замовник, Система                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Передумови:        | Проєкт існує в системі, замовник має доступ до інформації про статус розробки                                                                                                                                                                                                                                                                                                                                                                                                             |
| Результат:         | Замовник відстежує поточний статус розробки проекту.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Виключні ситуації: | Проект не знайдений в системі, спроба відстеження статусу розробки над неправильним проєктом: <font color="red">TrackDevelopmentStatus_EX_ProjectNotFound.</font><br>Замовник намагається відстежувати статус розробки проєкту, на який він не має прав доступу: <font color="red">TrackDevelopmentStatus_EX_PermissionDenied.</font><br>Виникла внутрішня помилка системи під час спроби відстеження статусу розробки: <font color="red">TrackDevelopmentStatus_EX_InternalError.</font> |

@startuml

    |Замовник|
    start;
    : Входить в систему;
    : Відкриває розділ з проєктами;
    : Обирає конкретний проект
    <font color="red"><b> TrackDevelopmentStatus_EX_ProjectNotFound
    <font color="red"><b> TrackDevelopmentStatus_EX_InternalError;

    |Система|
    : Відображення інформацію про
      поточний статус розробки проекту
    <font color="red"><b> TrackDevelopmentStatus_EX_PermissionDenied;

    |Замовник|
    : Перегляд деталей, опису та статусу завдання,
      відповідального розробника;

    |Система|
    : Відображення оновлених статусів завдань;
    : Оновлення загального статусу розробки проєкту
      на основі змін у статусах завдань;

    |Замовник|
    : Перевірка актуального статусу розробки;

    stop;

@enduml

| ID                 | <span id=DeleteDeveloper>`DeleteDeveloper`</span>                              |
| :----------------- | :----------------------------------------------------------------------------- |
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
    : Перевіряє наявість розробника
    <font color="red"><b> DeleteDeveloper_EX_NotExist;

    |Система|
    :Видаляє розробника;

    |Тімлід|
    stop;

@enduml

| ID                 | <span id=ChangeStatus>`ChangeStatus`</span>                                       |
| :----------------- | :-------------------------------------------------------------------------------- |
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
    : Змінює статус проєкту
    <font color="red"><b> ChangeStatus_EX_UnexistingProject;
    |Тімлід|
    stop;

@enduml

| ID                 | <span id=AddTask>`AddTask`</span>                                                                                                                          |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
    : Перевіряє правильність даних
    <font color="red"><b> AddTask_EX_ErrorData;

    : Перевіряє дані задачі
    <font color="red"><b> AddTask_EX_AlreadyAdd;

    : Додає задачу;

    |Тімлід|
    stop;

@enduml

| ID                 | <span id=AddingDeveloper>`AddingDeveloper`</span>                                                                                                                       |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Додати розробника                                                                                                                                                       |
| Учасники:          | Розробник, Тімлід, Система                                                                                                                                              |
| Передумови:        | Тімлід авторизувався у системі                                                                                                                                          |
| Результат:         | Розробника додано в систему                                                                                                                                             |
| Виключні ситуації: | Розробник вже існує:<br><font color="red">AddingDeveloper_EX_AlreadyOccupied.</font><br>Дані містять помилку:<br><font color="red">AddingDeveloper_EX_ErrorData.</font> |

@startuml

    |Тімлід|
    start;
    : Тімлід відкриває меню розробників;
    : Тімлід натискає "Додати розробника";

    |Система|
    : Система відкриває меню\n додавання розробника;

    |Тімлід|
    : Тімлід вводить дані розробника;
    : Тімлід натискає кнопку "Додати";

     |Система|
    : Система перевіряє правильність даних
    <font color="red"><b><b> AddingDeveloper_EX_ErrorData;

    : Система перевіряє дані розробника
    <font color="red"><b><b> AddingDeveloper_EX_AlreadyOccupied;

    : Система додає розробника;
    : Система висилає дані для\n авторизації розробнику на пошту;

    |Тімлід|
    stop;

@enduml

| ID                 | <span id=RemoveTask>`RemoveTask`</span>                               |
| :----------------- | :-------------------------------------------------------------------- |
| Назва:             | Видалити існуючу задачу в проєкті                                     |
| Учасники:          | Тімлід, Система                                                       |
| Передумови:        | Тімлід авторизувався у системі <br> Проєкт вже створено               |
| Результат:         | Задача видалена з проєкту                                             |
| Виключні ситуації: | Задачі не існує. <font color="red">RemoveTask_EX_NotExist </font><br> |

@startuml

    |Тімлід|
    start;
    : Відкриває меню задач;

    |Тімлід|
    : Обирає потрібну задачу;

    |Тімлід|
    : Натискає кнопку "Видалити";

    |Система|
    : Просить користувача підтвердити видалення завдання;

    |Тімлід|
    : Натискає кнопку "Підтвердити";

    |Система|
    : Перевіряє наявість задачі
    <font color="red"><b> RemoveTask_EX_NotExist;

    |Система|
    : Видаляє задачу;

    |Тімлід|
    stop;

@enduml

| ID                 | <span id=ChangeTaskStatus>`ChangeTaskStatus`</span>                                   |
| :----------------- | :------------------------------------------------------------------------------------ |
| Назва:             | Змінити статус завдання                                                               |
| Учасники:          | Розробник, Система                                                                    |
| Передумови:        | Розробник авторизувався у системі <br> Проєкт вже створено <br> Задача вже призначена |
| Результат:         | Статус задачі змінений                                                                |
| Виключні ситуації: | Задачі не існує. <font color="red">ChangeTaskStatus_EX_NotExist </font><br>           |

@startuml

    |Розробник|
    start;
    : Відкриває меню задач;

    |Розробник|
    : Обирає потрібну задачу;

    |Розробник|
    : Натискає кнопку "Змінити статус";

    |Система|
    : Просить користувача вибрати\n статус завдання;

    |Розробник|
    : Натискає кнопку в залежності\n від статусу завдання;

    |Система|
    : Перевіряє наявість задачі
    <font color="red"><b> ChangeTaskStatus_EX_NotExist;


    |Система|
    : Змінює стан задачі;

    |Розробник|
    stop;

@enduml

| ID                 | <span id=SendingTaskForReview>`SendingTaskForReview`</span>                                     |
| :----------------- | :---------------------------------------------------------------------------------------------- |
| Назва:             | Надіслати завдання для огляду                                                                   |
| Учасники:          | Розробник, Система                                                                              |
| Передумови:        | Розробник авторизувався у системі <br> Проєкт вже створено <br> Задача зі статусом "Огляд коду" |
| Результат:         | Задача надіслана на огляд                                                                       |
| Виключні ситуації: | Задачі не існує. <font color="red">SendingTaskForReview_EX_NotExist </font><br>                 |

@startuml

    |Розробник|
    start;
    : Відкриває меню задач;

    |Розробник|
    : Обирає потрібну задачу;

    |Розробник|
    : Натискає кнопку "Відправити код на огляд";

    |Система|
    : Просить користувача підтвердити відправлення;

    |Розробник|
    : Натискає кнопку підтвердження;

    |Система|
    : Перевіряє наявість задачі
    <font color="red"><b> SendingTaskForReview_EX_NotExist;

    |Система|
    : Надсилає код на огляд;

    |Розробник|
    stop;

@enduml
