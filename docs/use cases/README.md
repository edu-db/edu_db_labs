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

## Сценарії використання

| ID: | **Logout_User**                                                                                                            |
|:----|:---------------------------------------------------------------------------------------------------------------------------|
| Назва | Вийти з облікового запису                                                                                                  |
| Учасники | Система, користувач                                                                                                        |
| Передумови | Користувач зареєстрований, користувач увійшов в обліковий запис                                                            |
| Результат | Користувач вийшов з облікового запису                                                                                      |
| Виключні ситуації | Відсутні                                                                                                                   |

@startuml

|Користувач|
start;
:Натискає кнопку\n"Вихід з облікового запису";

|Система|
:Блокує користувачу доступ\nдо особистого кабінету;

|Користувач|
stop;

@enduml

