# Проєктування бази даних

## Модель бізнес-об'єктів 

```plantuml
@startuml

entity User

entity User_permissions

    entity User_permissions.id
    entity User_permissions.user_id
    entity User_permissions.permission_id


        User_permissions *-u- User_permissions.id
        User_permissions *-u- User_permissions.user_id
        User_permissions *-u- User_permissions.permission_id

entity Authtoken

    entity Authtoken.key
    entity Authtoken.created
    entity Authtoken.user_id

        Authtoken *-u- Authtoken.key
        Authtoken *-l- Authtoken.created
        Authtoken *-d- Authtoken.user_id

entity Admin_log

    entity Admin_log.id
    entity Admin_log.action_time
    entity Admin_log.object_id
    entity Admin_log.object_repr
    entity Admin_log.action_flag
    entity Admin_log.change_message
    entity Admin_log.content_type_id
    entity Admin_log.user_id

        Admin_log *-u- Admin_log.id
        Admin_log *-u- Admin_log.action_time
        Admin_log *-u- Admin_log.object_id
        Admin_log *-u- Admin_log.object_repr
        Admin_log *-d- Admin_log.action_flag
        Admin_log *-d- Admin_log.change_message
        Admin_log *-d- Admin_log.content_type_id
        Admin_log *-d- Admin_log.user_id

entity Content_type

    entity Content_type.id
    entity Content_type.app_label
    entity Content_type.model

        Content_type *-u- Content_type.id
        Content_type *-r- Content_type.app_label
        Content_type *-d- Content_type.model

entity App_text

    entity App_text.id
    entity App_text.content
    entity App_text.symbol_number
    entity App_text.word_number
    entity App_text.sentence_number
    entity App_text.most_used_word
    entity App_text.user_id

        App_text *-- App_text.id
        App_text *-- App_text.content
        App_text *-- App_text.symbol_number
        App_text *-- App_text.word_number
        App_text *-- App_text.sentence_number
        App_text *-- App_text.most_used_word
        App_text *-- App_text.user_id



User "1,1" -u- "0,*" User_permissions
User "1,1" -l- "0,*" Authtoken
User "1,1" -d- "0,*" App_text
User "1,1" -r- "0,*" Admin_log
Content_type "1,1" -l- "0,*" Admin_log
@enduml
```

```plantuml
@startuml
    entity User

    entity User.id
    entity User.password
    entity User.last_login
    entity User.is_superuser
    entity User.username
    entity User.first_name
    entity User.last_name
    entity User.email
    entity User.is_staff
    entity User.is_active
    entity User.date_joined

        User *-- User.id
        User *-- User.password
        User *-- User.last_login
        User *-- User.is_superuser
        User *-l- User.username
        User *-r- User.first_name
        User *-u- User.last_name
        User *-u- User.email
        User *-u- User.is_staff
        User *-u- User.is_active
        User *-u- User.date_joined
@enduml
```

## ER-модель

```plantuml
@startuml

entity user {
    id INT
    password: TEXT
    login: TEXT
    is_superuser: BOOLEAN
    username: TEXT
    first_name: TEXT
    last_name: TEXT
    email: TEXT
    is_staff: BOOLEAN
    is_active: TEXT
    date_joined: DATETIME
}

entity user_permissions{
    id: BIGINT
    user_id: INT
    permission_id: INT
}

entity authtoken{
    key: TEXT
    created: DATETIME
    user_id: INT
}

entity admin_log{
    id: INT
    action_time: DATETIME
    object_id: LONGTEXT
    object_repr: TEXT
    action_flag: SMALLINT
    change_message: LONGTEXT
    content_type_id: INT
    user_id: INT
}

entity content_type{
    id: INT
    app_label: TEXT
    model: TEXT
}

entity app_text {
    id: BIGINT
    content: LONGTEXT
    symbol_number: INT
    word_number: INT
    sentence_number: INT
    most_used_word: TEXT
    user_id: INT
}

app_text "0,*" -u- "1,1" user
user_permissions "0,*" -d- "1,1" user
authtoken "0,*" -r- "1,1" user
admin_log "0,*" -l- "1,1" user
admin_log "0,*" -r- "1,1" content_type

@enduml
```

## Реляційна схема

![alt text](./schema.png)

