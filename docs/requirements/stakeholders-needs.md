# Запити зацікавлених осіб

## Вступ

У документі міститься інформація щодо системи управління проектами (надалі - СУП) "Trabajo", з якою можуть ознайомитися усі зацікавлені особи. Нижче надано стислий опис продукту.

### Мета

Метою даного проекту є створення зрозумілої та надійної СУП, яка дозволить користувачам зручно керувати своїми проектами, організовувати робочий процес.

### Контекст

Документ містить формулювання технічного завдання, список вимог до практичності, функціональності, продуктивності, надійності, а також експлуатаційної придатності, характеристику робочих процесів.

### Основні визначення та скорочення

**Зацікавлені особи** — особи, що мають інтерес у проекті, залежать від нього або мають вплив на його розробку.

**FURPS** — акронім, який означає модель для класифікації атрибутів якості програмного забезпечення (функціональні та нефункціональні вимоги) [[1]](#link1):

:arrow_right: _Functionality — вимоги до функціональності: властивості, можливості, безпека. Є основними, за цими вимогами будуються діаграми варіантів використання (Use case diagram)._

:arrow_right: _Usability — вимоги до користувацького досвіду: людський фактор, естетика, послідовність, документація._

:arrow_right: _Reliability — вимоги до надійності: частота можливих збоїв, відмовостійкість, відновлюваність, передбачуваність стійкості._

:arrow_right: _Performance — вимоги до продуктивності: час відгуку, використання ресурсів, ефективність, потужність, масштабованість._

:arrow_right: _Supportability — вимоги до підтримки: можливість підтримки, ремонтопридатність, гнучкість, модифікованість, модульність, розширюваність, можливість локалізації._

**Бізнес-процес** — ряд завдань або комплекс заходів, які виконує група зацікавлених сторін для досягнення організаційної мети. Процеси виконуються людьми або системами структурованим чином для досягнення заздалегідь визначеної мети. Ефективне й упорядкування виконання бізнес-процесів безпосередньо сприяє успішності бізнес-операцій та зростанню.[[2]](#link2)

**Основні елементи бізнес-процесу** <sup>[[3]](#link3)</sup>:

- Вхід і вихід (початок та закінчення) — відповідають на питання, з чого починається процес, які початкові умови старту, та чим закінчується процес - який результат проецесу, що маємо на виході.
- Виконавці — вказують на те, хто буде виконувати конкретну задачу.
- Задачі — відповідають за опис елементарних частин процесу, конкретної події, яку необхідно виконати в ході процесу.
- Події — будь-які події в контексті процесу, які мають на нього вплив (отримання листа, спливання строку виконання задачі та інше).
- Переходи та розгалуження — задають послідовність виконання задач (послідовну, паралельну, зміна напрямку за умовою тощо).

**Бізнес-сценарії** — вичерпний опис бізнес-задачі, що дає можливість розглядати конкретні вимоги пов'язані одна з одною та в загальному контексті. [[4]](#link4)


### Посилання

- <a name="link1"></a>[1] <http://https://en.wikipedia.org/wiki/FURPS>

- <a name="link13"></a>[2] <https://kissflow.com/workflow/bpm/business-process/>

- <a name="link12"></a>[3] <https://it-artel.ua/instruction/chto-takoe-byznes-proczessu-y-kakye-yh-osnovnue-elementu/>

- <a name="link4"></a>[4] <http://www.opengroup.org/public/arch/p4/bus_scen/bus_scen.htm>

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
    <th style="background-color:#D6EEEE; text-align:center">1. ID &#127818</th>
    <td style="width:32%; border-right:1px solid black; font-weight:bold">User_Registration</td>
    <th style="background-color:#D6EEEE; text-align:center">2. ID &#127818</th>
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
    <td style="border-right:1px solid black; text-align:start">1. Користувач починає взаємодію.<br>
    2. Користувач вводить реєстраційні дані.<br>
    3. Користувач натискає кнопку "Зареєструватися" (UserReg_EX_NoInput).<br>
    4. Система перевіряє наявність облікового запису користувача (UserReg_EX_AccountExists).<br>
    5. Система створює новий обліковий запис.<br>
    6. Користувач отримує інформацію про успішну реєстрацію.<br>
    7. Система надає користивачу доступ до його особистого кабінету.<br>
    8. Користувач завершує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start">1. Користувач починає взаємодію.<br>
    2. Користувач вводить авторизаційні дані.<br>
    3. Користувач натискає на кнопку/іконку "Увійти" (UserAuth_EX_NoInput).<br>
    4. Система перевіряє наявність облікового запису користувача (UserAuth_EX_AccountNotExist).<br>
    5. Система перевіряє отримані авторизаційні дані (UserAuth_EX_InvalidСredentials).<br>
    6. Користувач отримує повідомлення про успішну авторизацію.<br>
    7. Система надає користивачу доступ до його особистого кабінету.<br>
    8. Користувач завершує взаємодію.</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">3. ID &#127818</th>
    <td style="width:46%; border-right:1px solid black; font-weight:bold">Profile_Edit</td>
    <th style="background-color:#D6EEEE; text-align:center">4. ID &#127818</th>
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
    <td style="width:110%">Користувач, Система, Адміністратор системи</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black">Користувач авторизований у системі</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Користувач має проблему, пов'язану з роботою системи;<br>
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
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Користувач починає взаємодію.<br>
    2. Користувач натискає на вкладку "Профіль".<br>
    3. Система відкриває профіль користувача.<br>
    4. Користувач натискає кнопку "Редагувати профіль".<br>
    5. Система відкриває форму для редагування профілю.</br>
    6. Користувач редагує профіль: ім'я, аватар, опис профілю, пошта.<br>
    7. Користувач натискає кнопкку "Зберегти зміни" (ProfileEdit_EX_NotAuth).<br>
    8. Система зберігає зміни в профілі користувача.<br>
    9. Користувач отримує повідомлення про успішне редагування профілю.<br>
    10. Користувач бачить оновлені дані профілю.<br>
    11. Користувач закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start">1. Користувач починає взаємодію.<br>
    2. Користувач перходить у розділ тех. підтримки.<br>
    3. Система відкриває форму подання заявки (Support_EX_Cancelled).<br>
    4. Користувач заповнює форму та натискає кнопку "Відправити".<br>
    5. Система надсилає заявку адміністратору системи.<br>
    6. Адміністратор системи отримує заявку користувача.<br>
    7. Адміністратор системи натискає кнопку "Надати відповідь".<br>
    8. Система відкриває форму для відповіді (Support_EX_Cancelled).<br>
    9. Адміністратор заповнює форму та натискає кнопку "Відправити".<br>
    10. Система надсилає відповідь адміністратора користувачу.<br>
    11. Користувач отримує відповідь.<br>
    12. Користувач закінчує взаємодію.
</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">5. ID &#127818</th>
    <td style="width:42%; border-right:1px solid black; font-weight:bold">Project_Create</td>
    <th style="background-color:#D6EEEE; text-align:center">6. ID &#127818</th>
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
    <td style="border-right:1px solid black">ProjectCreate_EX_NoName — Поле з назвою проєкту не заповнене.<br>
    ProjectCreate_EX_SameNameExists — Проєкт з такою назвою вже існує.<br>
    ProjectCreate_EX_Cancelled — Натиснута кнопка "Відміна".</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>ProjectDelete_EX_Cancelled — Натиснута кнопка "Відміна".</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Менеджер воркспейсу починає взаємодію.<br>
    2. Менеджер воркспейсу натискає кнопку «Створити проєкт».<br>
    3. Система відкриває форму створення проєкту (ProjectCreate_EX_Cancelled).<br>
    4. Менеджер заповнює форму створення проєкту (назва, менеджер проєкту, члени команди).<br>
    5. Менеджер воркспейсу натискає кнопку «Створити».<br>
    6. Система створює проєкт. (ProjectCreate_EX_NoName, ProjectCreate_EX_SameNameExists).<br>
    7. Менеджер воркспейсу отримує повідомлення про успішне створення проєкту.<br>
    8. Менеджер воркспейсу закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start; vertical-align:top">1. Менеджер воркспейсу починає взаємодію.<br>
    2. Менеджер воркспейсу натискає кнопку «Видалити проєкт».<br>
    3. Система відкриває форму підтвердження видалення проєкту.<br>
    4. Менеджер воркспейсу натискає кнопку «Видалити».<br> 
    5. Система відправляє користувачу попередження «Ви точно бажаєте видалити проєкт?» (ProjectDelete_EX_Cancelled).<br>
    6. Менеджер воркспейсу підтверджує видалення натисканням кнопки «Так».<br>
    7. Система видаляє проєкт та оновлює список проєктів.<br>
    8. Менеджер воркспейсу отримує повідомлення про успішне видалення проєкту.<br>
    9. Менеджер воркспейсу закінчує взаємодію.<br>
</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">7. ID &#127818</th>
    <td style="width:40%; border-right:1px solid black; font-weight:bold">Member_Add</td>
    <th style="background-color:#D6EEEE; text-align:center">8. ID &#127818</th>
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
    <td style="border-right:1px solid black">Існування проєкту</td>
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
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">MemberAdd_EX_UserNotExist — Користувача з таким нікнеймом не існує.
    MemberAdd_EX_UserIsAlreadyMember — Користувач вже є учасником проєкту.
    MemberAdd_EX_Cancelled — Натиснута кнопка "Відміна".</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>MemberRemove_EX_Cancelled — Натиснута кнопка "Відміна".</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту натискає кнопку «Додати учасника».<br>
    3. Система відкриває модальне вікно з формою пошуку користувачів (MemberAdd_EX_Cancelled).<br>
    4. Менеджер проєкту вписує username або адресу електронної пошти користувача у форму.<br>
    5. Система шукає користувача у базі даних та додає його до проєкту (MemberAdd_EX_UserDontExist, MemberAdd_EX_UserIsAlreadyMember).<br>
    6. Система відправляє менеджеру проєкту повідомлення про успішне додавання учасника до проєкту.<br>
    7. Менеджер проєкту отримує повідомлення про успішне додавання користувача до проєкту.<br>
    8. Менеджер проєкту закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start; vertical-align:top">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту натискає кнопку «Учасники проєкту».<br>
    3. Система відкриває модальне вікно з учасниками проєкту.<br>
    4. Менеджер проєкту обирає учасника у модальному вікні.<br>
    5. Менеджер проєкту натискає кнопку «Вилучити учасника».<br>
    6. Система відправляє користувачу попередження «Ви точно бажаєте вилучити учасника?» (MemberRemove_EX_Cancelled).
    7. Менеджер проєкту підтверджує вилучення натисканням кнопки «Так».<br>
    8. Система вилучає учасника з проєкту та оновлює список учасників.<br>
    9. Система відправляє менеджеру проєкту повідомлення про успішне вилучення учасника з проєкту.<br>
    10. Менеджер проєкту отримує повідомлення про успішне вилучення учасника з проєкту.<br>
    11. Менеджер проєкту закінчує взаємодію.</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">9. ID &#127818</th>
    <td style="width:44%; border-right:1px solid black; font-weight:bold">Board_Create</td>
    <th style="background-color:#D6EEEE; text-align:center">10. ID &#127818</th>
    <td style="font-weight:bold">Board_Remove</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td style="border-right:1px solid black; text-align:start">Створення дошки</td>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td>Видалення дошки</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="border-right:1px solid black">Система, Менеджер проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="width:110%">Система, Менеджер проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black">Існування проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Існування дошки</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td style="border-right:1px solid black">Дошка створена в проекті</td>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td>Дошка вилучена з проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">BoardCreate_EX_NoName – Назву дошки не вказано.
      BoardCreate_EX_SameNameExists – Дошка з такою назвою вже існує.
      BoardCreate_EX_Cancelled – Натиснута кнопка "Відміна".</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>MemberRemove_EX_Cancelled — Натиснута кнопка "Відміна".</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту натискає кнопку «Створити дошку».<br>
    3. Система відкриває форму створення дошки (BoardCreate_EX_Cancelled).<br>
    4. Менеджер заповнює форму створення дошки (назва, менеджер проєкту, члени команди).<br>
    5. Менеджер проєкту натискає кнопку «Створити».<br>
    6. Система створює дошку. (BoardCreate_EX_NoName, BoardCreate_EX_SameNameExists).<br>
    7. Менеджер проєкту отримує повідомлення про успішне створення дошки.<br>
    8. Менеджер проєкту закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start; vertical-align:top">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту натискає кнопку «Перелік дошок проєкту».<br>
    3. Система відкриває модальне вікно з дошками проєкту.<br>
    4. Менеджер проєкту обирає дошку у модальному вікні.<br>
    5. Менеджер проєкту натискає кнопку «Видалити дошку».<br>
    6. Система відправляє користувачу попередження «Ви точно бажаєте видалити дошку?» (MemberRemove_EX_Cancelled).
    7. Менеджер проєкту підтверджує вилучення натисканням кнопки «Так».<br>
    8. Система вилучає дошку з проєкту та оновлює список дошок.<br>
    9. Система відправляє менеджеру проєкту повідомлення про успішне вилучення дошки з проєкту.<br>
    10. Менеджер проєкту отримує повідомлення про успішне вилучення дошки з проєкту.<br>
    11. Менеджер проєкту закінчує взаємодію.</td>
  </tr>
</table>

<table style="width:110%; border: 1px solid black">
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">11. ID &#127818</th>
    <td style="width:44%; border-right:1px solid black; font-weight:bold">Task_Create</td>
    <th style="background-color:#D6EEEE; text-align:center">12. ID &#127818</th>
    <td style="font-weight:bold">Task_Edit</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td style="border-right:1px solid black; text-align:start">Створення завдання для користувача</td>
    <th style="background-color:#D6EEEE; text-align:center">НАЗВА</th>
    <td>Редагування завдання</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="border-right:1px solid black">Система, Менеджер проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">УЧАСНИКИ</th>
    <td style="width:110%">Система, Менеджер проєкту</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td style="border-right:1px solid black">Існування проєкту<br>
      Існування учасника проєкту</td>
    <th style="background-color:#D6EEEE; text-align:center">ПЕРЕДУМОВИ</th>
    <td>Існування завдання</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td style="border-right:1px solid black">Завдання для користувача додане на дошку</td>
    <th style="background-color:#D6EEEE; text-align:center">РЕЗУЛЬТАТ</th>
    <td>Параметри завдання відредаговані</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">
    TaskCreate_EX_NoName — Назву завдання не вказано.
    TaskCreate_EX_NoDescr — Не доданий опис завдання.
    TaskCreate_EX_NoUser — Не обраний користувач, якому треба назначити завдання.
    TaskCreate_EX_Cancelled — Натиснута кнопка "Відміна".</td>
    <th style="background-color:#D6EEEE; text-align:center">ВИКЛЮЧНІ СИТУАЦІЇ</th>
    <td>Task_EX_Cancelled — Натиснута кнопка "Відміна".</td>
  </tr>
  <tr>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="border-right:1px solid black; vertical-align:top; text-align:start">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту вибирає бажаний проєкт.<br>
    3. Менеджер проєкту натискає кнопку «Створити завдання».<br>
    4. Система відкриває форму створення завдання (TaskCreate_EX_Cancelled).<br>
    5. Менеджер заповнює форму створення завдання. (TaskCreate_EX_NoName, TaskCreate_EX_NoDescr, TaskCreate_EX_NoUser)<br>
    6. Менеджер проєкту натискає кнопку «Створити».<br>
    7. Система створює завдання.<br>
    8. Менеджер проєкту отримує повідомлення про успішне створення завдання.<br>
    9. Менеджер проєкту закінчує взаємодію.</td>
    <th style="background-color:#D6EEEE; text-align:center">ОСНОВНИЙ СЦЕНАРІЙ</th>
    <td style="text-align:start; vertical-align:top">1. Менеджер проєкту починає взаємодію.<br>
    2. Менеджер проєкту вибирає бажаний проєкт.<br>
    3. Менеджер проєкту натискає на карточку завдання.<br>
    4. Система відкриває модальне вікно перегляду завдання.<br>
    5. Менеджер проєкту натискає кнопку «Редагувати завдання».<br>
    6. Система відкриває форму редагування завдання з попередніми даними завдання. (TaskEdit_EX_Cancelled)<br>
    7. Система відправляє менеджеру попередження «Ви точно бажаєте видалити дошку?» (MemberRemove_EX_Cancelled).<br>
    8. Менеджер проєкту редагує дані в формі (назва, опис, дедлайн, відповідальний, пріоритет, статус).<br>
    9. Система надсилає менеджеру повідомлення «Ви точно бажаєте зберегти останні зміни?».<br>
    10. Менеджер проєкту натискає кнопку «Зберегти».<br>
    11. Менеджер проєкту отримує повідомлення про успішне редагування завдання проєкту.<br>
    12. Менеджер проєкту закінчує взаємодію.</td>
  </tr>
</table>

Кількість наведених сценаріїв: **12 сценаріїв**.

## Короткий огляд продукту

Система управління проєктами — визначення для комплексного програмного забезпечення, що охоплює програми для планування завдань, складання розпису, контролю ціни і керування бюджетом, розподілу ресурсів, спільної роботи, спілкування, швидкого керування , документування та адміністрування системи, яке використовуються спільно для керування великими проєктами.

"Trabajo" — це СУП, де можна створити:

- _Робочий простір - загальний простір для всіх користувачів, де у менеджерів проекту є можливість надавати керування данними та працівниками, у межах цього воркспейсу;_

- _Проєкт - окремий простів в межах існуюючого робочого простору, відділу чи департаменту, знову ж таки який буде під кервуанням менеджера проекту, який слідкує за ефективністю працівників;_

- _Дошки - простір для розподілу завдань між працівниками, різними категоріями завдань:_

## Функціональність

Функціальні вимоги реалізовані у вигляді інтерфейсу різних видів (користувачів, менеджера):

### Інтерфейс користувача:

Це базовий інтерфейс для будь-якого користувача, який включає в себе такі функції:

- _Реєстрація та авторизація;_
- _Редагування профілю та вихід із системи;_
- _Можливість приєднатись до проєкту._

Також, як користувач проєкту ви може створювати, видаляти та редагувати проєкти.

### Інтерфейс менеджера:

Цей інтерфейс передбачає розширену функціональність користувача проєкту, а саме:

- _Створення проекту передбачає можливість додавати та вилучати дошки, створювати та редагувати завдання; також можливе видалення проекту;_
- _Додадавання, або ж видалення користувача з проекту;_

## Практичність

- _Зручний інтерфейс;_
- _Простота використання;_
- _Інтуїтивно зрозумілі функціонал._

## Надійність

"Trabajo" - має надійний захист данних користувачів, який в себе також включає двохфакторну автентифікацію, створення резервних копій і т.д.

## Продуктивність

- _Швидкість обмінну данних;_
- _Обмеження надходження данних за певний час._
- _Обмеження розміру файлів._

## Експлуатаційна придатність

- _Цілодобова підтримка;_
- _Швидке реагування на збої системи;_
- _Релугярні оновлення._
