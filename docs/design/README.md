# Проєктування бази даних

### В рамках проекту розробляється: 

## модель бізнес-об'єктів 
@startuml
entity User
entity User.username #ffffff
entity User.email #ffffff
entity User.password #ffffff 
entity User.avatar #ffffff

entity Role
entity Role.name #ffffff
entity RegisteredUser #ffffff
entity Editor #ffffff
entity Administrator #ffffff

entity Access
entity Grant

entity RequestType
entity RequestType.name #ffffff

entity OperationType
entity Read #ffffff
entity Delete #ffffff
entity Download #ffffff
entity Upload #ffffff
entity Edit #ffffff
entity ManageEditors #ffffff
entity Donate #ffffff
entity OperationType.name #ffffff

entity FileCollection

entity DataFile
entity DataFile.name #ffffff 
entity DataFile.description #ffffff 
entity DataFile.file_csv #ffffff 
entity DataFile.uploadDate #ffffff
entity DataFile.hasGraph #ffffff

entity EditForm
entity EditForm.editorUsername #ffffff
entity EditForm.oldFile_csv #ffffff
entity EditForm.newFile_csv #ffffff
entity EditForm.editDate #ffffff

entity Category
entity Category.name #ffffff 

User.username -d-* User
User.email -d-* User 
User.password -d-* User 
User.avatar -l-* User

User "1,1" -l- "0,*" Access
Access "0,*" -l- "0,1" Role
Role "0,1" -d- "0,*" Grant
Grant "0,*" -d- "1,1" RequestType
RequestType "0,*" -d- "0,1" OperationType
Role.name -r-* Role
RegisteredUser ..> Role : instanceOf
Editor ..> Role : instanceOf
Administrator ..> Role : instanceOf

RequestType.name -l-* RequestType

OperationType.name -l-* OperationType
Read .r.> OperationType : instanceOf
Delete  .u.> OperationType : instanceOf
Download  .u.> OperationType : instanceOf
Upload .u.> OperationType : instanceOf
Edit .u.> OperationType : instanceOf
ManageEditors .u.> OperationType : instanceOf
Donate  .u.> OperationType : instanceOf

User "1,1" ---d- "0,*" FileCollection
FileCollection "0,*" -d-- "1,1" DataFile

EditForm "0,*" --u- "1,1" DataFile
Category "1,1" --u- "0,*" DataFile
 
DataFile.name -d-* DataFile
DataFile.description -r-* DataFile
DataFile.file_csv -d-* DataFile
DataFile.uploadDate -d-* DataFile
DataFile.hasGraph -d-* DataFile

Category.name -u-* Category

EditForm.editorUsername -l-* EditForm
EditForm.oldFile_csv -u-* EditForm
EditForm.newFile_csv -u-* EditForm
EditForm.editDate -u-* EditForm
@enduml


## ER-модель

## Опис Моделей

### User

Сутність, яка являє собою обліковий запис користувача з особистою інформацією.
Має поля:
- username - ім'я користувача.
- email - адреса електронної пошти користувача.
- password - пароль користувача.
- avatar - фотографія профілю користувача.

### Role

Сутність, яка використовується для визначення прав користувача.
Має поля:
- name - Назви ролей

Роль може не мати прав, або може мати скільки завгодно.
Роль може не мати доступів, або може мати скільки завгодно.

### RequestType

Сутність, яка містить в собі об'єкт (унікальний id в системі), якому надають певний доступ, і сам доступ, який забезпечується словником OperationType.

### OperationType

Словник, який зберігає в собі перелік дій, які можуть бути виконані над сутністю системи.
- name - назва дії.

### Access

Сутність-асоціація, яка зберігає в собі сукупність ролей, які надані користувачу. В таблиці може існувати необмежена кількість сутностей, які стосуються одного користувача і які стосуються однієї ролі.

### Grant

Сутність-асоціація, яка зберігає сукупність прав, які має певна роль. В таблиці може існувати необмежена кількість сутностей, які стосуються ролі і які стосуються виконуваної дії над певним об'єктом.

### FileCollection

Сутність-асоціація, яка зберігає в собі сукупність файлів з даними для користувача. В таблиці може існувати необмежена кількість сутностей, які стосуються одного користувача і які стосуються одного файлу.

### DataFile

Сутність, яка являє собою файл з набором певних статистичних даних.
Має поля:
- name - назва файлу.
- description - опис змісту файлу.
- file_csv - формат відображення даних.
- uploadDate - дата завантаження файлу.
- hasGraph - чи є візуалізація графіком.

### EditForm

Сутність, яка являє собою форму для редагування даних у файлі.
Має поля:
- editorUsername - ім'я редактора, який вніс зміни у файл.
- oldFile_csv - старий незмінений файл.
- newFile_csv - новий змінений файл.
- editDate - змінені дані.

### Category

Сутність, яка являє собою категорію до якої належить файл даних.
Має поля:
- name - назва категорії.

## реляційна схема

