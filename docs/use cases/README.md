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

    title
        <font size=18 color=black>Загальна схема
        
        
    end title


    actor "Користувач" as User #eeeeaa
    actor "Менеджер" as Manager #eeeeaa
    actor "Тімлід" as Teamleader #eeeeaa
    actor "Розробник" as Developer #eeeeaa
    
    
    usecase "Зареєструватися" as regis
    usecase "Авторизуватись" as login
    
    User -up-> regis 
    User -up-> login
    
    
    Manager -u-|> User
    Teamleader -u-|> User
    Developer -u-|> User
    
    
    usecase "Редагувати \n проект" as edit_project #aaeeaa
    usecase "Редагувати \n плани проекту" as edit_plan_project #aaeeaa
    
    usecase "Редагувати \n артефакти" as edit_artifact #aaeeaa
    usecase "Редагувати \n завдання" as edit_task #aaeeaa
    
    usecase "Переглядати \n завдання" as review_task #aaeeaa
    
    
    Manager --> edit_project
    Manager --> edit_plan_project
    
    Teamleader --> edit_artifact
    Teamleader --> edit_task
    
    Developer --> review_task
    


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

    title
        <font size=18 color=black>Project Manager
        
        
    end title


    actor "Менеджер" as Manager #eeeeaa

    
    usecase "Редагувати \n проекти" as edit_project #aaeeaa
    
    usecase "Створити проект" as create_project
    usecase "Змінити властивості \n проекту" as change_project_properties
    usecase "Видалити проект" as delete_project
    
    usecase "Редагувати \n плани проекту" as edit_plan_project #aaeeaa
    
    usecase "Створити план" as create_plan
    usecase "Змінити план" as change_plan
    usecase "Видалити план" as delete_plan
    usecase "Призначити \n план тімліду" as assign_team_plan
    

    
    create_project .d.> edit_project :extends
    change_project_properties .d.> edit_project :extends
    delete_project .d.> edit_project :extends
    
    Manager -up-> edit_project 
    Manager --> edit_plan_project 
    
    create_plan .u.> edit_plan_project :extends
    change_plan .u.> edit_plan_project :extends
    delete_plan .u.> edit_plan_project :extends
    assign_team_plan .u.> edit_plan_project :extends


    


@enduml


</center>



















