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

**Діаграма прецедентів**

</center>



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

| ID                 | <span id=SignUp>`UserSignIn`</span>                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Реєстрація.                                                                                                                                                                                                                                                                                                                                                                                              |
| Учасники:          | Користувач, Система.                                                                                                                                                                                                                                                                                                                                                                                        |
| Передумови:        | - Користувач не зареєстрований в системі.                                                                                                                                                                                                                                                                                                                                                                                             |
| Результат:         | Користувач зареєстрований в системі.                                                                                                                                                                                                                                                                                                                                                                                            |
| Виключні ситуації: | Користувач з таким ім'ям вже існує. <font color="red">SignUp_EX_UsernameExist</font><br> Логін Користувача недопустимий. <font color="red">SignUp_EX_UsernameNotAllowed</font><br> Користувач з таким email вже існує. <font color="red">SignUp_EX_EmailExist</font><br> Email користувача не допустимий або не існує. <font color="red">SignUp_EX_EmailNotAllowed</font>                                            |

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

| ID                 | <span id=SignIn>`UserSignIn`</span>                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Авторизація.                                                                                                                                                                                                                                                                                                                                                                                              |
| Учасники:          | Користувач, Система.                                                                                                                                                                                                                                                                                                                                                                                       |
| Передумови:        | - Користувач зареєстрований в системі.                                                                                                                                                                                                                                                                                                                                                                                             |
| Результат:         | Користувач авторизований в системі.                                                                                                                                                                                                                                                                                                                                                                                            |
| Виключні ситуації: | Користувача з таким ім'ям не існує. <font color="red">SignIn_EX_UsernameNotExist</font><br> Логін або email і пароль не співпадають. <font color="red">SignIn_EX_UsernamePasswordNotMatch</font>                                            |

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
