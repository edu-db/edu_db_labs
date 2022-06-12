# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

```md

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml



</center>

</center>

## BP-1 
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
<font color=000 size=16><b>ID:</b> ВP-1
<font color=000 size=16><b>Назва:</b> Реєстрація користувача в системі
<font color=000 size=16><b>Учасники:</b> Користувач, Система
<font color=000 size=16><b>Передумови:</b> Користувач не увійшов в обліковий запис
<font color=000 size=16><b>Результат:</b> Створення Облікового Запису
<font color=000 size=16><b>Виключні ситуації:</b> RegistrationException - в системі вже існує обліковий запис за введеними даними.  
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку Реєстрації;
|Система|
    : Відкриває користувачу форму реєстрації;
|Користувач|
    : Отримує форму;
|Користувач|
    : Заповнює форму;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Перевіряє наявність введених даних в системі;
    note right #ffaaaa
    <b> Можливо
    <b> RegistrationException
    end note

|Система|   
    : Створює новий обліковий запис;
    : Відповідає користувачу що запис створений;
    
|Користувач|
    stop;
@enduml

</center>

## BP-2
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
<font color=000 size=16><b>ID:</b> ВP-2
<font color=000 size=16><b>Назва:</b> Спроба авторизації 
<font color=000 size=16><b>Учасники:</b> Користувач, Система
<font color=000 size=16><b>Передумови:</b> Користувач не увійшов в обліковий запис
<font color=000 size=16><b>Результат:</b> Авторизація користувача
<font color=000 size=16><b>Виключні ситуації:</b> AuthException1 - Відсутній обліковий запис за веденими даними. 
<font color=000 size=16> AuthException2 - Неправильно ведені дані запису
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку Авторизації;
|Система|
    : Відкриває користувачу форму авторизації;
|Користувач|
    : Отримує форму;
|Користувач|
    : Заповнює форму;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Перевіряє наявність облікового запису;
    note right #ffaaaa
    <b> Можливо
    <b> AuthException1
    end note

|Система|   
    : Перевіряє введені дані;
    note right #ffaaaa
    <b> Можливо
    <b> AuthException2
    end note
    : Надає доступ користувачу;
    
|Користувач|
    stop;
@enduml

</center>

## BP-3
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
<font color=000 size=16><b>ID:</b> ВP-3
<font color=000 size=16><b>Назва:</b> Створення проекту
<font color=000 size=16><b>Учасники:</b> Користувач, Система
<font color=000 size=16><b>Передумови:</b> Користувач увійшов в обліковий запис
<font color=000 size=16><b>Результат:</b> Створення проекту
<font color=000 size=16><b>Виключні ситуації:</b> Відсутні
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку створення проекту;
|Система|
    : Відкриває користувачу форму створення проекту;
|Користувач|
    : Отримує форму;
|Користувач|
    : Заповнює форму;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Перевіряє отримані дані;
    

|Система|   
    : Створює проект ;
 
    : Надає доступ користувачу до створеного проекту;
    
|Користувач|
    stop;
@enduml

</center>

## BP-4
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
<font color=000 size=16><b>ID:</b> ВP-4
<font color=000 size=16><b>Назва:</b> Створення завдання
<font color=000 size=16><b>Учасники:</b> Користувач, Система
<font color=000 size=16><b>Передумови:</b> Користувач увійшов в обліковий запис. Наявність проекту
<font color=000 size=16><b>Результат:</b> Створення завдання
<font color=000 size=16><b>Виключні ситуації:</b> Відсутні
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку створення завдання;
|Система|
    : Відкриває користувачу форму створення завдання;
|Користувач|
    : Отримує форму;
|Користувач|
    : Заповнює форму та прикріплює всі необхідні артефакти ;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Перевіряє отримані дані;
    

|Система|   
    : Створює завдання ;
 
    : Надає доступ користувачу до створеного завдання;
    
|Користувач|
    stop;
@enduml

</center>

## BP-5
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
<font color=000 size=16><b>ID:</b> ВP-5
<font color=000 size=16><b>Назва:</b> Взяття завдання
<font color=000 size=16><b>Учасники:</b> Користувач ( розробник) , Система
<font color=000 size=16><b>Передумови:</b> Користувач увійшов в обліковий запис.
<font color=000 size=16>Наявність незакріпленого завдання.
<font color=000 size=16>Користувач є розробником в проекті
<font color=000 size=16><b>Результат:</b> Прикріплення завдання до проекту
<font color=000 size=16><b>Виключні ситуації:</b> Відсутні
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку взяття завдання;
|Система|
    : Відкриває користувачу завдання;
|Користувач|
    : Отримує завдання;
|Користувач|
    : Вибирає себе в якості виконувача ;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Перевіряє отримані дані;
    

|Система|   
    : Створює завдання ;
 
    : Закріплює користувача за завданням;
    
    : Інформує користувача що завдання закріплено;
    
|Користувач|
    stop;
@enduml

</center>

## BP-6
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
<font color=000 size=16><b>ID:</b> ВP-6
<font color=000 size=16><b>Назва:</b> Закріплення завдання
<font color=000 size=16><b>Учасники:</b> Користувач  , Система
<font color=000 size=16><b>Передумови:</b> Наявність завдання, користувач є тімлідом
<font color=000 size=16><b>Результат:</b> Прикріплення завдання до проекту
<font color=000 size=16><b>Виключні ситуації:</b> Відсутні
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку закріпити завдання;
|Система|
    : Відкриває форму вибору завдання;
|Користувач|
    : Отримує форму закріплення завдання;
|Користувач|
    : Вибирає завдання ;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Надсилає користувачу форму вибора розробника;
    
|Користувач|
    : Обирає виконуючого завдання;
    
|Система|   
    : Назначає вибране завдання за вибраною людиною;
 
    : Надсилає користувачу результат;
    
  
    
|Користувач|
    stop;
@enduml

</center>

## BP-7
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

  left header
<font color=000 size=16><b>ID:</b> ВP-7
<font color=000 size=16><b>Назва:</b> Створення артефакту
<font color=000 size=16><b>Учасники:</b> Користувач  , Система
<font color=000 size=16><b>Передумови:</b> Користувач зайшов в обліковий запис
<font color=000 size=16><b>Результат:</b> Створений артефакт
<font color=000 size=16><b>Виключні ситуації:</b> Відсутні
<font color=000 size=16><b>Основний сценарій:</b>
end header

|Користувач|
    start
    : Натискає кнопку створення артефакту;
|Система|
    : Відкриває форму створення артефакту;
|Користувач|
    : Отримує форму ;
|Користувач|
    : Заповнює форму;
|Користувач|
    : Надсилає дані системі;
|Система|   
    : Перевіряє отримані дані ;
    


    : Створює артефакт;
 
    : Сповіщує користувача про створений артефакт;
    
  
    
|Користувач|
    stop;
@enduml

</center>

    
    <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

Діаграма прецедентів

</center>
