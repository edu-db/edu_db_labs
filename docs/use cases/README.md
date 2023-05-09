# Модель прецедентів

## Діаграма прецедентів 

```uml
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
```

**Діаграма прецедентів**

</center>

