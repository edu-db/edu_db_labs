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

## Користувач

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actorStyle Hollow

actor "Користувач" as User #F99417

    usecase "<b>SignUp</b>\n Зареєструватися в системі" as SignUp
    usecase "<b>SignIn</b>\n Увійти в систему" as SignIn
    usecase "<b>Logout</b>\n Вийти зі системи" as Logout
    usecase "<b>SignIn</b>\nВхід у систему" as SignIn
    usecase "<b>DataInteraction</b>\n Взаємодія з \n наборами даних" as DataInteraction
    usecase "<b>SearchByFilter</b>\n Пошук інформації \n за фільтром" as SearchByFilter
    usecase "<b>DownloadData</b>\n Завантаження даних у \n вибраному форматі" as DownloadData
    usecase "<b>CompareData</b>\n Порівняння двох (сумісних) \n наборів інформації" as CompareData
    usecase "<b>FindSimilarDataSets</b>\n Знаходження схожих \n наборів даних за певним критерієм" as FindSimilarDataSets

    usecase "<b>VisualizeData</b>\n Візуалізувати дані \n у вибраний спосіб" as VisualizeData
    usecase "<b>DataFolderInteraction</b>\n Взаємодія з  \n каталогами даних" as DataFolderInteraction
    usecase "<b>CreateDataFolder</b>\n Створити теку \n з даними" as CreateDataFolder
    usecase "<b>AddDataToDataFolder</b>\n Додати набір \n даниз у теку" as AddDataToDataFolder
    usecase "<b>DeleteDataFolder</b>\n Видалити теку\n  з даними" as DeleteDataFolder
    usecase "<b>RenameDataFolder</b>\n Перейменувати теку  \n з даними" as RenameDataFolder
    usecase "<b>ViewDataFromDataFolder</b>\n Переглянути набір \n даних у теці з даними" as ViewDataFromDataFolder

    	User -r->  SignUp
    	User -l->  SignIn
    	User -u->  DataInteraction

    SignIn <.l. Logout:extends
    DataInteraction <.u. SearchByFilter:extends
    DataInteraction <.u. DownloadData:extends
    DataInteraction <.u. CompareData:extends
    DataInteraction <.u. FindSimilarDataSets:extends
    DataInteraction <.u. VisualizeData:extends
    DataInteraction <.u. DataFolderInteraction:extends


    DataFolderInteraction<.u. CreateDataFolder:extends
    DataFolderInteraction<.u. AddDataToDataFolder:extends
    DataFolderInteraction<.u. DeleteDataFolder:extends
    DataFolderInteraction<.u. RenameDataFolder:extends
    DataFolderInteraction<.u. ViewDataFromDataFolder:extends

@enduml

</center>

## Адміністратор

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actorStyle Hollow
actor "Адміністратор" as Administrator #363062

    usecase "<b>SearchByFilterGuest</b>\nПошук даних" as SearchByFilterGuest
    usecase "<b>DownloadDataGuest</b>\nЗавантаження вибраного набору \n даних  на комп'ютер" as DownloadDataGuest


    Guest -u-> SearchByFilterGuest
    Guest -u-> DownloadDataGuest

@enduml

</center>
