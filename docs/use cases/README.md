# Модель прецедентів

## Схеми

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

## Сценарії використання 

| ID                | SignUp |
|-------------------|---|
| Назва             | Регістрація |
| Учасники          |  Користувач, система |
| Передумови        |  Користувач не має облікового запису у системі |
| Результат         |  Створено обліковий запис користувача |
| Виключні ситуації |  NullReferenceException - Користувач не заповнив усі поля </br> AccountAlreadyRegistred - Обліковий запис с такими данними вже існує </br> InvalidPasswordException - Пароль не відповідає вимогам </br> NetworkAccessNoneException - немає зʼєднання з інтернетом |
| Основні сценарії  |  1. Користувач заходить на сторінку створення облікового запису </br> Користувач ввів данні у всі поля</br> 2.Користувач натискає кнопку "Реєстрація" (NullReferenceException, InvalidPasswordException) </br> 3. Система перевіряє підключення користувача до інтернету (NetworkAccessNoneException) </br> 4.Перевірка наявності облікового записи з ідентичними данними (AccountAlreadyRegistredException) </br> 5.Створення облікового запису системою </br> Користувач переходить на головну сторінку системи під своїм обліковим записом |
<!-- Діаграмма -->
@startuml

|Користувач|
start;
: Заходить на сторінку створення облікового запису;
: Користувач вводить необзідні данні у всі поля;
: Користувач натискає кнопку "Реєстрація";
note right #fd625e
<b><i>NullReferenceException
<b><i>InvalidPasswordException
end note

|Система|
: Перевіряє підлючення користувача до інтернету;
note right #fd625e
<b><i>NetworkAccessNoneException
end note
: Перевіряє, чи існує вже зареєстрований\nобліковий запис із такими данними;
note right #fd625e
<b><i>AccountAlreadyRegistredException
end note
: Створює новий обліковий запис;

|Користувач|
: Переходить на головну сторінку системи\nпід своїм обліковим записом після успішнох реєстрації;
stop;

@enduml

| ID                | SignIn |
|-------------------|---|
| Назва             |  Авторизація |
| Учасники          |  Користувач, система |
| Передумови        |  1.Користувач зареєстрований у системі </br> 2.Користувач не авторизований |
| Результат         |  Користувач авторизований у системі |
| Виключні ситуації |  NullReferenceException - Користувач не заповнив усі поля </br>  InvalidDataException - Таких зареєстрованних данних не існує, пароль або пошта не правильно вказані </br> NetworkAccessNoneException - немає зʼєднання з інтернетом |
| Основні сценарії  |  1.Користувач вводить авторизаційні данні </br> 2.Користувач натискає кнопку "Увійти в систему" (NullReferenceException) </br> 3.Система намагається встановити зʼєднання з інтернетом (NetworkAccessNoneException) </br> 4. Систма перевіряє введені данні (InvalidDataException)</br> 5.Система авторизує користувача, користувач переходить на головну сторінку системи під своїм обліковим записом  |
<!-- Діаграмма -->
@startuml
@enduml

| ID                | EditProfile  |
|-------------------|---------------------|
| Назва             |  Редагувати профіль |
| Учасники          |  Користувач, система |
| Передумови        |  1.Кристувач авторизований у системі |
| Результат         |  Користувач має зміни у данних профілю |
| Виключні ситуації |  NullReferenceException - Користувач залишив поле пустим </br> InvalidPasswordException - Пароль не відповідає вимогам </br> NetworkAccessNoneException - немає зʼєднання з інтернетом  |
| Основні сценарії  |  1.Користувач переходить на сторінку свого профілю </br> 2.Система перевіряє звʼязок з інтернетом (NetworkAccessNoneException) </br> 3.Користувач змінює дані та тисне кнопку "Зберегти зміни" (NullReferenceException, InvalidPasswordException, NetworkAccessNoneException) </br>4.Система зберігає зміни у профілю користувача |
<!-- Діаграмма -->
@startuml
@enduml

| ID                | CreateTask |
|-------------------|---|
| Назва             | Створити задачу  |
| Учасники          |  Користувач, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувача добавлено у проект </br>3.Користувач має парава на створення задач у проекті на якому він знаходиться |
| Результат         |  Задача створена в обраному проекті |
| Виключні ситуації |  NullReferenceException - користувач не заповних необхідні поля </br> AccessDeniedException - користувач не має відповідних прав |
| Основні сценарії  |  1.Користувач обирає потрібний проект </br> 2.Користувач натискає кнопку "Створити задачу"(AccessDeniedException) </br> 3.Користувач вводить: назву, опис, статус(new/todo/inprogress/done/needreview), кому призначено, дедлайн, розмір задачі(опціонально), приорітетність задачі(опціонально) </br> 4.Користувач натискає кнопку "Створити"(NullReferenceException) </br> 5.Система створює задачу і відображає у обраній категорії </br>6.Система відсилає повідомлення всім призначеним на виконання користувачам, а також тімліду, про створення нової задачі  |
<!-- Діаграмма -->
@startuml
@enduml

| ID                | EditTask  |
|-------------------|---|
| Назва             |  Редагувати задачу |
| Учасники          |  Користувач, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувача добавлено у проект </br>3.Користувач має парава на зміну задач у проекті на якому він знаходиться |
| Результат         | Задачу змінено  |
| Виключні ситуації | NullReferenceException - користувач не заповних необхідні поля  </br> AccessDeniedException - користувач не має відповідних прав  |
| Основні сценарії  |  1.Користувач обирає потрібний проект </br> 2.Користувач обирає потрібну задачу </br> 3.Користувач натискає кнопку "Редагувати задачу"(AccessDeniedException) </br> 3.Користувач змінює: назву, опис, статус(new/todo/inprogress/done/needreview), кому призначено, дедлайн, розмір задачі(опціонально), приорітетність задачі(опціонально) </br> 4.Користувач натискає кнопку "Зберегти"(NullReferenceException) </br> 5.Система змінює задачу </br>6.Система відсилає повідомлення всім призначеним на виконання користувачам, а також тімліду, про зміну існуючої задачі |
<!-- Діаграмма -->
@startuml
@enduml

| ID                | DeleteTask  |
|-------------------|---|
| Назва             |  Видалити задачу |
| Учасники          |  Користувач, систему |
| Передумови        |  1.Користувач авторизований </br> 2.Користувача добавлено у проект </br>3.Користувач має парава на зміну задач у проекті на якому він знаходиться |
| Результат         |  Задачу видалено |
| Виключні ситуації | AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> InvalidTaskNameException - користувач ввів імʼя задачі неправильно </br> CancelTokenException - користувач відмінив операцію |
| Основні сценарії  |  1.Користувач обирає потрібний проект </br> 2.Користувач обирає потрібну задачу </br> 3.Користувач натискає кнопку "Видалити задачу"(AccessDeniedException) </br> 3.Користувач отримує діалогове вікно із запитом вписати назву задачі для підтвердження видалення задачі(NullReferenceException, CancelTokenException) </br> 4.Користувач вводить назву та натискає кнопку "Підтвердити" </br> 5.Система видаляє задачу та надсилає про цю подію повідомлення привʼязаних до задачі користувачів та тімліду |
<!-- Діаграмма -->
@startuml
@enduml

| ID                | CreateProject  |
|-------------------|---|
| Назва             | Створити проект |
| Учасники          |  Тімлід, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувач має необхідні права |
| Результат         |  Новий проект |
| Виключні ситуації | NullReferenceException - користувач не заповних необхідні поля  </br> AccessDeniedException - користувач не має відповідних прав </br> NameAlreadyExistsException - проект з таким імʼям вже існує |
| Основні сценарії  |  1.Користувач натискає кнопку "Створити проект"(AccessDeniedException) </br>2.Користувач заповнює поля з данними проекту </br>3.Користувач натискає кнопку "Створити"(NullReferenceException, NameAlreadyExistsException) </br>4.Система створює проект та показує його на головній сторінці тімліда та привʼязаних до нього користувачів |
<!-- Діаграмма -->
@startuml

|Тімлід|
start;
: Натискає кнопку "Створити проект;
note right #fd625e
<b><i>AccessDeniedException
end note
: Заповнює поля з данними проекту;
: Натискає кнопку "Створити";
note right #fd625e
<b><i>NullReferenceException
<b><i>NameAlreadyExistsException
end note

|Система|
 : Створює проект та показує його на головній сторінці тімліда та привʼязаних до нього користувачів; 

 stop;

@enduml

| ID                | EditProject  |
|-------------------|---|
| Назва             |  Редагувати проект |
| Учасники          |  Тімлід, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувач має необхідні права |
| Результат         |  Проект змінено |
| Виключні ситуації |  NullReferenceException - користувач не заповних необхідні поля  </br> AccessDeniedException - користувач не має відповідних прав </br> NameAlreadyExistsException - проект з таким імʼям вже існує |
| Основні сценарії  |  1.Користувач обирає проект та натискає кнопку "Змінити проект"(AccessDeniedException) </br>2.Користувач змінює поля з данними проекту </br>3.Користувач натискає кнопку "Змінити"(NullReferenceException, NameAlreadyExistsException) </br>4.Система змінює проект із зазначеними даними |
<!-- Діаграмма -->
@startuml

|Тімлід|
start;
: Обирає проект та натискає кнопку "Змінити проект";
note right #fd625e
<b><i>AccessDeniedException
end note
: Заповнює поля з данними проекту;
: Натискає кнопку "Змінити";
note right #fd625e
<b><i>NullReferenceException
<b><i>NameAlreadyExistsException
end note

|Система|
 : Змінює проект із зазначеними даними; 

 stop;

@enduml

| ID                | DeleteProject  |
|-------------------|---|
| Назва             |  Видалити проект |
| Учасники          |  Тімлід, система |
| Передумови        | 1.Користувач авторизований </br> 2.Користувач має необхідні права  |
| Результат         |  Проект видалено |
| Виключні ситуації |  AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> InvalidTaskNameException - користувач ввів імʼя проекту неправильно </br> CancelTokenException - користувач відмінив операцію  |
| Основні сценарії  |  1.Користувач обирає проект та натискає кнопку "Видалити"(AccessDeniedException) </br>2.Користувач отримує діалогове вікно із запитом вписати назву проекту для підтвердження видалення(NullReferenceException, CancelTokenException) </br> 3.Користувач вводить назву та натискає кнопку "Підтвердити" </br> 5.Система видаляє проект та сповіщює про це колабораторів проекту |
<!-- Діаграмма -->
@startuml

|Тімлід|
start;
: Обирає проект та натискає кнопку "Видалити";
note right #fd625e
<b><i>AccessDeniedException
end note
: Отримує діалогове вікно із запитом вписати назву проекту для підтвердження видалення;
note right #fd625e
<b><i>NullReferenceException
<b><i>CancelTokenException
end note
: Вводить назву та натискає кнопку "Підтвердити";
note right #fd625e
<b><i>InvalidTaskNameException
<b><i>CancelTokenException
end note

|Система|
 : Видаляє проект та сповіщює про це колабораторів проекту; 

 stop;
@enduml

| ID                | ArchiveProject  |
|-------------------|---|
| Назва             |  Архівувати проект |
| Учасники          |  Тімлід, система |
| Передумови        | 1.Користувач авторизований </br> 2.Користувач має необхідні права  |
| Результат         |  Проект видалено |
| Виключні ситуації |  AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> InvalidTaskNameException - користувач ввів імʼя проекту неправильно </br> CancelTokenException - користувач відмінив операцію  |
| Основні сценарії  |  1.Користувач обирає проект та натискає кнопку "Архівувати"(AccessDeniedException) </br>2.Користувач отримує діалогове вікно із запитом вписати назву проекту для підтвердження(NullReferenceException, CancelTokenException) </br> 3.Користувач вводить назву та натискає кнопку "Підтвердити" </br> 5.Система архівує проект, роблячи його доступним тільки для читання та сповіщює про це колабораторів проекту |

@startuml
|Тімлід|
start;
: Обирає проект та натискає кнопку "Архівувати";
note right #fd625e
<b><i>AccessDeniedException
end note 
: Отримує діалогове вікно із запитом вписати назву проекту для підтвердження;
note right #fd625e
<b><i>NullReferenceException
<b><i>CancelTokenException
end note
: Вводить назву та натискає кнопку "Підтвердити";
note right #fd625e
<b><i>InvalidTaskNameException
<b><i>CancelTokenException
end note

|Система|
 : Система архівує проект, роблячи його доступним тільки для читання та сповіщює про це колабораторів проекту; 

 stop;

@enduml

| ID                | AssignManager  |
|-------------------|---|
| Назва             | Змінити менеджера проекту |
| Учасники          |  Адміністратор, система |
| Передумови        | 1.Користувач авторизований </br> 2.Користувач має необхідні права  |
| Результат         |  Тімліда проекту змінено |
| Виключні ситуації |  AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> NoUserFoundException - користувач ввів імʼя нового тімліда неправильно </br> CancelTokenException - користувач відмінив операцію |
| Основні сценарії  | 1.Користувач обирає проект та тисне кнопку налаштувань.(AccessDeniedException) </br>2.Користувач натискає кнопку "Змінити менеджера проекту"(AccessDeniedException)</br> 3.Користувач отримує діалогове вікно із запитом вписати імʼя нового тімліду для підтвердження(NullReferenceException, CancelTokenException, NoUserFoundException) </br> 3.Користувач імʼя вводить імʼя та натискає кнопку "Підтвердити" </br> 5.Система змінює відповідального за проект  |
<!-- Діаграмма -->
@startuml
|Адміністратор|
start;
: Обирає проект та тисне кнопку налаштувань; 
note right #fd625e
<b><i>AccessDeniedException
end note 
: Натискає кнопку "Змінити менеджера проекту";
note right #fd625e
<b><i>AccessDeniedException
end note
:  Отримує діалогове вікно із запитом вписати імʼя нового тімліду для підтвердження;
: Вводить імʼя та натискає кнопку "Підтвердити";
note right #fd625e
<b><i>NullReferenceException
<b><i>CancelTokenException
<b><i>NoUserFoundException

end note

|Система|
 : Система змінює відповідального за проект; 

 stop;  
@enduml

| ID                | AddContributor  |
|-------------------|---|
| Назва             | Добавити користувача у проект  |
| Учасники          |  Тімлід, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувач має необхідні права |
| Результат         |  Користувача добавлено у проект |
| Виключні ситуації |  AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> NoUserFoundException - користувач ввів імʼя нового тімліда неправильно </br> CancelTokenException - користувач відмінив операцію |
| Основні сценарії  | 1.Користувач обирає проект та тисне кнопку налаштувань.(AccessDeniedException) </br>2.Користувач натискає кнопку "Добавити колаборатора проекту"(AccessDeniedException)</br> 3.Користувач отримує діалогове вікно із запитом вписати імʼя нового користувача для підтвердження(NullReferenceException, CancelTokenException, NoUserFoundException) </br> 3.Користувач вводить імʼя та натискає кнопку "Підтвердити" </br> 5.Система додає нового колаборатора на проект  |
<!-- Діаграмма -->
@startuml
|Тімлід|
start;
: Обирає проект та тисне кнопку налаштувань; 
note right #fd625e
<b><i>AccessDeniedException
end note 
: Натискає кнопку "Добавити колаборатора проекту";
note right #fd625e
<b><i>AccessDeniedException
end note
:  Отримує діалогове вікно із запитом вписати імʼя нового користувача для підтвердження;
: Вводить імʼя та натискає кнопку "Підтвердити";
note right #fd625e
<b><i>NullReferenceException
<b><i>CancelTokenException
<b><i>NoUserFoundException

end note

|Система|
 : Система додає нового колаборатора на проект; 

 stop;  
@enduml

| ID                | DeleteContributor  |
|-------------------|---|
| Назва             | Видалити користувача з проекту  |
| Учасники          |  Тімлід, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувач має необхідні права |
| Результат         |  Користувача добавлено у проект |
| Виключні ситуації |  AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> NoUserFoundException - користувач ввів імʼя нового тімліда неправильно </br> CancelTokenException - користувач відмінив операцію |
| Основні сценарії  | 1.Користувач обирає проект та тисне кнопку налаштувань.(AccessDeniedException) </br>2.Користувач натискає кнопку "Видалити колаборатора проекту"(AccessDeniedException)</br> 3.Користувач отримує діалогове вікно із запитом вписати імʼя користувача для підтвердження(NullReferenceException, CancelTokenException, NoUserFoundException) </br> 3.Користувач вводить імʼя та натискає кнопку "Підтвердити" </br> 5.Система видаляє обраного колаборатора з проекту  |
<!-- Діаграмма -->
@startuml

|Тімлід|
start;
: Обирає проект та тисне кнопку налаштувань.;
note right #fb625e
<b><i>AccessDeniedException
end note
: Натискає кнопку "Додати колаборанта проекту".;
note right #fb625e
<b><i>AccessDeniedException
end note
: Отримує діалогове вікно із запитом вписати імʼя нового коритстувача для підтвердження.;
note right #fb625e
<b><i>NullReferenceException
<b><i>CancelTokenException
<b><i>NoUserFoundException
end note
: Вводить імʼя та натискає кнопку "Підтвердити".;

|Система|
: Додає нового колаборанта на проект.;
stop;

@enduml

| ID                | BlockUser  |
|-------------------|---|
| Назва             | Заблокувати користувача у системі  |
| Учасники          |  адміністратор, система |
| Передумови        |  1.Користувач авторизований </br> 2.Користувач має необхідні права |
| Результат         |  Користувача добавлено у проект |
| Виключні ситуації |  AccessDeniedException - користувач не має відповідних прав </br> NullReferenceException - користувач не заповних необхідні поля </br> NoUserFoundException - користувач ввів імʼя нового тімліда неправильно </br> CancelTokenException - користувач відмінив операцію |
| Основні сценарії  | 1.Користувач обирає проект та тисне кнопку налаштувань.(AccessDeniedException) </br>2.Користувач натискає кнопку "Заблокувати колаборатора проекту"(AccessDeniedException)</br> 3.Користувач отримує діалогове вікно із запитом вписати імʼя користувача для підтвердження(NullReferenceException, CancelTokenException, NoUserFoundException) </br> 3.Користувач вводить імʼя та натискає кнопку "Підтвердити" </br> 5.Система видаляє обраного колаборатора з проекту та блокує обліковий запис добавляєчи його у список заблокованих записів системи  |
<!-- Діаграмма -->
@startuml

|Адміністратор|
start;
: Обирає проект та тисне кнопку налаштувань.;
note right #fb625e
<b><i>AccessDeniedException
end note
: Натискає кнопку "Заблокувати колаборатора проекту".;
note right #fb625e
<b><i>AccessDeniedException
end note
: Отримує діалогове вікно із запитом вписати імʼя користувача для підтвердження;
note right #fb625e
<b><i>NullReferenceException
<b><i>CancelTokenException
<b><i>NoUserFoundException
end note
: Вводить імʼя та натискає кнопку "Підтвердити".;

|Система|
: Видаляє обраного колаборатора з проекту та блокує обліковий запис добавляєчи його у список заблокованих записів системи;
stop;

@enduml

| ID                | Support  |
|-------------------|---|
| Назва             | Підтримка  |
| Учасники          | Користувач, система  |
| Передумови        |  1.Користувач авторизований |
| Результат         |  Проблема користувача вирішується |
| Виключні ситуації |  NullRefenceException - користувач не заповнив усі поля </br>CancelTokenException - користувач відмінив операцію |
| Основні сценарії  |  1.Користувач тисне кнопку "Підтримка" </br>2.Система показує користувачеві діалогове з полями для вводу пошти користувача та опису проблему(CancelTokenException) </br>3.Користувач тисне кнопку "Відправити"(NullReferenceException)  </br> 4.Система відправляє лист із запитом на отримання підтримки адміністратору </br>5.Адміністратор вирішує проблему користувача та відправляє лист на вказану користувачем пошту</br>6.Користувач отримує рішення проблеми |
<!-- Діаграмма -->
@startuml

|Користувач|
: Натискає кнопку "Підтримка".;

|Cистема|
: Показує користувачеві діалогове з полями для вводу пошти користувача та опису проблему;
note right #fb625e
<b><i>CancelTokenException
end note

|Користувач|
: Натискає кнопку "Відправити".;
note right #fb625e
<b><i>NullReferenceException
end note

|Cистема|
: Відправляє лист із запитом на отримання підтримки адміністратору.;
: Адміністаратор вирішує проблему користувача та відправляє лист на вказану користувачем пошту.;

|Користувач|
: Отримує рішення проблеми.;
stop;

@enduml

