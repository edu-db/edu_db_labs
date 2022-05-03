# Модель прецедентів


**Загальна схема**

@startuml

    actor "Розробник" as TeamMember
    actor "Тімлід" as TeamLeader
    actor "Менеджер" as ProjectManager
    
    
    usecase "<b>UC_1</b>\nПодивитися прогрес" as UC_1
    usecase "<b>UC_2</b>\nСтворити завдання" as UC_2
    usecase "<b>UC_3</b>\nСтворити під завдання" as UC_3
    usecase "<b>UC_4</b>\nЗакінчити завдання" as UC_4
    usecase "<b>UC_5</b>\nСтворити команнду" as UC_5
    usecase "<b>UC_6</b>\nСтворити проект" as UC_6
   

    TeamMember -u-> UC_3
    
    TeamLeader --> UC_1
    TeamLeader --> UC_2
    TeamLeader --> UC_4
    
    ProjectManager -d-> UC_5
    ProjectManager -d-> UC_6
    
    ProjectManager -u-|> TeamLeader
    TeamLeader -u-|> TeamMember

@enduml    


--- 
  
***ID:***
03
    
***НАЗВА:***
Створення підзадачі
    
***УЧАСНИКИ:***
Розробник, Система

***ПЕРЕДУМОВИ:***
Завдання

***РЕЗУЛЬТАТ:***
Нова підзадача

***ВИКЛЮЧНІ СИТУАЦІЇ:***
Розробник призначає підзавдання іншому розробнику


***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

|Користувач|
    start
    :Розробник натискає
    кнопку "Створити підзадачу";
|Система|
    :Система надає форму створення ;
|Користувач|
    :Користувач заповнює форму;
    
    :Користувач підтверджує створення підзавдання;

|Система|
    :Система створює підзадачу;

|Користувач|
    stop;
@enduml

