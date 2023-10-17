# Модель прецедентів

## 1. Загальна схема:

@startuml

    actor "Гість" as Guest
    actor "Користувач" as User
    actor "Адміністратор" as Administrator

    usecase "<b>GuestSearch</b>\nПошук даних" as GuestSearch
    usecase "<b>GuestDowload</b>\Завантаження даних на комп'ютер" as GuestDowload
    usecase "<b>UserRegistration</b>\nРеєстрація у системі" as UserRegistration
    usecase "<b>UserLogin</b>\nВхід у систему" as UserLogin
    usecase "<b>DataInteraction</b>\nВзаємодія з даними" as DataInteraction
    usecase "<b>DataManagement</b>\nРегулювання даних у системі" as DataManagement
    usecase "<b>UserInteraction</b>\nВзаємодія з користувачами" as UserInteraction

    User -u-> Guest
    Administrator -u-> User

    Guest -u-> GuestSearch
    Guest -u-> GuestDowload

    User -r->  UserRegistration
    User -r->  UserLogin
    User -l->  DataInteraction

    Administrator -d-> DataManagement
    Administrator -d-> UserInteraction

@enduml

## 1.1 Гість:

@startuml

    actor "Гість" as Guest

    usecase "<b>GuestSearch</b>\nПошук даних" as GuestSearch
    usecase "<b>GuestDowload</b>\Завантаження даних на комп'ютер" as GuestDowload

    Guest -u-> GuestSearch
    Guest -u-> GuestDowload

@enduml 

## 1.2 Користувач:

@startuml

    actor "Користувач" as User

    usecase "<b>UserRegistration</b>\nРеєстрація у системі" as UserRegistration
    usecase "<b>UserLogin</b>\nВхід у систему" as UserLogin
    usecase "<b>DataInteraction</b>\nВзаємодія з даними" as DataInteraction
    usecase "<b>DataVisulization</b>\nВізуалізація даних" as DataVisulization
    usecase "<b>DataUpload</b>\nЗавантаження даних у систему" as DataUpload
    usecase "<b>UserDataDelete</b>\nВидалення власних даних користувачем" as UserDataDelete
    usecase "<b>DataModification</b>\nРедагування даних" as DataModification


    User -l-> UserRegistration
    User -r-> UserLogin
    User -u-> DataInteraction

    DataInteraction <.l. DataVisulization:extends
    DataInteraction <.u. DataUpload:extends
    DataInteraction <.u. UserDataDelete:extends
    DataInteraction <.r. DataModification:extends

@enduml

## 1.3 Адміністратор:

@startuml

    actor "Адміністратор" as Administrator

    usecase "<b>AdminLogin</b>\nВхід адміністратора у систему" as AdminLogin
    usecase "<b>AdminLogout</b>\nВихід адміністратора з системи" as AdminLogout
    usecase "<b>DataManagement</b>\nРегулювання даних у системі" as DataManagement
    usecase "<b>DataDelete</b>\nВидалення даних з системи" as DataDelete
    usecase "<b>DataUpload</b>\nЗавантаження даних у систему" as DataUpload
    usecase "<b>UserInteraction</b>\nВзаємодія з користувачами" as UserInteraction
    usecase "<b>UserBlock</b>\nБлокування користувача системи" as UserBlock
    usecase "<b>UserDelete</b>\nВидалення користувача з системи" as UserDelete


    Administrator -l-> DataManagement
    Administrator -u-> AdminLogin
    Administrator -u-> AdminLogout
    Administrator -r-> DataInteraction

    DataManagement <.u. DataDelete:extends
    DataManagement <.d. DataUpload:extends

    UserInteraction <.u. UserBlock:extends
    UserInteraction <.d. UserDelete:extends

@enduml
