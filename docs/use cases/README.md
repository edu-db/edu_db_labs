# Модель прецедентів

## Діаграма прецедентів 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>


@startuml


    actor "Користувач" as User 
    actor "Адміністратор" as Admin

    usecase "Створити обліковий запис" as SIGN_UP 
    usecase "Авторизуватися" as LOG_IN 
    usecase "Почати пошук даних" as SEARCH 
    usecase "Звернутися до Адміністратора" as HELP 
    usecase "Додати нове джерело" as ADD_SRC 
    usecase "Надати прав" as ADD_RIGHTS
    usecase "Отримати статистику" as GET_STAT

    User -d-> SIGN_UP
    User -l-> LOG_IN
    User -> SEARCH

    Admin ---> HELP
    Admin ---> ADD_SRC
    Admin ---> ADD_RIGHTS
    Admin ---> GET_STAT

    Admin ---|> User
@enduml


</center>

## Usecases для користувача 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>


@startuml


    actor "Користувач" as User

    usecase "Створити обліковий запис" as SIGN_UP 
    usecase "Авторизуватися" as LOG_IN 
    usecase "Почати пошук даних" as SEARCH
    usecase "Відновити профіль" as RECOVER  
    usecase "Фільтрувати пошук" as FILTER_SEARCH
    usecase "Сортирувати пошук" as SORT_SEARCH

    User -d-> SIGN_UP
    User -l-> LOG_IN
    User -> SEARCH

    RECOVER ..> LOG_IN:extends

    FILTER_SEARCH .l.> SEARCH:extends
    SORT_SEARCH ..> SEARCH:extends


@enduml


</center>

## Usecases для адміністратора 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml


    actor "Адміністратор" as Admin

    usecase "Звернутися до Адміністратора" as HELP 
    usecase "Додати нове джерело" as ADD_SRC 
    usecase "Надати прав" as ADD_RIGHTS
    usecase "Отримати статистику" as GET_STAT
    usecase "Фільтрувати статистику" as FILTR_STAT
    usecase "Сортирувати статистику" as SORT_STAT
    usecase "Отримати данні про користувача" as GET_USR_DATA


    Admin -l-> HELP
    Admin -r-> ADD_SRC
    Admin --> ADD_RIGHTS
    Admin --> GET_STAT

    GET_USR_DATA ..> HELP:extends
    FILTR_STAT .u.> GET_STAT:extends
    SORT_STAT .u.> GET_STAT:extends


@enduml

</center>

## Додавання нових джерел

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

    
@startuml


    |Адміністратор|
        start
        :Адміністратор здійснює запит
        на створення нового
        джерела інформації;
        :Адміністратор ввводить посилання
        на джерело;
        :Адміністратор надає опис джерела;
        :Адміністратор надсилає джерело
        на перевірку системі;
    |Система|
        :Система перевіряє джерело
        на вадлідність;
        note right #ffaaaa

        <b> ADNEX.002

        end note
        :Система додає нове джерело
        до списку джерел інформації;
    |Адміністратор|
        stop;


@enduml
        
</center>

    
## Додавання нових прав

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
    
@startuml


    |Користувач|
        start
        :Користувач створює запит
        на отримання додаткових
        прав;
    |Адміністратор|
        :Адміністратор отримує запит;
        :Адміністратор створює запит
        щоб надати нові права
        користувачу;
    |Система|
        :Система перевіряє користувача;
        note right #ffaaaa

            <b> ADNEX.003.001
            <b> ADNEX.003.002
        end note
        :Система надає нові права
        користувачу;
    |Користувач|
        stop;


@enduml
                
</center>


## Запит для отримання статистики
      
                
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

                
@startuml


    |Адміністратор|
        start
        :Адміністратор здійснює запит
        для отримання статистики
        користувачів;
        :Адміністратор обирає проміжок
        часу для збору даних;
    |Система|
        :Система отримує запит;
        :Система шукає дані
        за обраний проміжок часу;
        :Система надає дані
        адміністратору;
        note right #ffaaaa

        <b> ADNEX.004

        end note
    |Адміністратор|
        :Адміністратор отримує дані;
        stop;

            
@enduml
            
</center>

## Звернення користувача до адміністратора
           
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
                

@startuml
```

|Користувач|
    start
    :Користувач активує звернення
    до адміністратора;
    note right #ffaaaa

        <b> USREX.003

    end note
    :Користувач передає адміністратору
    опис проблеми;
|Адміністратор|
    :Адміністратор вирішує проблему;
    :Адміністратор повідомляє користувача
    про знайдене рішення;
|Користувач|
    :Користувач отримує рішення проблеми;
    stop;

```
@enduml
            
            
</center>
    
