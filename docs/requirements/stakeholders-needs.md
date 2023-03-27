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


### Посилання

*[Розділ містить повний список всіх документів, про які згадується.]*


## Короткий зміст

*[Розділ містить опис того, про що йдеться в еій частині цього документу, що залишилася. 
Також тут описана структура документу.]*

## Характеристика ділових процесів

*[В цьому розділі визначаються зовнішні фактори, що впливають на бізнес (бізнес-актори), 
та внутрішні фактори (робітники), дається загальна характеристика діяльності бізнес-акторів 
та робітників, яка здійснюється за допомогою бізнесу.*

*Дається опис бізнес-сценаріїв взаємодії бізнес-акторів, робітників і, можливо, інформаційної системи за допомогою наступної
специфікації:]*

   
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
		<td style="background-color:#ccffe6; text-align:center">UserEdit</td>
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
        <i>ER_INVALID_INPUT</i> - Дані введені не коректно;</td>
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
        6. Система редагує обліковий запис.
	</tr>
</table>

<table>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">ID</th>
		<td style="background-color:#ccffe6; text-align:center">ProjectAdd</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Назва</th>
		<td style="background-color:#ccffe6; text-align:center">Створення проекту</td>
	</tr>
	<tr>
		<th style="background-color:#99ffcc; text-align:center">Учасники</th>
		<td style="background-color:#ccffe6; text-align:center">Користувач, Система</td>
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
		<td style="background-color:#ccffe6; text-align:center">UserRegistration</td>
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


*Кількість сценаріїв визначається у відповідності до специфіки завдання та необхідного 
рівня деталізації (зазвичай, 5-6 сценаріїв).*

## Короткий огляд продукту

*[Визначається границя системи та категорії її користувачів. Дається загальна характеристика категорій користувачів
системи]*

*[Нижче йде опис FURPS:]*


## Функціональність

*[Functionality (функциональні вимоги)]*

## Практичність

*[Usability (вимоги до зручності роботи)]*

## Надійність

*[Reliability (вимоги до надійності)]*

## Продуктивність

*[Performance (вимоги до продуктивності)]*

## Експлуатаційна придатність

*[Supportability (вимоги до підтримки)]*
