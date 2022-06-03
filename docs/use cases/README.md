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



















