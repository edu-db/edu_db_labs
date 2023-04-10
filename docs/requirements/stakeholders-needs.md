# Запити зацікавлених осіб

## Вступ

Даний документ містить документацію з описом роботи нашої системи для управління проектами.

### Мета

Метою є створення системи управління проектами, що буде об'єднувати переваги інших конкурентних систем. 

### Контекст

Документ містить формулювання технічного завдання, список вимог до практичності, функціональності, 
продуктивності, надійності, а також експлуатаційної придатності, характеристику робочих процесів.

### Основні визначення та скорочення

**Зацікавлені особи** — особи, що мають інтерес у проекті, залежать від нього або мають вплив на його розробку.

**Бізнес-процес** — ряд завдань або набір дій, які виконує група зацікавлених сторін
для досягнення мети організації. Процеси виконуються людьми чи системами структурованим чином досягнення заздалегідь
певної мети. Ефективне та оптимізоване виконання бізнес-процесів безпосередньо сприяє успіху бізнес-операцій та зростання.[[1]](#link1)

**Основні елементи бізнес-процесу:** [[2]](#link2)

- Вхід і вихід (початок та закінчення) — відповідають на питання, з чого починається процес, які початкові умови
старту, та чим закінчується процес - який результат процесу, що маємо на виході.
- Виконавці — вказують на те, хто буде виконувати конкретну задачу.
- Задачі — відповідають за опис елементарних частин процесу, конкретної події, яку необхідно виконати в ході процесу.
- Події — будь-які події в контексті процесу, які мають на нього вплив (отримання листа, спливання строку виконання задачі та інше).
- Переходи та розгалуження — задають послідовність виконання задач (послідовну, паралельну, зміна напрямку за умовою тощо).

**FURPS** — акронім, який означає модель для класифікації атрибутів якості програмного забезпечення. [[3]](#link3)
**F**unctionality, **U**sability, **R**eliability, **P**erformance, **S**upportability.

### Посилання

- <a name="link1"></a>[1] <https://kissflow.com/workflow/bpm/business-process/>

- <a name="link2"></a>[2] <https://it-artel.ua/instruction/chto-takoe-byznes-proczessu-y-kakye-yh-osnovnue-elementu/>

- <a name="link1"></a>[3] <https://en.wikipedia.org/wiki/FURPS>

## Короткий зміст

- [Характеристика ділових процесів](#Характеристика-ділових-процесів)
- [Короткий огляд продукту](#Короткий-огляд-продукту)
- [Функціональність](#Функціональність)
- [Практичність](#Практичність)
- [Надійність](#Надійність)
- [Продуктивність](#Продуктивність)
- [Експлуатаційна придатність](#Експлуатаційна-придатність)

## Характеристика ділових процесів

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>UserRegistration</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Створення облікового запису</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Користувач, Система</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">Обліковий запис не створений</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Створений новий обліковий запис</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_USER_EXIST_ERROR</i> - Обліковий запис вже створено;</br></br>
        <i>ER_INVALID_INPUT</i> - Дані введені не коректно.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно реєстрації;</br></br>
        2. Користувач заповнює поля необхідною інформацією;</br></br>
        3. Система перевіряє дані на правильність вводу;</br></br>
        4. Система перевіряє чи обліковий запис вже створено;</br></br>
        5. Система створює обліковий запис;</br></br>
        6. Система надає доступ користувачу до облікового запису.</td>
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>UserAuthorization</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Авторизація користувача у системі</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Користувач, Система</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">Обліковий запис створений</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Користувач авторизований</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_USER_NOT_EXIST_ERROR</i> - Обліковий ще не створено;</br></br>
        <i>ER_INVALID_INPUT</i> - Дані введені не коректно.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно авторизації;</br></br>
        2. Користувач заповнює поля необхідною інформацією;</br></br>
        3. Система перевіряє дані на правильність вводу;</br></br>
        4. Система перевіряє чи обліковий запис вже створено;</br></br>
        5. Система надає доступ користувачу до облікового запису.</td>
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>UserEdit</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Редагування облікового запису</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Користувач, Система</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">Обліковий запис створений</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Обліковий запис відредаговано</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_USER_NOT_EXIST_ERROR</i> - Обліковий запис ще не створено;</br></br>
        <i>ER_INVALID_INPUT</i> - Дані введені не коректно;</br></br>
        <i>ER_INVALID_PASSWORD</i> - Введений неправильний пароль.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно редагування облікового запису;</br></br>
        2. Система перевіряє чи обліковий запис вже створено;</br></br>
        3. Користувач заповнює поля необхідною інформацією;</br></br>
        4. Система перевіряє дані на правильність вводу;</br></br>
        5. Система перевіряє пароль;</br></br>
        6. Система редагує обліковий запис.</td>
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>ProjectAdd</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Створення проекту</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Адміністратор проекту, Система</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">Обліковий запис авторизований</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Створено новий проект</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_USER_NOT_AUTHORISED</i> - Обліковий запис не авторизований;</br></br>
        <i>ER_INVALID_PROJECT_NAME</i> - Неправильно введено ім'я проекту;</br></br>
        <i>ER_PROJECT_EXIST_ERROR</i> - Проект з таким ім'ям вже існує.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно створення проекту;</br></br>
        2. Користувач заповнює поля необхідною інформацією;</br></br>
        3. Система перевіряє дані на правильність вводу;</br></br>
        4. Система перевіряє чи проект з таким ім'ям вже створено;</br></br>
        5. Система створює новий проект;</br></br>
        6. Система надає користувачу права адміністратора проекту.</td>
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>ProjectEdit</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Редагування проекту</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Адміністратор проекту, Система</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">
        Обліковий запис авторизований;</br></br>
        Обліковий запис має права адміністратора проекту.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Проект відредаговано</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_PROJECT_NOT_EXISTS</i> - Проект не існує;</br></br>
        <i>ER_INVALID_INPUT</i> - Дані введені не коректно;</br></br>
        <i>ER_USER_LOW_PRIVILAGE</i> - Недостатньо прав для редагування.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно редагування проекту;</br></br>
        2. Система перевіряє чи вказаний проект існує;</br></br>
        3. Користувач заповнює поля необхідною інформацією;</br></br>
        4. Система перевіряє дані на правильність вводу;</br></br>
        5. Система перевіряє, чи користувач є адміністратором;</br></br>
        6. Система редагує інформацію проекту.</td>
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>TeamEdit</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Редагування команди</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Адміністратор проекту, Система</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">
        Обліковий запис авторизований;</br></br>
        Проект існує.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Команда проекту відредагована.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_PROJECT_NOT_EXISTS</i> - Проект не існує;</br></br>
        <i>ER_USER_NOT_EXIST</i> - Користувач не існує;</br></br>
		<i>ER_USER_NOT_IN_TEAM</i> - Користувачa немає в команді;</br></br>
        <i>ER_USER_ALREADY_IN_TEAM</i> - Користувач вже наявний в команді;</br></br>
		<i>ER_USER_LOW_PRIVILAGE</i> - Недостатньо прав для редагування.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно редагування команди;</br></br>
        2. Система перевіряє чи вказаний проект існує;</br></br>
        3. Користувач вносить зміни у склад команди;</br></br>
        4. Система перевіряє дані на правильність вводу;</br></br>
        5. Система перевіряє, чи користувач є адміністратором;</br></br>
        6. Система редагує інформацію проекту.</td>
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center"><b>Support</b></td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Вирішення проблем користувача</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Користувач, Система, Центр підтримки</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Передумови</th>
		<td style="background-color:#ccffe6; text-align:center">
        Обліковий запис авторизований;</br></br>
		Користувач має проблему, пов'язану з роботою системи;</br></br>
		Користувач не може знайти рішення за допомогою розділу FAQ.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Результат</th>
		<td style="background-color:#ccffe6; text-align:center">Gроблем користувача оброблена.</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Виключні ситуації</th>
		<td style="background-color:#ccffe6; text-align:left">
        <i>ER_USER_NOT_AUTHORISED</i> - Обліковий запис не авторизований;</br></br>
        <i>ER_INVALID_INPUT</i> - Дані введені не коректно;</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Основний сценарій</th>
		<td style="background-color:#ccffe6; text-align:left">
        1. Користувач викликає вікно допомоги;</br></br>
        2. Користувач заповнює поля необхідною інформацією;</br></br>
		3. Користувач натискає кнопку "Відправити";</br></br>
        4. Система перевіряє дані на правильність вводу;</br></br>
        5. Система передає форму в Центр підтримки;</br></br>
		6. Система створює чат між користувачем та центром підтримки;</br></br>
		7. Центр підтримки надає відповідь на проблему користувачеві;</br></br>
		8. Центр підтримки натискає кнопку "Закрити проблему";</br></br>
        9. Система закриває доступ до написання у чат обом сторонам.</td>
	</tr>
</table>

Загальна кількість сценаріїв - 7.

## Короткий огляд продукту

Наша система дозволяє користувачам легко керувати проектом, створюючи різні дошки, завдання на них.

Система дозволяє створювати різні ролі та прикріплювати інших користувачів до задач, 
що дозволяє швидко розподіляти завдання і слідкувати за навантаженням команди. Також система підтримує кросплатформеність,
що надає можливість Вашій команді працювати в улюблених ОС.

Система допоможе Вам слідкувати за часом виконання проекту. Ви можете ставити дедлайни на будь-які задачі і
таким чином підтримувати темп розробки проекту. Система сама повідомить про наближення дедлайну або про його закінчення.

Якщо ж у Вас виникнуть запитання - Ви можете ознайомитись з нашим FAQ або запросити допомогу у нашої онлайн-підтримки,
що працює 24/7.

## Функціональність

Functionality — набір можливостей, функцій або операцій, які доступні в програмному продукті або системі.

**Функціональні вимоги проекту:**

Інтерфейс користувача: 

- Зареєструвати акаунт;
- Авторизувати акаунт;
- Редагувати акаунт;
- Меню підтримки.

Інтерфейс адміністратора проекту:

- Створювати проекти;
- Редагувати проекти (Додавати дошки, завдання, дедлайни до завдань, маркери до завдань, чек-лісти);
- Керувати своєю командою проекту (Додавати, видаляти користувачів; надавати користувачам ролі, прикріплювати до завдань).

## Практичність

Usability — здатність програмного продукту, веб-сайту чи іншого інтерфейсу, забезпечити користувачеві
легкий і зручний доступ до його функціоналу та досвіду користування.

З практичної точки зору, наш проект має:
- Зручний інтерфейс;
- Простота використання;
- Інтуїтивно зрозумілі функціонал.

## Надійність

Reliability — здатність продукту підтримувати визначену працездатність у заданих умовах.

Наш проект містить багато шляхів захисту даних користувачів, які включають в себе, але не обмежуються:
- Двохфакторна авторизація (2FA);
- Резервне копіювання даних;
- Протокол шифрування TSL;
- Шифрування даних на стороні серверу.

## Продуктивність

Performance — здатність продукту при заданих умовах забезпечувати необхідну працездатність.

Основними вимогами є:
- Real-time синхронізація;
- Плавний інтерфейс;
- Встановлення обмежень на одночасну кількість запитів;
- Встановлення обмежень на розмір проектів.

## Експлуатаційна придатність

Supportability — здатність підтримки продукту протягом усього терміну служби.

Основними вимогами є:
- Підтримка багатоплатформеності;
- Можливість додавання нових та оновлення старих компонентів;
- Онлайн-підтримка 24/7;
- Наявність документації.
