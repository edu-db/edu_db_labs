# Модель прецедентів

## Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

  actor "Користувач" as User
  actor "Редактор" as Editor
  actor "Адміністратор" as Admin
  
  Editor --u-|> User
  Admin --u-|> Editor
  
  usecase "<b>AccountManage</b>\nКерувати обліковим записом" as AccountManage
  usecase "<b>QuizSurvey</b>\nВзаємодія з опитуваннями" as QuizSurvey
  usecase "<b>QuizEdit</b>\nРедагувати опитування" as QuizEdit
  usecase "<b>ExpertManage</b>\nКерувати експертами" as ExpertManage
  usecase "<b>LaunchQuiz</b>\nЗапускати опитування" as LaunchQuiz
  usecase "<b>QuizAnalize</b>\nАналізувати результати\nопитування" as QuizAnalize
  usecase "<b>QuizManage</b>\nКерувати опитуваннями" as QuizManage
  usecase "<b>AccessManage</b>\nКерувати доступом" as AccessManage
 
  User -u-> AccountManage
  User -l-> QuizSurvey
  
  Editor -u-> ExpertManage
  Editor -l-> QuizAnalize
  Editor -r-> QuizEdit
  Editor -d-> LaunchQuiz
  
  Admin -r-> QuizManage
  Admin -l-> AccessManage

@enduml
  
</center>

## Схема використання для Адміністратора

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Адміністратор" as Admin
    
    usecase "<b>Register_User</b>\nРеєстрація" as Register
    usecase "<b>Login_User</b>\nВхід" as Login
    usecase "<b>Logout_User</b>\nВихід з облікового запису" as Logout
    usecase "<b>QuizManage</b>\nКерувати опитуваннями" as QuizManage
    usecase "<b>AccessManage</b>\nКерувати доступом" as AccessManage
    usecase "<b>Create_Quiz</b>\nСтворити опитування" as Create
    usecase "<b>Edit_Quiz</b>\nРедагувати опитування" as Edit
    usecase "<b>Delete_Quiz</b>\nВидалити опитування" as Delete
    usecase "<b>Make_Editor</b>\nЗробити редактором" as MakeEditor
    usecase "<b>Remove_Quiz</b>\nЗабрати права редактора" as RemoveEditor
    
    Admin -d-> Register
    Admin -d-> Login
    Admin -d-> Logout
    Admin -u-> QuizManage
    Admin -u-> AccessManage
    QuizManage <.u. Create : Extends
    QuizManage <.u. Edit : Extends
    QuizManage <.u. Delete : Extends
    AccessManage <.u. MakeEditor : Extends
    AccessManage <.u. RemoveEditor : Extends

@enduml

</center>

## Сценарії використання
  
### Вийти з облікового запису

| ID: | **Logout_User**                                                                                                            |
|:----|:---------------------------------------------------------------------------------------------------------------------------|
| Назва | Вийти з облікового запису                                                                                                  |
| Учасники | Система, користувач                                                                                                        |
| Передумови | Користувач зареєстрований, користувач увійшов в обліковий запис                                                            |
| Результат | Користувач вийшов з облікового запису                                                                                      |
| Виключні ситуації | Відсутні                                                                                                                   |
  
@startuml
  
|Користувач|
: \tНатискає кнопку\n"Вихід з облікового запису";

|Система|
: \tБлокує користувачу доступ\nдо особистого кабінету;

|Користувач|
stop;
  
@enduml
  
### Видалити обліковий запис користувача

| ID: | Delete_User                                                                                                                                                                |
|:----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва | Видалити обліковий запис користувача                                                                                                                                       |
| Учасники | Система, користувач                                                                                                                                                        |
| Передумови | Користувач зареєстрований                                                                                                                                                  |
| Результат | Обліковий запис користувача видалено                                                                                                                                       |
| Виключні ситуації | EX.04.01 Облікового запису користувача не існує    
|
  
@startuml

|Користувач|
start;
: Заходить в особистий кабінет;
: Обирає налаштування профілю;
: \tНатискає кнопку\n"Видалити обліковий запис";

|Система|
: \tСистема дає запит видалення\nданих з бази даних <font color="red"><b>(можлива EX.04.01);
: Система видаляє обліковий запис;
  
|Користувач|
stop;
 
@enduml
