# Модель прецедентів

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

**Діаграма прецедентів**

</center>

