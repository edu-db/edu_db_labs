# Модель прецедентів

## Діаграма прецедентів

<center style="
    border-radius:12px;
    border: 3px solid #99ffcc;
    padding: 0.7em;"
>

@startuml


    actor "Адміністратор проекту" as Administrator #ffffaa
    actor "Користувач" as User #ffffaa

    usecase "<b>UC_U_1</b>\nРедагування облікового запису" as UC_U_1 #ccffe6
    usecase "<b>UC_U_2</b>\nДоступ до системи" as UC_U_2 #ccffe6
    usecase "<b>UC_U_3</b>\nСтворення проекту" as UC_U_3 #ccffe6
    usecase "<b>UC_U_4</b>\nЗв'язок з службою підтримки" as UC_U_4 #ccffe6
    usecase "<b>UC_A_1</b>\nРедагування проекту" as UC_A_1 #ccffe6
    
    User --> UC_U_1
    User --> UC_U_2
    User --> UC_U_3
    User --> UC_U_4
    Administrator --> UC_A_1

    Administrator -u-|> User

    note top of User #fff

        Підтримка надається
        лише користувачам, що
        зареєстровані в системі

    end note
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Київ-2023
    end footer

@enduml

**Діаграма прецедентів**

</center>

## Usecases для користувача

<center style="
    border-radius:12px;
    border: 3px solid #99ffcc;
    padding: 0.7em;"
>

@startuml

    left to right direction

    actor "Користувач" as User #ffffaa
    
    usecase "<b>UC_U_1</b>\nРедагування облікового запису" as UC_U_1 #ccffe6
    usecase "<b>UC_U_2</b>\nДоступ до системи" as UC_U_2 #ccffe6
    usecase "<b>UC_U_3</b>\nСтворення проекту" as UC_U_3 #ccffe6
    usecase "<b>UC_U_4</b>\nЗв'язок з службою підтримки" as UC_U_4 #ccffe6

    User -d-> UC_U_1
    User -d-> UC_U_2
    User -d-> UC_U_3
    User -d-> UC_U_4

    usecase "<b>UC_U_1_1</b>\nДодати фото" as UC_U_1_1
    usecase "<b>UC_U_1_2</b>\nДодати ім'я та прізвище" as UC_U_1_2
    usecase "<b>UC_U_1_3</b>\nЗмінити пароль" as UC_U_1_3

    usecase "<b>UC_U_2_1</b>\nЗареєструвати акаунт" as UC_U_2_1
    usecase "<b>UC_U_2_2</b>\nУвійти в акаунт" as UC_U_2_2
    usecase "<b>UC_U_2_3</b>\nВідновити пароль" as UC_U_2_3

    usecase "<b>UC_U_3_1</b>\nДодати назву проекту" as UC_U_3_1
    usecase "<b>UC_U_3_2</b>\nДодати опис проекту" as UC_U_3_2

    usecase "<b>UC_U_4_1</b>\nСтворити чат" as UC_U_4_1
    usecase "<b>UC_U_4_2</b>\nПередивитись чат" as UC_U_4_2

    UC_U_1_1 .u.> UC_U_1 :extends
    UC_U_1_2 .u.> UC_U_1 :extends
    UC_U_1_3 .u.> UC_U_1 :extends

    UC_U_2_1 .u.> UC_U_2 :extends
    UC_U_2_2 .u.> UC_U_2 :extends
    UC_U_2_3 .u.> UC_U_2 :extends

    UC_U_3_1 .u.> UC_U_3 :extends
    UC_U_3_2 .u.> UC_U_3 :extends

    UC_U_4_1 .u.> UC_U_4 :extends
    UC_U_4_2 .u.> UC_U_4 :extends
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Київ-2023
    end footer

@enduml

**Usecases для користувача**

</center>

## Usecases для адміністратора проекту

<center style="
    border-radius:12px;
    border: 3px solid #99ffcc;
    padding: 0.7em;"
>

@startuml

    left to right direction

    actor "Адміністратор проекту" as Administrator #ffffaa
    
    usecase "<b>UC_A_1</b>\nРедагування проекту" as UC_A_1 #ccffe6
    
    Administrator -d-> UC_A_1

    usecase "<b>UC_A_1_1</b>\nВидалити проект" as UC_A_1_1
    usecase "<b>UC_A_1_2</b>\nРедагувати команду" as UC_A_1_2

    UC_A_1_1 .u.> UC_A_1 :extends
    UC_A_1_2 .u.> UC_A_1 :extends
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Київ-2023
    end footer

@enduml

**Usecases для адміністратора проекту**

</center>