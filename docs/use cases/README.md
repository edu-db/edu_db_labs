# Модель прецедентів

## 1. Діаграма прецедентів 
@startuml

usecase "Зареєструватись" as NEW_CUSTOMER_CREATE_POLLATION
usecase "Авторизуватись" as CUSTOMER_AUTHORIZATION
usecase "Генерувати голосування" as CREATE_POLL
usecase "Корегувати голосування" as POLL_REDACTION
usecase "Знищувати голосування" as POLL_DISTRACTION
usecase "Одерження підсумків" as RECEIVE_SUMMARY
usecase "Відправка зпрошення" as SEND_POLL
usecase "Видалити обліковий запис" as CLIENT_DISTRACTION


Клієнт ---> NEW_CUSTOMER_CREATE_POLLATION
Клієнт ---> CUSTOMER_AUTHORIZATION
Клієнт ---> CLIENT_DISTRACTION
Замовець ---> CREATE_POLL
Замовець ---> POLL_REDACTION
Замовець ---> POLL_DISTRACTION
Замовець ---> RECEIVE_SUMMARY
Замовець ---> SEND_POLL

Замовець ---|> Клієнт
@enduml
## 2. Usecases для клієнта
@startuml
usecase "Зареєструватись" as NEW_CUSTOMER_CREATE_POLLATION
usecase "Авторизуватись" as CUSTOMER_AUTHORIZATION
usecase "Видалити обліковий запис" as CLIENT_DISTRACTION
Клієнт ---> NEW_CUSTOMER_CREATE_POLLATION
Клієнт ---> CUSTOMER_AUTHORIZATION
Клієнт ---> CLIENT_DISTRACTION
@enduml
## 3. Usecases для замовця
@startuml
usecase "Генерувати голосування" as CREATE_POLL
usecase "Корегувати голосування" as POLL_REDACTION
usecase "Знищувати голосування" as POLL_DISTRACTION
usecase "Одерження підсумків" as RECEIVE_SUMMARY
usecase "Відправка зпрошення" as SEND_POLL
Замовець ---> CREATE_POLL
Замовець ---> POLL_REDACTION
Замовець ---> POLL_DISTRACTION
Замовець ---> RECEIVE_SUMMARY
Замовець ---> SEND_POLL
@enduml
## 4. Сценарії
