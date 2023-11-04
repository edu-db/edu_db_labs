# Проєктування бази даних

## Business Entity Model

@startuml

    entity Project
    entity Project.name #ffffff
    entity Project.description #ffffff
    entity Project.status #ffffff
    entity Task #ffffff
    entity Task.status #ffffff
    entity Task.name #ffffff
    entity Task.developer #ffffff
    entity Task.deadline #ffffff
    entity Task.ID #ffffff

    entity PaymentData #ffffff
    entity PaymentData.email #ffffff
    entity PaymentData.cardNumber #ffffff
    entity PaymentData.cardExpireDate #ffffff
    entity PaymentData.cardCVV #ffffff

    entity Review
    entity Review.text #ffffff
    entity Review.rate #ffffff

    entity User
    entity User.login #ffffff
    entity User.password #ffffff
    entity User.email #ffffff
    entity User.picture #ffffff
    entity User.role #ffffff

    entity Member
    
    entity Role
    entity Role.id #ffffff
    
    entity RoleGrant
    
    entity Permission 
    
    Role "1,1"--l-"0,*" RoleGrant
    RoleGrant "0,*"--u-"1,1" Permission
    Role.id --d-* Role

    Project.name --d-*  Project
    Project.description --d-*  Project
    Project.status --d-*  Project
    Task "0,*" -- "1,1"  Project
    Task.status --u-*  Task
    Task.name --d-*  Task
    Task.developer --r-*  Task
    Task.deadline --d-*  Task
    Task.ID --u-*  Task

    PaymentData "0,*" --u- "1,1" Project
    PaymentData.email --l-* PaymentData
    PaymentData.cardNumber --r-* PaymentData
    PaymentData.cardExpireDate --u-* PaymentData
    PaymentData.cardCVV --u-* PaymentData

    Review  "0,*" --u- "1,1" Project
    Review.text --u-* Review
    Review.rate --u-* Review

    User.login --r-* User
    User.password --u-* User
    User.email --u-* User
    User.picture --l-* User
    User.role --u-* User

    Member "0,*"--u-"1,1" Role
    Member "0,*" -- "1,1" User
    Member  "1,*" -- "0,*" Project

@enduml

## ER-model

@startuml

namespace ProjectManagment  {

entity Project <<ENTITY>> {
    ID: UUID
    name: TEXT
    description: TEXT
    status: TEXT
}

entity Task <<ENTITY>> {
    ID: UUID
    name: TEXT
    developer: TEXT
    status: TEXT
    deadline: DATE
}

entity PaymentData <<ENTITY>> {
    ID: UUID  
    cardNumber: NUMBER
    cardCVV: NUMBER
    cardExpireDate: DATE
    email: TEXT  
}

entity Review <<ENTITY>>{
    ID: UUID
    text: TEXT
    rate: NUMBER
}

}

namespace AccessPolicy  {
entity Member  <<ENTITY>>{
    ID: UUID
}
entity Role <<ENTITY>>{
    ID: UUID
}
entity RoleGrant <<ENTITY>>{
    ID: UUID
}
entity Permission <<ENTITY>>{
    ID: UUID
}
}

namespace UserProfile {
entity User <<ENTITY>>{
    ID: UUID
    LOGIN: TEXT
    PICTURE: BYTE
    PASSWORD: BYTE
    EMAIL: TEXT
    ROLE: TEXT
}
}

Project "1.1  "<---"0.*" Task
Project "1.1 "<---"0.* " PaymentData
Project "1.1"<---"0.*   " Review

Project "0.*"<-l--"1.*" Member
Role "1.1"<---"0.*" Member
Role "1.1"<---"0.*" RoleGrant
Permission "1.1"<---"0.*" RoleGrant
User "1.1"<---"0.*" Member

@enduml

## Опис ER-моделі

### Task (Завдання)
Представляє собою завдання. Має поля:

- Id: BINARY - унікальний код
- Name: VARCHAR - назва завдання
- Developer: VARCHAR - ім'я розробника, який виконує завдання
- Status: VARCHAR - статус завдання
- Deadline: DATETIME - термін, до якого потрібно виконати завдання
- ProjectId: BINARY - унікальний код проєкту, до якого прив'язане завдання

### Payments (Оплата)
Представляє собою місце, де проводиться оплата. Має поля:

- Id: BINARY - унікальний код
- CardNumnber: INT - номер картки
- CardCVV: INT - CVV код картки
- CardExpireDate: DATETIME - термін дії картки 
- Email: VARCHAR - пошта користувача, куди прийде повідомлення про оплату
- ProjectId: BINARY - унікальний код проєкту, до якого прив'язана оплата

### Project (Проєкт)
Власне представляє собою проєкт, над яким працює команда. Має поля:

- Id: BINARY - унікальний код
- name: VARCHAR - ім'я проєкту
- description: VARCHAR - опис проєкту
- manager: BINARY - менеджер проєкту

### Reviews (Відгуки)
Представляє собою відгук користувача про проєкт. Має поля:

- Id: BINARY - унікальний код
- Text: VARCHAR - текст відгуку
- Rate: INT - оцінка
- ProjectId: BINARY - унікальний код проєкту, до якого прив'язаний відгук

### Projects_members (Учасники поточного проєкту)
Projects_members - це сутність-асоціація, яка зберігає в собі код проєкту, та учасників, які працюють над проєктом. 

### Members (Учасники)
Members - це сутність-асоціація, яка зберігає в собі сукупність учасників та їх поточних ролей.

### User (Користувач)
Являє собою обліковий запис в якому зберігаються дані користувача. Має поля:

- Id: BINARY - унікальний код
- Login: VARCHAR - логін користувача
- Picture: MEDIUMBLOB - фото користувача
- Password: BLOB - пароль користувача
- Email: VARCHAR - пошта користувача
- Role: VARCHAR - роль користувача

### Roles (Ролі)
Ролі, які використовується для визначення прав користувача. Має поля:

- Id: BINARY - унікальний код
- Name: VARCHAR - назви ролей

### Role_grant (Права ролей)
Role_grant - це сутність-асоціація, яка зберігає сукупність прав, які має певна роль.

### Permissions (Права)
Права, які можуть додаватися до ролі. Має поля:

- Id: BINARY - унікальний код
- Permission: VARCHAR - право, яке надається


## Relational Schema

![Db_Model](https://github.com/illiakroshka/edu_db_labs/assets/87243401/835d4983-e09e-4fb4-ae57-06e8e84ed48e)
