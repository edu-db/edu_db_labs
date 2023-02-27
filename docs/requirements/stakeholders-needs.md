# Запити зацікавлених осіб

## Вступ

_[Вступ повинен містити короткий огляд всього документу.]_

### Мета

_[Визначення мети цієї сукупності вимог. Зазвичай такою метою є створення та впровадження
інформаційної системи відповідного призначення.]_

### Контекст

_[Короткий опис того, з якими проектами пов'язаний цей документ, на що він впливає.]_

### Основні визначення та скорочення

_[Розділ містить визначення всіх термінів та скорочень, необхідних для правильного
тлумачення вимог. Можна зробити посилання на документ, в якому поданий аналіз предметної області.]_

### Посилання

_[Розділ містить повний список всіх документів, про які згадується.]_

## Короткий зміст

:round_pushpin: **Навігаційна панель:**

- [Характеристика ділових процесів](#характеристика-ділових-процесів)
- [Короткий огляд продукту](#короткий-огляд-продукту)
- [Функціональність](#функціональність)
- [Практичність](#практичність)
- [Надійність](#надійність)
- [Продуктивність](#продуктивність)
- [Експлуатаційна придатність](#експлуатаційна-придатність)

## Характеристика ділових процесів

В цьому розділі визначаються зовнішні фактори, що впливають на бізнес (бізнес-актори),
та внутрішні фактори (робітники), дається загальна характеристика діяльності бізнес-акторів
та робітників, яка здійснюється за допомогою бізнесу.

**Зовнішні фактори (бізнес-акторами)**, що впливають на бізнес:

- Користувач системи управління проектами — особа, яка використовує системи задля задоволення власних потреб. Ієрархічно (по спаданню наданих привілеїв) можна виділити наступні ролі користувачів:
  1. <span style="color:#EA3211">Менеджер воркспейсу</span> — користувач проєкту, який займається адміністуванням воркспейсу (робоча область, яка включає проєкти і завдання зі спільними темами). Має можливість створювати проєкти, призначати менеджерів проєкту, а також має права менеджеру проєкту.
  2. <span style="color:#EA8E11">Менеджер проєкту</span> — користувач проєкту, який має особливі привілеї в межах адміністрування проєкту(наприклад, може додавати та вилучати користувачів проєкту). Призначається менеджером воркспейсу.
  3. <span style="color:#2ABE28">Користувач проєкту</span> — користувач системи, якого додали до учасників проєкту. Має найнижчі права в межах воркспейсу: додавання, редагування та видалення завдань на дошках проєкту, побудова графіків чи відмітка дат на календарі.

**Внутрішні фактори (робітники)**:

- <span style="color:#EA3211">Адміністратор системи</span>:necktie: — найманий працівник, який має найбільші права в системі з можливістю відповідати на запити користувачів та блокувати тих, хто порушує правила користування системою.
<hr>

Дається опис бізнес-сценаріїв взаємодії бізнес-акторів, робітників та інформаційної системи за допомогою наступної
специфікації:

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="width:32%; border-right:1px solid black; font-weight:bold">User_Registration</td>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="font-weight:bold">User_Authorization</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td style="border-right:1px solid black; text-align:start">Створення облікового запису користувача у системі</td>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td>Авторизація користувача у системі</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="border-right:1px solid black; text-align:start">Користувач, Система</td>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td>Користувач, Система</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black; text-align:start">Обліковий запис користувача попередньо не був створений у системі</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Користувач зареєстрований у системі</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td style="border-right:1px solid black; text-align:start">Створення облікового запису користувача в системі</td>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td>Користувач авторизований у системі</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="border-right:1px solid black; text-align:start">UserReg_EX_AccAlreadyExists — Обліковий запис користувача вже створений у системі</br>
    UserReg_EX_NoInput — Користувач не ввів свої реєстраційні дані</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="text-align:start">UserAuth_EX_AccountNotExist — Користувач не зареєстрований у системі<br>
    UserAuth_EX_NoInput — Користувач не вписав авторизаційні дані та намагається авторизуватися<br>
    UserAuth_EX_InvalidСredentials — Користувач не пройшов авторизацію</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; text-align:start">1. Користувач починає взаємодію<br>
    2. Користувач вводить реєстраційні дані<br>
    3. Користувач натискає на кнопку/іконку "Зареєструватися" (UserReg_EX_NoInput)<br>
    4. Система перевіряє наявність облікового запису користувача (UserReg_EX_AccountExists)<br>
    5. Система створює новий обліковий запис<br>
    6. Система надає користувачу інформацію про створення облікового запису<br>
    7. Користувач отримує інформацію про успішну реєстрацію<br>
    8. Користувач закінчує взаємодію</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start">1. Користувач починає взаємодію<br>
    2. Користувач вводить авторизаційні дані<br>
    3. Користувач натискає на кнопку/іконку "Увійти" (UserAuth_EX_NoInput)<br>
    4. Система перевіряє наявність облікового запису користувача (UserAuth_EX_AccountNotExist)<br>
    5. Система перевіряє отримані авторизаційні дані (UserAuth_EX_InvalidСredentials)<br>
    6. Система надає доступ користувачеві до облікового запису<br>
    7. Користувач отримує інформацію про успішну авторизацію<br>
    8. Користувач закінчує взаємодію</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="width:46%; border-right:1px solid black; font-weight:bold">Profile_Edit</td>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="font-weight:bold">Support_Service</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td style="border-right:1px solid black; text-align:start">Редагування профілю користувача у системі</td>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td>Вирішення проблем користувача</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="border-right:1px solid black">Користувач, Система</td>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="width:110%">Користувач, система, адміністратор системи</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black">Користувач авторизований у системі</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Користувач має проблему, пов'язану з роботою з системою;<br>
    Користувач не може знайти рішення за допомогою розділу Help</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td style="border-right:1px solid black">Профіль користувача відредагований</td>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td>Вирішення проблеми користувача</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="border-right:1px solid black">ProfileEdit_EX_NotAuth — Користувач не авторизований і намагається перейти до профілю</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>Support_EX_Cancelled — Натиснута кнопка "Відміна"</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Користувач починає взаємодію<br>
    2. Користувач натискає на кнопку/іконку "Профіль"<br>
    3. Система відкриває профіль користувача<br>
    4. Користувач натискає на кнопку/іконку "Редагувати профіль"<br>
    5. Система відкриває форму для редагування профілю</br>
    6. Користувач редагує профіль: ім'я, аватар, пошта<br>
    7. Користувач натискає кнопкку/іконку "Зберегти зміни" (ProfileEdit_EX_NotAuth)<br>
    8. Система зберігає зміни в профілі користувача<br>
    9. Користувач отримує інформацію про успішне редагування профілю<br>
    10. Користувач бачить оновлені дані профілю<br>
    11. Користувач закінчує взаємодію</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start">1. Користувач починає взаємодію.<br>
    2. Користувач натискає кнопку "Тех. підтримки".<br>
    3. Система відкриває форму подання заявки. (Support_EX_Cancelled)<br>
    4. Користувач заповнює форму та натискає кнопку "Відправити".<br>
    5. Система надсилає заявку адміністратору системи.<br>
    6. Адміністратор системи отримує заявку користувача.<br>
    7. Адміністратор системи натискає кнопку "Відправити відповідь".<br>
    8. Система відкриває форму для відповіді. (Support_EX_PressCancel)<br>
    9. Адміністратор заповнює форму та натискає кнопку "Відправити".<br>
    10. Система надсилає відповідь адміністратора користувачу.<br>
    11. Користувач отримує відповідь.<br>
    12. Користувач закінчує взаємодію.
</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="width:42%; border-right:1px solid black; font-weight:bold">Project_Create</td>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="font-weight:bold">Project_Delete</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td style="border-right:1px solid black; text-align:start">Створення проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td>Видалення проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="border-right:1px solid black">Система, Менеджер воркспейсу</td>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="width:110%">Система, Менеджер воркспейсу</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black">Відсутні</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Існування проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td style="border-right:1px solid black">Проєкт створений у системі</td>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td>Проєкт видалений із системи</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="border-right:1px solid black">ProjectCreate_EX_EmptyName — Поле з назвою проєкту не заповнене.<br>
    ProjectCreate_EX_SameNameExists — Проєкт з такою назвою вже існує.<br>
    ProjectCreate_EX_Cancelled — Натиснута кнопка "Відміна".</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>ProjectDelete_EX_Cancelled — Натиснута кнопка "Відміна".</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Менеджер воркспейсу починає взаємодію.<br>
    2. Менеджер воркспейсу натискає кнопку «Створити проєкт».<br>
    3. Система відкриває форму створення проєкту. (ProjectCreate_EX_Cancel)<br>
    4. Менеджер заповнює форму створення проєкту (назва, менеджер проєкту, члени команди).<br>
    5. Менеджер воркспейсу натискає кнопку «Створити».<br>
    6. Система створює проєкт. (ProjectCreate_EX_EmptyName, ProjectCreate_EX_SameNameExists).<br>
    7. Менеджер воркспейсу отримує інформацію про створення проєкту.<br>
    8. Менеджер воркспейсу закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start; vertical-align:top">1. Менеджер воркспейсу починає взаємодію.<br>
    2. Менеджер воркспейсу натискає кнопку «Видалити проєкт».<br>
    3. Система відкриває форму підтвердження видалення проєкту. (ProjectDelete_EX_Cancelled)<br>
    4. Менеджер воркспейсу підтверджує видалення натисканням кнопки «Видалити».<br>
    5. Система видаляє проєкт та оновлює список проєктів.<br>
    6. Менеджер воркспейсу отримує інформацію про видалення проєкту.<br>
    7. Менеджер воркспейсу закінчує взаємодію.<br>
</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="width:41%; border-right:1px solid black; font-weight:bold">Member_Add</td>
    <th style="background-color:#D6EEEE; text-align:center">ID &#11088</th>
    <td style="font-weight:bold">Member_Remove</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td style="border-right:1px solid black; text-align:start">Приєднання користувача до проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td>Видалення користувача з проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="border-right:1px solid black">Система, Менеджер проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="width:110%">Система, Менеджер проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black">Існування проєкт</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Існування проєкту<br>
        Існування учасника проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td style="border-right:1px solid black">Новий користувач доданий до проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td>Користувач був усунутий з проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="border-right:1px solid black">MemberAdd_EX_UserNotExist — Користувача з таким нікнеймом не існує.
    MemberAdd_EX_UserIsAlreadyMember — Користувач вже є учасником проєкту.
    MemberAdd_EX_Cancelled — Натиснута кнопка "Відміна".</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>MemberRemove_EX_Cancelled — Натиснута кнопка "Відміна".</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту натискає кнопку «Додати учасника».<br>
    3. Система відкриває модальне вікно з формою пошуку користувачів. (MemberAdd_EX_PressCancel)<br>
    4. Менеджер проєкту вписує юзернейм або адресу електронної пошти користувача у форму.<br>
    5. Система шукає користувача у базі данних та додає його до проєкту. (MemberAdd_EX_UserDontExist, MemberAdd_EX_UserIsAlreadyMember)<br>
    6. Система відправляє менеджеру проєкту інформацію про успішне додавання учасника до проєкту.<br>
    7. Менеджер проєкту отримує інформацію про додавання користувача до проєкту.<br>
    8. Менеджер проєкту закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start; vertical-align:top">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту натискає кнопку «Учасники проєкту».<br>
    3. Система відкриває модальне вікно з учасниками проєкту. (MemberRemove_EX_PressCancel)<br>
    4. Менеджер проєкту обирає учасника у модальному вікні.<br>
    5. Менеджер проєкту натискає кнопку «Видалити учасника».<br>
    6. Система видаляє учасника з проєкту та оновлює список учасників.<br>
    7. Система відправляє менеджеру проєкту інформацію про успішне видалення учасника з проєкту.<br>
    8. Менеджер проєкту отримує інформацію про видалення учасника з проєкту.<br>
    9. Менеджер проєкту закінчує взаємодію.</td>
  </tr>
</table>

Кількість наведених сценаріїв: **8 сценаріїв**.

## Короткий огляд продукту

_[Визначається границя системи та категорії її користувачів. Дається загальна характеристика категорій користувачів
системи]_

_[Нижче йде опис FURPS:]_

 * *Проєкт - окремий простів в межах існуюючого робочого простору, відділу чи департаменту, знову ж таки який буде під кервуанням менеджера проекту, який слідкує за ефективністю працівників;*

 * *Дошки - простір для розподілу завдань між працівниками, різними категоріями завдань:*

## Функціональність

_[Functionality (функциональні вимоги)]_

Цей інтерфейс дає можливість керування проектами на найвищому рівні. Він дає такі можливості:

 * *Заблокувати чи розблокувати користувача;*
 * *Переглянути списки запитів та відповісти на них.*


## Практичність

_[Usability (вимоги до зручності роботи)]_

## Надійність

_[Reliability (вимоги до надійності)]_

## Продуктивність

_[Performance (вимоги до продуктивності)]_

## Експлуатаційна придатність

_[Supportability (вимоги до підтримки)]_
