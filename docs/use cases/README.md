# Модель прецедентів
## Загальна схема


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    padding: 1em;"
>

@startuml
top to bottom direction

actor Користувач as User

usecase "<b>DATA_INTERACTION</b>\nВзаємодіяти з данимми системи" as DATA_INTERACTION
usecase "<b>LOGIN</b>\nАвторизуватися" as LOGIN
usecase "<b>REGISTRATION</b>\nЗареєструватися" as REGISTRATION

User --> DATA_INTERACTION
User --> LOGIN
User --> REGISTRATION

actor Редактор as Editor

usecase "<b>CRUD_DATA</b>\nВзаємодіяти з даними" as CRUD_DATA

Editor --> CRUD_DATA

note top of Editor #808080
   Публікація даних можлива лише після дозволу адміністратора
end note

actor Адміністратор as Administrator

usecase "<b>USER_MODERATING</b>\nКерувати акаунтами користувачів" as USER_MODERATING
usecase "<b>PUBLICATION_VERIFICATION</b>\nНадати дозвіл на публікацію" as PUBLICATION_VERIFICATION

Administrator --> USER_MODERATING
Administrator --> PUBLICATION_VERIFICATION

Administrator --|> Editor
Editor --|> User

@enduml
</center>
<br><br>


## Схема користувача
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    padding: 1em;"
>

@startuml

top to bottom direction

actor Користувач as User

usecase "<b>REGISTRATION</b>\nЗареєструватися у сервісі" as REGISTRATION
usecase "<b>LOGIN</b>\nАвторизуватися у сервісі" as LOGIN
usecase "<b>DATA_SEARCH</b>\nШукти дані" as DATA_SEARCH
usecase "<b>DATA_DOWNLOAD</b>\nЗавантажити дані" as DATA_DOWNLOAD
usecase "<b>DATA_VISUALIZE</b>\nПереглнути дані" as DATA_VISUALIZE
usecase "<b>DATA_COMPARE</b>\nПорівняти дані" as DATA_COMPARE
usecase "<b>PROFILE</b>\nРедагувати профіль" as PROFILE
usecase "<b>LOGOUT</b>\nВийти з облікового запису" as LOGOUT

usecase "<b>DATA_INTERACTION</b>\nВзаємодіяти з данимми системи" as DATA_INTERACTION

User --> REGISTRATION
User -r-> LOGIN
User -l-> PROFILE
User --> LOGOUT
User -up-> DATA_INTERACTION

DATA_INTERACTION <.u. DATA_SEARCH:extends
DATA_INTERACTION <.u. DATA_DOWNLOAD:extends
DATA_INTERACTION <.u. DATA_VISUALIZE:extends
DATA_INTERACTION <.u. DATA_COMPARE:extends

@enduml
</center>
<br><br>


## Схема редактора
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    padding: 1em;"
>

@startuml

left to right direction

actor Редактор as Editor

usecase "<b>UPLOAD_DATA</b>\nЗавантажити нові статистичні дані" as UPLOAD_DATA
usecase "<b>EDIT_DATA</b>\nРедагувати дані" as EDIT_DATA
usecase "<b>PUBLISH_DATA</b>\nОпублікувати дані на сайті" as PUBLISH_DATA
usecase "<b>REMOVE_DATA</b>\nВидалити дані" as REMOVE_DATA

usecase "<b>CRUD_DATA</b>\nВзаємодіяти з даними" as CRUD_DATA

Editor --> CRUD_DATA

CRUD_DATA <.. PUBLISH_DATA:extends
CRUD_DATA <.. EDIT_DATA:extends
CRUD_DATA <.. UPLOAD_DATA:extends
CRUD_DATA <.. REMOVE_DATA:extends

@enduml
</center>
<br><br>


## Схема адміна
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    padding: 1em;"
>

@startuml

top to bottom direction

actor Адміністратор as Administrator

usecase "<b>USER_MODERATING</b>\nКерувати акаунтами користувачів" as USER_MODERATING
usecase "<b>PUBLICATION_VERIFICATION</b>\nНадати дозвіл на публікацію" as PUBLICATION_VERIFICATION
usecase "<b>USER_BLOCKING</b>\nЗаблокувати обліковий запис користувача" as USER_BLOCKING
usecase "<b>USER_DELETION</b>\nВидалити обліковий запис користувача" as USER_DELETION

Administrator --> USER_MODERATING
Administrator --> PUBLICATION_VERIFICATION

USER_MODERATING <.. USER_BLOCKING:extends
USER_MODERATING <.. USER_DELETION:extends

@enduml
</center>
<br><br>


# Сценарії використання
<br>

## Сценерацій реєстрації у системі

<table>
  <tr>
    <th>ID:</th>
    <td>USER.REGISTRATION</td>
  </tr>

  <tr>
    <th>НАЗВА:</th>
    <td>Зареєструватися у сервісі</td>
  </tr>

  <tr>
    <th>УЧАСНИКИ:</th>
    <td>Користувач, Система</td>
  </tr>

  <tr>
    <th>ПЕРЕДУМОВИ:</th>
    <td>Відсутність облікового запису у користувача</td>
  </tr>

  <tr>
    <th>РЕЗУЛЬТАТ:</th>
    <td>Новий обліковий запис для користувача</td>
  </tr>

  <tr>
    <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
    <td>Введені дані не задовольняють умови - USER.REGISTRATION_ERROR</td>
  </tr>

  <tr>
    <th rowspan="5">ОСНОВНИЙ СЦЕНАРІЙ:</th> 
    <td>1. Користувач переходить на сторінку реєстрації</td>
  </tr>

  <tr>
    <td>2. Користувач вводить необхідні реєстраційні дані</td>
  </tr>

  <tr>
    <td>3. Система перевіряє правильність введених даних (можлива USER.REGISTRATION_ERROR)</td>
  </tr>

  <tr>
    <td>4. Система створює новий обліковий запис для користувача</td>
  </tr>

  <tr>
    <td>5. Користувач отримує підтвердження про успішну реєстрацію</td>
  </tr>
</table>

@startuml

|Користувач|
start;
: Переходить на сторінку реєстрації;
: Вводить необхідні реєстраційні дані;

|Система|
: Перевіряє правильність введених даних;

note right #ff8c69
<b> Можлива
<b> USER.REGISTRATION_ERROR
end note

: Створює новий обліковий запис для користувача;

|Користувач|
 : Отримує підтвердження про успішну реєстрацію;
  stop;

@enduml

## Сценарій авторизування користувача

<table>
  <tr>
    <th>ID:</th>
    <td>USER.LOGIN</td>
  </tr>

  <tr>
    <th>НАЗВА:</th>
    <td>Авторизуватися у сервісі</td>
  </tr>

  <tr>
    <th>УЧАСНИКИ:</th>
    <td>Користувач, Система</td>
  </tr>

  <tr>
    <th>ПЕРЕДУМОВИ:</th>
    <td>Користувач має обліковий запис, але не авторизований</td>
  </tr>

  <tr>
    <th>РЕЗУЛЬТАТ:</th>
    <td>Вхід на сайт за допомогою облікового запису</td>
  </tr>

  <tr>
    <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
    <td>Некоректність введення даних - USER.LOGIN_ERROR</td>
  </tr>

  <tr>
    <th rowspan="5">ОСНОВНИЙ СЦЕНАРІЙ:</th> 
    <td>1. Користувач переходить на сторінку авторизації</td>
  </tr>

  <tr>
    <td>2. Користувач вводить свої облікові дані</td>
  </tr>

  <tr>
    <td>3. Система перевіряє наявність такого облікового запису (можлива USER.LOGIN_ERROR)</td>
  </tr>

  <tr>
    <td>4. Система надає доступ до особистого кабінету користувача</td>
  </tr>

  <tr>
    <td>5. Користувач здійснює вхід на сайт за допомогою облікового запису</td>
  </tr>
</table>

@startuml

|Користувач|
start;
: Переходить на сторінку авторизації;
: Вводить свої облікові дані;

|Система|
: Перевіряє наявність такого облікового запису;

note right #ff8c69
<b> Можлива
<b> USER.LOGIN_ERROR;
end note

: Надає доступ до особистого кабінету користувача;

|Користувач|
 : Здійснює вхід на сайт за допомогою облікового запису;
  stop;
@enduml



## Сценарій пошуку статистичних даних

<table>
  <tr>
    <th>ID:</th>
    <td>USER.DATA_SEARCH</td>
  </tr>

  <tr>
    <th>НАЗВА:</th>
    <td>Пошук статистичних даних</td>
  </tr>

  <tr>
    <th>УЧАСНИКИ:</th>
    <td>Користувач, Система</td>
   </tr>

  <tr>
    <th>ПЕРЕДУМОВИ:</th>
    <td>Користувач зайшов на сайт і бажає знайти конкретні статистичні дані</td>
  </tr>

  <tr>
    <th>РЕЗУЛЬТАТ:</th>
   <td>Статистичні дані, що задовольняють пошуковий запит</td>
  </tr>

  <tr>
    <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
    <td>Відсутність результатів за введеним запитом - USER.DATA_SEARCH_ERROR</td>
  </tr>

  <tr>
    <th rowspan="6">ОСНОВНИЙ СЦЕНАРІЙ:</th> 
    <td>1. Користувач розпочинає взаємодію</td>
  </tr>

  <tr>
    <td>2. Користувач використовує пошуковий рядок для введення свого запиту</td>
  </tr>

  <tr>
    <td>3. Користувач натискає на кнопку "Пошук"</td>
  </tr>

  <tr>
    <td>4. Система виконує пошук за запитом користувача в базі статистичних даних (можлива USER.DATA_SEARCH_ERROR)</td>
  </tr>

  <tr>
    <td>5. Система виводить статистичні дані, що задовольняють пошуковий запит у вигляді списку показників або візуалізацій</td>
  </tr>

  <tr>
    <td>6. Користувач закінчує взаємодію</td>
  </tr>
</table>


@startuml

|Користувач|
start;
: Розпочинає взаємодію;
: Використовує пошуковий рядок для введення свого запиту;
: Натискає на кнопку "Пошук";

|Система|
: Виконує пошук за запитом користувача в базі статистичних даних;

note right #ff8c69
<b> Можлива
<b> USER.DATA_SEARCH_ERROR;
end note

: Виводить статистичні дані, що задовольняють пошуковий запит
  у вигляді списку показників або візуалізацій;

|Користувач|
 : Закінчує взаємодію;
  stop;
@enduml


## Сценарій завантаження статистичних даних

<table>
  <tr>
     <th>ID:</th>
    <td>USER.DATA_DOWNLOAD</td>
  </tr>

  <tr>
    <th>НАЗВА:</th>
    <td>Завантажити статистичні дані</td>
  </tr>

  <tr>
    <th>УЧАСНИКИ:</th>
    <td>Користувач, Система</td>
  </tr>

  <tr>
    <th>ПЕРЕДУМОВИ:</th>
    <td>Користувач знайшов необхідні статистичні дані та бажає завантажити їх</td>
  </tr>

  <tr>
    <th>РЕЗУЛЬТАТ:</th>
    <td>Файли зі статистичними даними в обраному форматі</td>
  </tr>

  <tr>
    <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
    <td>Відмова у завантаженні у зв'язку з відсутністю авторизації - USER.DATA_DOWNLOAD_ERROR</td>
  </tr>

  <tr>
    <th rowspan="6">ОСНОВНИЙ СЦЕНАРІЙ:</th> 
    <td>1. Користувач розпочинає взаємодію</td>
  </tr>

  <tr>
    <td>2. Користувач знаходить необхідні статистичні дані на сайті</td>
  </tr>

  <tr>
    <td>3. Користувач вибирає параметри для завантаження даних</td>
  </tr>

  <tr>
    <td>4. Система генерує файли зі статистичними даними в обраному форматі (можлива USER.DATA_DOWNLOAD_ERROR)</td>
  </tr>

  <tr>
    <td>5. Система завантажує файли зі статистичними даними в обраному форматі на комп'ютер користувача</td>
  </tr>

  <tr>
    <td>6. Користувач закінчує взаємодію</td>
  </tr>
</table>

@startuml

|Користувач|
start;
: Розпочинає взаємодію;
: Знаходить необхідні статистичні дані на сайті;
: Вибирає параметри для завантаження даних;

|Система|
: Генерує файли зі статистичними даними в обраному форматі;

note right #ff8c69
<b> Можлива
<b> USER.DATA_DOWNLOAD_ERROR;
end note

: Завантажує файли зі статистичними даними в обраному форматі на комп'ютер користувача;

|Користувач|
 : Закінчує взаємодію;
  stop; 

@enduml


## Сценарій візуалізації наборів даних

<table>
  <tr>
    <th>ID:</th>
     <td>USER.DATA_VISUALIZE</td>
  </tr>

  <tr>
    <th>НАЗВА:</th>
    <td>Візуалізувати статистичні дані</td>
  </tr>

  <tr>
    <th>УЧАСНИКИ:</th>
    <td>Користувач, Система</td>
  </tr>

  <tr>
    <th>ПЕРЕДУМОВИ:</th>
    <td>Користувач знайшов необхідні статистичні дані та бажає візуалізувати їх</td>
  </tr>

  <tr>
    <th>РЕЗУЛЬТАТ:</th>
    <td>Інтерактивна візуалізація на основі обраних статистичних даних</td>
  </tr>

  <tr>
    <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
    <td>Обрані дані неможливо візуалізувати, візуалізація недоступна - USER.DATA_VISUALIZE_ERROR</td>
  </tr>

  <tr>
    <th rowspan="5">ОСНОВНИЙ СЦЕНАРІЙ:</th> 
    <td>1. Користувач знаходить необхідні статистичні дані на сайті</td>
  </tr>

  <tr>
    <td>2. Користувач вказує, що хоче візуалізувати дані</td>
  </tr>

  <tr>
    <td>3. Користувач обирає тип візуалізації</td>
  </tr>

  <tr>
    <td>4. Система генерує інтерактивну візуалізацію на основі обраних статистичних даних та вибраного типу візуалізації</td>
  </tr>

  <tr>
    <td>5. Користувач отримує доступ до створеної візуалізації, може взаємодіяти з нею</td>
  </tr>
</table>


@startuml

|Користувач|
start;
: Знаходить необхідні статистичні дані на сайті;
: Вказує, що хоче візуалізувати дані;
: Обирає тип візуалізації;  

|Система|
: Генерує інтерактивну візуалізацію на основі обраних статистичних
  даних та вибраного типу візуалізації;
  
  note right #ff8c69
<b> Можлива
<b> USER.DATA_VISUALIZE_ERROR;
end note

: Отримує доступ до створеної візуалізації, може взаємодіяти з нею;

|Користувач|
 : Закінчує взаємодію;
  stop;

@enduml
