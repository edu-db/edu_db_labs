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

