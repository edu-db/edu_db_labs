# Модель прецедентів

## 1. Діаграма прецедентів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left to right direction
    
    actor "Гість" as Guest
    actor "Користувач" as User
    actor "Адміністратор" as Expert
    
    usecase "Log in\nЗареєструвати обліковий запис" as UC_1
    usecase "Sign in\nУвійти в обліковий запис" as UC_2
    usecase "Log out\nВийти із обікового запису" as UC_3
    usecase "Media content management\nЗапити на пошук та експорт медіа-контенту" as UC_4
    usecase "Account management\nВнесення змін до облікових записів" as UC_5
    usecase "Getting information about users\nПереглянути інформацію щодо облікових записів користувачів" as UC_6
    
    Guest --> UC_1
    Guest --> UC_2
    Guest --> UC_3
    
    User --|> Guest
    User --> UC_4

    Expert --|> Guest
    Expert --> UC_5
    Expert --> UC_6

@enduml
