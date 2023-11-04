# Модель прецедентів

## Загальна схема

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actorStyle Hollow
actor "Гість" as Guest #F5F5F5
actor "Користувач" as User #F99417
actor "Адміністратор" as Administrator #363062

    usecase "<b>SearchData</b>\nПошук даних" as SearchData
    usecase "<b>DownloadData</b>\nЗавантаження вибраного набору \n даних  на комп'ютер" as DownloadData
    usecase "<b>SignUp</b>\nРеєстрація у системі" as SignUp
    usecase "<b>SignIn</b>\nВхід у систему" as SignIn
    usecase "<b>DataInteraction</b>\n Взаємодія з наборами даних" as DataInteraction
    usecase "<b>DataManagement</b>\nКонтроль наборів даних у системі" as DataManagement
    usecase "<b>UserManagement</b>\n Керування користувачами" as UserManagement

    User -u-> Guest
    Administrator -u-> User

    Guest -u-> SearchData
    Guest -u-> DownloadData

    User -u->  SignUp
    User -l->  SignIn
    User -r->  DataInteraction

    Administrator -r-> DataManagement
    Administrator -l-> UserManagement

@enduml

</center>

## Гість

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actorStyle Hollow
actor "Гість" as Guest #F5F5F5

    usecase "<b>SearchByFilterGuest</b>\nПошук даних" as SearchByFilterGuest
    usecase "<b>DownloadDataGuest</b>\nЗавантаження вибраного набору \n даних  на комп'ютер" as DownloadDataGuest


    Guest -u-> SearchByFilterGuest
    Guest -u-> DownloadDataGuest

@enduml

</center>
