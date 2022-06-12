# Модель прецедентів
** **




### Загальна схема
** **

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>
    end header

    title
        <font size=18 color=black>Аналітичний портал
        <font size=16 color=black>Діаграма прецедентів
    end title

    actor "Менеджер" as Manager
    actor "Тімлід" as Teamlead
    actor "Розробник" as Developer
    
    
    usecase "<b>UC_1</b>\nУвійти в систему" as UC_1
    
    usecase "<b>UC_2</b>\nУправління проектами" as UC_2 #aaeeaa
    usecase "<b>UC_3</b>\nПерегляд прогресу роботи \nкожного з тимлідів" as UC_3 #aaeeaa
    
    usecase "<b>UC_4</b>\nОрганізація розробників" as UC_4 #aaeeaa
    usecase "<b>UC_5</b>\nУправління завданнями" as UC_5 #aaeeaa
    
    usecase "<b>UC_6</b>\n Отримання артефактів та задач від тімліда " as UC_6
    usecase "<b>UC_7</b>\n Відправка на перевірку задач" as UC_7
    usecase "<b>UC_8</b>\n Контакт до тімліда, з потрібним запитом" as UC_8
    usecase "<b>UC_9</b>\n Зміна статусу" as UC_9
    
    Manager -u-> UC_1
    Manager --> UC_2
    Manager --> UC_3
    
    Teamlead --> UC_1
    Teamlead -u-> UC_4
    Teamlead -u-> UC_5
    
    Developer --> UC_1
    Developer --> UC_6
    Developer --> UC_7
    Developer -u-> UC_8
    Developer -u-> UC_9
    

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2022
    end footer

    
    


@enduml


</center>


### Teamlead
** **

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>
    end header

    title
        <font size=18 color=black>Аналітичний портал
        <font size=16 color=black>Діаграма прецедентів
    end title

    
    actor "Тімлід" as Teamlead
    
    usecase "Управління завданнями" as UC_1 #aaeeaa
    
    usecase "Перевірка виконання/виконаних завдань" as UC_2
    usecase "Зміна статусу завдань" as UC_3
    usecase "Виставлення артефактів на загальний проект \nта пов'язання їх із завданнями" as UC_4
    
    usecase "Організація розробників" as UC_5 #aaeeaa
    
    usecase "Виставлення дедлайнів" as UC_6
    usecase "Відправка задач розробникам" as UC_7
    
    Teamlead --> UC_1
    UC_2 .u.> UC_1
    UC_3 .u.> UC_1
    UC_4 .u.> UC_1
    
    Teamlead --> UC_5
    UC_6 .u.> UC_5
    UC_7 .u.> UC_5
    

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2022
    end footer

@enduml


</center>



### Project Manager
** **

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>
    end header

    title
        <font size=18 color=black>Аналітичний портал
        <font size=16 color=black>Діаграма прецедентів
    end title

    
    actor "Менеджер" as Manager
    
    usecase "Управління проектами" as UC_1 #aaeeaa
    
    usecase "Створити проект" as UC_2
    usecase "Модифікувати існуючий проект" as UC_3
    usecase "Видалити проект" as UC_4
    
    Manager --> UC_1
    UC_2 .u.> UC_1
    UC_3 .u.> UC_1
    UC_4 .u.> UC_1

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2022
    end footer

@enduml


</center>

## Сценарії

***ID:*** UC-5

***НАЗВА:*** Видалення учасника.

***УЧАСНИКИ:*** Менеджер проекту, система.

***ПЕРЕДУМОВИ:*** Учасник є в проекті.

***РЕЗУЛЬТАТ:*** Учасника видалено з проекту.

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

CancelException - Натиснута кнопка "Скасувати".

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Менеджер|
        start
        :Натискає на кнопку "Видалити учасника";
    |Система|
        :відкриває форму 
        підтвердження видалення учасника;
        note right #ffaaaa
        CancelException
        Натиснута кнопка "Скасувати"
        end note
    |Менеджер|
        :Натискає на кнопку "Підтвердити";
    |Система|
        :<b>Видаляє учасника</b> з проекту;
        :Сповіщує менеджера про видалення учасника;
    |Менеджер|
        stop;

@enduml

---

***ID:*** UC-6

***НАЗВА:*** Взяття завдання

***УЧАСНИКИ:*** Розробник, система.

***ПЕРЕДУМОВИ:*** Наявність завдання.

***РЕЗУЛЬТАТ:*** Завдання закріплено за розробником.

***ВИКЛЮЧНІ СИТУАЦІЇ:*** Немає

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Розробник|
        start
        :Вибирає завдання, натискаючи на нього;
        :Вибирає себе виконувачем завдання;
    |Система|
        :<b>Добавляє розробника</b>
        <b>в ролі виконувача завдання</b>;
        :Сповіщує розробника про взяття завдання;
    |Розробник|
        stop;

@enduml

---

***ID:*** UC-7

***НАЗВА:*** Закріплення завдання

***УЧАСНИКИ:*** Тімлід, система.

***ПЕРЕДУМОВИ:*** Наявність завдання і розробника в проекті.

***РЕЗУЛЬТАТ:*** Завдання закріплено за розробником.

***ВИКЛЮЧНІ СИТУАЦІЇ:*** Немає

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Тімлід|
        start
        :Вибирає завдання, натискаючи на нього;
        :Вибирає розробника виконувачем завдання;
    |Система|
        :<b>Закріплює завдання за розробником</b>;
        :Сповіщує тімліда про закріплення завдання;
    |Тімлід|
        stop;

@enduml

---

***ID:*** UC-8

***НАЗВА:*** Створити артефакт.

***УЧАСНИКИ:*** Учасник проекту, система.

***ПЕРЕДУМОВИ:*** Немає.

***РЕЗУЛЬТАТ:*** Створений артефакт.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

ArtifactSizeException - Розмір файлу перевищує ліміт.

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Учасник|
        start
        :Натискає на кнопку "Створити артефакт";
    |Система|
        :відкриває форму для створення артефакту;
    |Учасник|
        :Заповнює форму (назва артефакту, 
        опис), прикріплює файл;
        :Підтверджує відправку форми;
    |Система|
        :Перевіряє розмір прикріпленого файлу;
        note right #ffaaaa
        ArtifactSizeException
        розмір файлу перебільшує * МБ
        end note
        :<b>Створює артефакт</b>;
        :Сповіщує користувача про створення артефакту;
    |Учасник|
        stop;

@enduml
