# Запити зацікавлених осіб

## Вступ

У документі міститься інформація щодо системи управління проектами(надалі - СУП) "Trabajo", з якою можуть ознайомитися усі зацікавлені особи. Нижче надано стислий опис продукту.

### Мета

Метою даного проекту є створення зрозумілої та надійної СУП, яка дозволить користувачам зручно керувати своїми проектами, організовувати робочий процес.

### Контекст

Документ містить формулювання технічного завдання, список вимог до практичності, функціональності, продуктивності, надійності, а також експлуатаційної придатності, характеристику робочих процесів.

### Основні визначення та скорочення

Зацікавлені особи — особи, що мають інтерес у проекті, залежать від нього або мають вплив на його розробку.

FURPS — акронім, який означає модель для класифікації атрибутів якості програмного забезпечення (функціональні та нефункціональні вимоги)[[1]](#link1): 

:arrow_right: *Functionality — вимоги до функціональності: властивості, можливості, безпека. Є основними, за цими вимогами будуються діаграми варіантів використання (Use case diagram).*

:arrow_right: *Usability — вимоги до користувацького досвіду: людський фактор, естетика, послідовність, документація.*

:arrow_right: *Reliability — вимоги до надійності: частота можливих збоїв, відмовостійкість, відновлюваність, передбачуваність стійкості.*

:arrow_right: *Performance — вимоги до продуктивності: час відгуку, використання ресурсів, ефективність, потужність, масштабованість.*

:arrow_right: *Supportability — вимоги до підтримки: можливість підтримки, ремонтопридатність, гнучкість, модифікованість, модульність, розширюваність, можливість локалізації.*

Бізнес-сценарії — вичерпний опис бізнес-задачі, що дає можливість розглядати конкретні вимоги пов'язані одна з одною та в загальному контексті. [[2]](#link2)

Бізнес-процеси — набір дій та завдань, виконання яких сприяє досягненню бізнес-цілей. [[3]](#link3)


### Посилання

- <a name="link1"></a>[1] <a href="http://https://en.wikipedia.org/wiki/FURPS" rel="nofollow">https://en.wikipedia.org/wiki/FURPS</a>
- <a name="link2"></a>[2] <a href="http://www.opengroup.org/public/arch/p4/bus_scen/bus_scen.htm" rel="nofollow">http://www.opengroup.org/public/arch/p4/bus_scen/bus_scen.htm</a>
- <a name="link3"></a>[3] <a href="https://blog.processology.net/what-is-a-business-process?hs_amp=true" rel="nofollow">https://blog.processology.net/what-is-a-business-process?hs_amp=true</a>


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

Система управління проєктами — визначення для комплексного програмного забезпечення, що охоплює програми для планування завдань, складання розпису, контролю ціни і керування бюджетом, розподілу ресурсів, спільної роботи, спілкування, швидкого керування , документування та адміністрування системи, яке використовуються спільно для керування великими проєктами.

"Trabajo" — це СУП, де можна створити:

 * *Робочий простір - загальний простір для всіх користувачів, де у менеджерів проекту є можливість надавати керування данними та працівниками, у межах цього воркспейсу;*

 * *Проєкт - окремий простів в межах існуюючого робочого простору, відділу чи департаменту, знову ж таки який буде під кервуанням менеджера проекту, який слідкує за ефективністю працівників;*

 * *Дошки - простір для розподілу завдань між працівниками, різними категоріями завдань:*

## Функціональність

Функціальні вимоги реалізовані у вигляді інтерфейсу різних видів (користувачів, менеджера):

### Інтерфейс користувача:

Це базовий інтерфейс для будь-якого користувача, який включає в себе такі функції:

 * *Реєстрація та авторизація;*
 * *Редагування профілю та вихід із системи;*
 * *Можливість приєднатись до проєкту.*

Також, як користувач проєкту ви може створювати, видаляти та редагувати проєкти.

### Інтерфейс менеджера:

Цей інтерфейс передбачає розширену функціональність користувача проєкту, а саме:

 * *створення проекту передбачає можливість додавати та вилучати дошки, створювати та редагувати таски; також можливе видалення проекту;*
 * *Додадавання, або ж видалення користувача з проекту;*

## Практичність

 * *Зручний інтерфейс;*
 * *Простота використання;*
 * *Інтуїтивно зрозумілі функціонал.*

## Надійність

"Trabajo" - має  надійний захист данних користувачів, який в себе також включає двохфакторну автентифікацію, створення резервних копій і т.д.

## Продуктивність

 * *Швидкість обмінну данних;*
 * *Обмеження надходження данних за певний час.*
 * *Обмеження розміру файлів.*

## Експлуатаційна придатність

 * *Цілодобова підтримка;*
 * *Швидке реагування на збої системи;*
 * *Релугярні оновлення.*