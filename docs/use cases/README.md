# Модель прецедентів

## Загальна діаграма

Основні можливості з груп користувачів (Діаграма №1)

```plantuml
@startuml

    actor "Користувач" as User 
    actor "Адміністратор" as Admin

    User  -d-|> Admin

    usecase "Реєстрація" as Registration

    usecase "Авторизація" as Login #aaa
    usecase "Управління \nданими" as Search
    usecase "Редагування \n профілю" as Edit
    usecase "Використання \nіснуючих матеріалів" as Sources
    usecase "Звернення \nза допомогою" as Help

    usecase "Додавання \nінформації" as AddSource
    usecase "Редагування \nбази користувачів" as Users
    usecase "Отримання \nстатистики" as Statistic

    User -u-> Registration
    User -u-> Login
   
    note left of Login #ffa
                  Якщо була
        проведена реєстрація
    end note

    User -l-> Search
    User -d-> Edit
    User --> Help
    User -r-> Sources

    Admin -d-> AddSource
    Admin -d-> Users
    Admin -l-> Statistic

@enduml
```

Можливості користувача (Діаграма №2)

```plantuml
@startuml

    actor "Користувач" as User

    note top of User
        
    end note

    usecase "Звернення \n за допомогою" as Help
    usecase "До системи" as SystemHelp
    usecase "До адміністратора" as AdminHelp

    usecase "Управління даними" as Sources
    usecase "Додати текст" as Add
    usecase "Видалити \nдоданий текст" as Remove
    usecase "Запит на \nобробку даних" as Accept

    note right of Add #fff
        Hello There
    end note

    AdminHelp .u.> Help
    SystemHelp .d.> Help

    Add .l.> Sources
    Remove .u.> Sources
    Accept .d.> Sources

    User -l-> Help
    User -r-> Sources

@enduml
```

```plantuml
@startuml

|#lightgrey|Користувач| 
    start

    :Натискає на кнопку \nвходу для реєстрації;
|#darkgrey|Система|
    :Отримує запит на реєстрацію;
    :Надсилає форму для \nвводу даних створення \nоблікового запису;
|Користувач|
    :Вводить дані для створення \nоблікового запису;
    :Натискає кнопку надсилання \nсистемі даних для реєстрації;
|Система|
    :Отримує дані \nкористувача;
    :Підтверджує дані;
    :Створює запис про \nдодавання користувача;
    :Додає користувача \nдо бази;
|Користувач| 
    :Отримує доступ до \nоблікового запису;
    
    stop

@enduml
```

<!-- 
note right #ffaaaa
    <b> user.reg_err1
end note -->
