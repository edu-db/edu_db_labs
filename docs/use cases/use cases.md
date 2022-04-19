# Модель Use case

## Відношення узагальнення

Користувач" as User and "Адміністратор" as Admin

Як це виглядає у вигляді коду


	@startuml

	actor "User" as User
	actor "Admin" as Admin

	usecase "<b>USR.REG</b>\nРеєстрація" as USR.REG
	usecase "<b>USR.LOG</b>\nАвторизація" as USR.LOG
	usecase "<b>USR.QRY_CR</b>\nСтворення\n запиту" as USR.QRY_CR
	usecase "<b>USR.QRY_ED</b>\nКерування\n запитом" as USR.QRY_ED
	usecase "<b>USR.QRY_EXP</b>\nЕкспорт\n результатів" as USR.QRY_EXP
	usecase "<b>USR.QRY_VIS</b>\nВізуалізація\n результатів" as USR.QRY_VIS
	usecase "<b>USR.HELP</b>\nДопомога\n адміністратора" as USR.HELP

	User -l-> USR.REG
	User -u-> USR.LOG
	User -u-> USR.QRY_CR
	User -u-> USR.QRY_ED
	User -u-> USR.QRY_EXP
	User -u-> USR.QRY_VIS
	User -r-> USR.HELP

	usecase "<b>ADM.QRY_SRC</b>\nКерування\n джерелами" as ADM.QRY_SRC
	usecase "<b>ADM.USR_RIGHTS</b>\nКерування правами\n користувача" as ADM.USR_RIGHTS
	usecase "<b>ADM.HELP</b>Допомога\n адміністратора" as ADM.HELP

	Admin -d-> ADM.QRY_SRC
	Admin -d-> ADM.USR_RIGHTS
	Admin -d-> ADM.HELP

	Admin -u-|> User

	@enduml




Як це виглядає у вигляді діаграми

![Realtion](http://www.plantuml.com/plantuml/png/dPJBwjf05CRtynI3-xGl845HKS7IDgcb1K6YPb7G51Apwy8Bj9k2fTWikchV85YjuaLVuSmRzSmuXtQOj8N_GWYVy_tEvKkcaao3U9fEnem5m-dRc9UwIHYNU91m-K1YTJHv4obLFJ6M9k4mI49UAW_ShkyzyXhDykE1sulW6-p4Mip5GimW5-z59bRAg4zPpivJSdw2ZLZ05Nq7s5jUF6Tvdtkl-pLFsx-ZUQFiExZ0HQnw4PSSkC41krbg4haAOOswXdt5AMPYYS2y00PNE6iS-OfnhvvftXSuYZcQhqXT84jrkSS29_4HUJascC66c6GkXBvi-nhw6JsIaICb-xso_-89O-5RZGurlCOPRt9E_Fs079bOPWjdv5n4Hldgl7959W9ZyjNXpjXnANMjfAXGbeP2cTWYRjOKQJMsYXDfDPOgTMDCMQq_KMTzh_QlfBVm4sMvn1FAPpYe0VymMr0ir_VQpTOB_szS3ZUvAXGKKPOvtjzsjKrrKdpGkpIHLZKAwY4naPynzIrpP-IuncY6RBHX_cDIKkUTUxypM2MCHl9AuRy0)

## Структурування моделі варіантів використання для користувача

Як це виглядає у вигляді коду

	@startuml

	actor "User" as User

	usecase "<b>USR.REG</b>\nРеєстрація" as USR.REG
	usecase "<b>USR.LOG</b>\nАвторизація" as USR.LOG
	usecase "<b>USR.QRY_CR</b>\nСтворення\n запиту" as USR.QRY_CR
	usecase "<b>USR.QRY_ED</b>\nКерування\n запитом" as USR.QRY_ED
	usecase "<b>USR.QRY_EXP</b>\nЕкспорт\n результатів" as USR.QRY_EXP
	usecase "<b>USR.QRY_VIS</b>\nВізуалізація\n результатів" as USR.QRY_VIS
	usecase "<b>USR.HELP</b>\nДопомога\n адміністратора" as USR.HELP

	User -d-> USR.REG
	User -d-> USR.LOG
	User -u-> USR.QRY_CR
	User -u-> USR.QRY_ED
	User -d-> USR.QRY_EXP
	User -d-> USR.QRY_VIS
	User -d-> USR.HELP

	usecase "<b>USR.QRY_CR1</b>\nКастомізація\n за власними\n параметрами" as USR.QRY_CR1
	usecase "<b>USR.QRY_CR2</b>\nЗа сталим\n шаблоном" as USR.QRY_CR2
	usecase "<b>USR.QRY_ED1</b>\nРедегування\n параметрів\n запиту" as USR.QRY_ED1
	usecase "<b>USR.QRY_ED2</b>\nОновлення\n результатів\n запиту" as USR.QRY_ED2
	usecase "<b>USR.QRY_ED3</b>\nВидалення\n запиту" as USR.QRY_ED3

	USR.QRY_CR1 ...> USR.QRY_CR :extends
	USR.QRY_CR2 ...> USR.QRY_CR :extends
	USR.QRY_ED1 ...> USR.QRY_ED :extends
	USR.QRY_ED2 ...> USR.QRY_ED :extends
	USR.QRY_ED3 ...> USR.QRY_ED :extends
	@enduml

Як це виглядвє у вигляді діаграми
![User requests](http://www.plantuml.com/plantuml/png/ZPJDYjDG5CVtzoaktK-adPqCPK2B2WDgXX650ScqsMc59WMNRGhYGgX8ZU12z0rYFsYmJVeAvxwH_nFkdOHyq2vIxZsS_-zyd7DxwVdEo1-_VoU4q_S_Z6JhndD7BUbuaWz2Z3stxtYkR5tSTM-kRSlkFRbuSDUz7T9lsgY5cgf0JIXIdrIevfbEUrMKLy-DyYijLK0fT35jArhuLRGlxJTl7zbQ_WVYPIRVK4A9cjyE9NFeG36ocMcIKTN2Ueyrx2UgcAWPW54DZ5BQ6vpMrUDUlz2yx_HFJI5EGGt0ohBS8i1EVG4lGe8XBGtJY6kXhvvTQ-WtQ9WHWHBcBJiD3qm5_xHtPH9UeCO3rublHH6O2BEcFJY92iryzRoYZ6m8Gl2EoBF1MTTClMJ1BBLb34i-aweHdIrfJMkgLbHKj9fi6hQcVJ_fYAlXKajDv8l41kpO0riGenansmyme6XSDohGfxYqNks6i1qTzWVO79U7nsHmrMTS_kAQKbBPC2WRDhQTFpnQuriLrxOcNTw4XgTXY0sHJEw_E3zkZ7bfjHjtF4vJHUTclz6ODJVeb1SDcH25_alBiegx9H-w7trtEF0AJfsZJi1gKcweS-gSudJUx7I9t-plLlu7)

## Структурування моделі варіантів використання для адміністратора

Як це віглядає у вигляді коду

	@startuml

	actor "Admin" as Admin

	usecase "<b>ADM.QRY_SRC</b>\nКерування\n джерелами" as ADM.QRY_SRC
	usecase "<b>ADM.USR_RIGHTS</b>\nКерування правами\n користувача" as ADM.USR_RIGHTS
	usecase "<b>ADM.HELP</b>\nДопомога\n адміністратора" as ADM.HELP

	Admin -u-> ADM.QRY_SRC
	Admin -d-> ADM.USR_RIGHTS
	Admin -d-> ADM.HELP

	usecase "<b>ADM.QRY_SRC1</b>\nВидалити\n джерела" as ADM.QRY_SRC1
	usecase "<b>ADM.QRY_SRC2</b>\nРозширити\n об'єм\n джерел" as ADM.QRY_SRC2
	usecase "<b>ADM.USR_RIGHTS1</b>\nСхвалити\n запит по\n допомогу" as ADM.USR_RIGHTS1
	usecase "<b>ADM.USR_RIGHTS0</b>\nВідхилити\n запит по\n допомогу" as ADM.USR_RIGHTS0
	usecase "<b>ADM.HELP1</b>\nДодати\n додаткові\n права" as ADM.HELP1
	usecase "<b>ADM.HELP0</b>\nОбмежити\n права" as ADM.HELP0

	ADM.QRY_SRC1 ...> ADM.QRY_SRC :extends
	ADM.QRY_SRC2 ...> ADM.QRY_SRC :extends
	ADM.USR_RIGHTS1 ...> ADM.USR_RIGHTS :extends
	ADM.USR_RIGHTS0 ...> ADM.USR_RIGHTS :extends
	ADM.HELP1 ...> ADM.HELP :extends
	ADM.HELP0 ...> ADM.HELP :extends

	@enduml

Як це виглядає у вигляді діаграми
![Admin models](http://www.plantuml.com/plantuml/png/fPJFIW9H5CRtzoakRbevpRWC4QKYWu8QQn48CkeiWfp06Q6bAL6x8CH5YwWt6Cq_GutZAvpxHfsvETrn_kYYnQ3dUFnzdzyvM3GjhMrrMZU4Q0thjaqpfMRhsiXGpQJy7I4TKszefaup-NgXT70gdQjNjOgwdz-j5we6lCAKTLaVnc330XRikMfGcC3CRyCKlh7jWiDveI_7e9SLjQOU7vKlAcbS2aiasho1H5_c2pniEUoUzNudsIFOVr826LCh7vwShNG6uC4I7nUVJx1zh8t-NJP4qI57eohh-L82pWc4y8HejfCjX7zSq6vYEs94V28eQG4hAuSluA0X6wDqq8OJopUQhP86pAs0x-31d3s1mxe2wS5eXmt0ZU2ZyDo6pGM6FzW3ZDSDpx5S-YNrm-OQuTnPFs5hoWOfESW6rpH1EUU_OdBYZIYX8y4LYFY34YyGnco8pU0w8pUY9783-sym0XTZdWdpoHYPaF26gIH9QoT7z_GxIpUQ9WdlQijOA6enAPffm_BMOMvPC7aP7v3J1aWHN_XV4lq1)

## Основні сценарії

### Користувач

##### USR.REG: Створення нового облікового запису

![Scen1](http://www.plantuml.com/plantuml/png/ZL8rGhGn4Es_KwpK_myjxb3ZLBYxLhYxkyC9rdqtUuMP6_6Ih7iycPdtCbA_iZgqlBesDsiO9jKsw8q4xv2VTtcFzyb9TZxUK4BTb47AlT94JdH1RlB3ui84Omy_AFCT61_n4mKemaycQDZbeIf1zQjfo4DXic-aWqQ10YHoyXFly3K_Q1uFK3mAhWIU5CJvXTKnq_BKnEIgoJe-NewM8gmUhgKxybEGGdp5nv800DULrMN3jUbgtPqT_pjQsWPQ-Z9aO_EZYiD8z-8NtZbbG84B3mGvGF448e5dFmLCvCDdep8EwfZc91J2vC_Zg1PgPsENgWpoRya2RJVsC7XL48FPwPMqKJmA4rvZ_ut7m8GDA9Wk4faEgCSK5tY_ggGwgjGsS1I1EU5zdLmyyGE5PIdn4rzLfHNTmcALKOyWerJ_0000)

#### USR.LOG: Авторизація користувача

![Scen2](http://www.plantuml.com/plantuml/png/XL8pOeH15Exd53_ge8rjErLiiufjsya9riOPldUZ38BrlcRuuQ5uSQb_OMbvUeenJSOgdX6cJNXfYxPf1tPOwM1LFggGW8XphWOxx0Z32Iz7d6eSxA9R2T_au7swXmyXkjVWX5LiylwalfGCN0Z2kXf5ob5Ek13YhrxQvIS_xT2j1d-yErZp8g2HBB32JjiA0KzAWWZOpEpIiBOmFZgsf9aZ8zay8Xxp1mfn3I_y2D0vXtABtEH5RdxMG67qjuwsripwfghUYkwOj-6P8Qd1eglu1gkeK8n7X9L7sj6Yir6bfNCDTess_Wifwfk-cKhI8oZXeaqwLCMnIzvR14K_1NjULETdv_9OCRVFv-KR)

##### QRY.SRCH: Запит на пошук та аналіз даних

![Scen3](http://www.plantuml.com/plantuml/png/ZLGrTbn14Cpt5FEUOqDgvWFOaPtOOcQ8nCpCB9tWyp9SeVj6gfwb-SiZs6sgwkg1BvDJxHDJqyD3aOZIQvQkASkB5ESbNkOLSidcZLa4YqiN6FOxHNTaayzB5ASKiayLnU380M9PKOPiXUzPtWHOKl6osBQuASNd55FaYudajVUb5fxoz1HGccoJtEIbUrwMHYdDAo7ILzKTyQeMXKpmWVYWc9ub5-G1_ZBYJ5PhboRUjpGTJEAY3ChxmglbPkfsKvJSN3d0JRqc2FGUmutUAIEXLkSjC_3Wys5cOIW0E83KOV37wyv3mKXhcRRalG_lKFKQ6PtgLXFzlNrJwaLFpnii8-r3nwT2_odCRAEu6Uy-lExu54xxzVll_vz_AlpT8rqQlyufKU6HAd93euAwBCL4DAz150Q1eUbq6t-wKFArnjRnNS3uSXHvLnW2CAn0tMuUjcMe63aKy2AsoAkwLxLsHjWLdujFelXsOTG0nZMfMplJLSUkMavHHFWQkBhrJLq48oOAzA7nqTV--z2BCZhsFl856ubtw1a0)

##### QRY.EXPRT: Експорт результатів

![Scen4](http://www.plantuml.com/plantuml/png/jLGrTXr14Cpt5FEUOqDgPaTcTc9c4aTYPcQMRl2PuGhLDrBrnqMn9jfjAXYurTBwgRcrxTzVopAbrO4r5AG7AUcLFkb7124Pxc2okaeDjlyh1fi88IQzI27BwWM390D5fAJF88-GGHmPfeiwc37fOI39sLcPa3w4YBE4oDKQWTqoE8jo2DcXxQZOOXjf8YVz3iWBNZuoeCXQQH0ZwdIrl41vUUBaaTTWngjSILmzb3VqORa-LAOKb-BeG22RgkI3bLyns6QFZYvG0cNAX2aPEa8U6PjyrHWnigHp58TVo_OqdVON6hhgvxHz_Mze_MQQV_tusMhEVVz-YSjMTktp3SnHOmPPQX-kcdhbsiNFDvnbpvw_-t3_hIl-xV_Nqlo0tJRgFFA88Av7IBVSvnWP5Lz0c9aGYrD81-vfRHUqBq2vTHRIBpnu_kZbCVGhW7tpoJ-4DBBSMnydcCiXfGUtjWvvY6ttoj_a2mORA221UFbOiHzvJJ54QaZLg5sjId3UaF8UZfJ6yuSpP04vbSQpEdNLyTGqD5wrRj4RFb1x)

##### QRY.ED: Редагування запиту

![Scen5](http://www.plantuml.com/plantuml/png/ZLGrOYj13Ett58RwG-qm7I2faYRCZ5MOcPcJ6vWPhY3TA4yByOnvp3FIezMwUMbvO75vPMRQC5pcMgCNol8MnNcRTtYNWkJdmpKvj9VPeFpskUYT_1JcROfJ2jLtBefX8mU87HTboEy2N8J2s0jPWDZCyALInhikFgOiQh8kx6Jv28L9sTr1kpJWbU87Yc4FLTX0stxTh-PlIozeqkHNrQf2wGDCS4PftjLK_Yssm7jc2ccBBvLNcuM137Xi2ydYi4H4NKrn8hh7F2XVWDSod2chnh5StJd0Fz4Zq1Aif7ocXAkdJq4NFmYEyE3RethyWDEIHlrrUjB5QtPkUSIrE34slkpoZex-nrBAwWSRwORYW4x1-w4Jgg_-ts2ZNjRPrTFNqLsmFp8xREANkTek6piBJ5nknNhnL2apPHftIPSPNKfKoSXGN13yoC2F7n7UiR_5wohog-4NWIQiEmD33HbdeeftwWm5fDOfqWUx1AYZJ1-y87ni8HDfme-Op1gbHJ56uA9Ek-ddvkkCPaIElueV)

### Адміністратор

##### ADM_HELP: Допомога адміністратора

![Scen6](http://www.plantuml.com/plantuml/png/ZL93baH14Dp_K-HxinujnpPFCBQr6zkspj2shX1veuwsyLbLaHcHakYrXny4zGXkFTOJFOKLPhtSCoHvRUzCRksaxUi5_p33hiTmmqVhDu6B1o5Id0X2v0eAx0Zo90W_NvkUDXW9jIT2Vlr0G3-YYaTaE8b4i9UfKT1E48nktOHFiyIjTB0BlBaPmToGnb--52pSyWkVFcQ8DOZa9rnRtvcLhSNvXHsfc9khuPK6DauruuzyJlZWZeJRM3tLd8ctTGvLzNODZexN5i5gih3PjPceS6v8-VkRNOHyHjc5ZlOpMk5eNtrm8C2QFOfUyu27QTM9TZn7v9Em5Guzqgie8pVqq3UoaO3LVsWmCYPlVQF120C0)

##### ADM.RIGHTS: Керування правами користувача 

Як це виглядає у вигляді коду

	@startuml

	|Адміністратор|
	start
	:Виконує пошук\n користувача;
	note right: USR_0:\n Шуканий користувач\n не існує;

	|Система|
	:Знаходить шуканого\n користувача;

	|Адміністратор|
	:Додає/віднімає\n відповідні права;
	note right: USR.RIGHTS_0:\n Користувачу вже\n були надані/відняті права 
	note right: ADM_0:\n Користувач є адміністратором

	|Користувач|
	:Отримує\n повідомлення;

	|Адміністратор|
	:Завершує взаємодію;
	stop

	@enduml

Як це виглядає у вигляді діаграми

![Admin control](http://www.plantuml.com/plantuml/png/XLAnIiDW6Dp_f_YVG9tJfOAW3YwjRe885XMqbHgt3hL1x20gKbfm4DmSOsqqrYI-mlrlv5qZL36jw_rtzzrTKZxrTvl-sV6HCItSOeJ4zP6wlZjt7TT6w3h8NBjb9ZJZuGunniX82LpFufElNHTWl5stmYc99IKqfFWIOSdK6txDDW_t3tpFRbKhEqkUo4zI8KHAm_T2hLWf8gim-RsIGZxcB4H84BOOQO2Kz0jaJ1zJVcNpI38d-89iJhZvhJtqP4kWjuWXEIEna0YWQGvfXEaZDv43XWNL5ohhgskRrUy5xlycSW4zyOf8xyz4Fn1RrLC6kKzJt53ryvZzTMnvPMFs5Qil5yvgZGm9PoaIQf272JUcDiWtcBQda84Zf8ht_xI3IV38jLrNNch-fc6HQ7CghalyxHednfHhzJt-eby0)

#### ADM.QRY_SRC: Керування об'ємом оброблюваних джерел

Як це виглядає у вигляді коду

	@startuml

	|Адміністратор|
	start
	:Виконує пошук\n користувача;
	note right: USR_0:\n Шуканий користувач\n не існує;

	|Система|
	:Знаходить шуканого\n користувача;

	|Адміністратор|
	:додає/обмежує\n відповідний об'єм\n джерел;
	note right: USR.SRC_0:\n Користувачу вже були\n додані/видалені\n конкретні джерела 

	|Користувач|
	:Отримує\n повідомлення;

	|Адміністратор|
	:Завершує взаємодію;
	stop	

	@enduml

Як це виглядає у вигляді діаграми

![ADM.QRY_SRC](http://www.plantuml.com/plantuml/png/XLAnIiDG5DtVLxpDpJgdIy4_Q74JHB2eeAtKk7MeAM87KP7IWeFWvlXQanhJvFaBv_wHzvWCIYlTadFFkUUSosjSXeUzyEhyp9W-7X4ZbmaAcSYrH3A0amXU1dtpGpC1df0YWrVAKCOMNpeToH3PViSILqbAgK9p5T_2rKsd6xPjx_Ju90piNgjvi1EG_4OL70ga-5oh9Qj0OXcczAipv6l9Ge8Shg-HfYYKVWEF6AdAxomZLSiztk7_3xUXTO2OQnKOr-0nGuu42qRXohcAOfwW-YghaBSbO-Ian5WWaO6gbYk7s6urTwjZFA-6aw4QK6qnKso9bCGg3hFMT9poHsS9WQeb2cHqb8ZWdmXmbeNNkB7gYqI4aLVzVZNpo4iN5FAm-MXJECnfAYFkOf4FEDw4yLLnNzS7rRqmfj7k7F7nVGC0)

## Виключні сценарії

#### USR.REG_EX: Відхилення запиту на реєстрацію

![Scen7](http://www.plantuml.com/plantuml/png/ZLB5GKKn4BodYjH1gg41_8QxkpjKyDsjXPcEc2J0z-S-bjsrOLl32xhSGftRtE4kYiZpSCtO_srvPNPfPU1znk8TUPI5kxF-XWuV_4EBbrP25Tu5gIq13lZ0HsV-dBwZ2ofe8xyshFafeiWeYhB5om5jDm0SvE16SfSAt8hmZjXDlvQWqvIFo9bKfD4LhgxKPnOzlIY5FdILioMjZWIqjkE0wjhub_ke3_n5JJwzeB7hi-GdrUB26PEXx6QmC1-1NqURkxoRdWuzRatBDhqhWtRJEpGSw15v57stU1GZ5VtQUIUAwXDNEJW-ymlE_000)

#### USR.LOG_EX: Відхилення запиту на авторизацію

![Scen8](http://www.plantuml.com/plantuml/png/fPB5MKKn58JtgUBKmQs61l0TxkxkKC6xxjB2J4T4S8UNLVGV-I9sJE42BUUGSvuBN4G8dwjJIfx7-CJWsCIhzO3W03bAj6Yuo2E1Zv0B3e8CFbTumXrFFV7l7Hi9QlXJRqctIFIp1A5-CiTTGulXQ_29z-hYwpTMF4IBM6CNk2Neq9htUgD5ZKhJ6WtO5QxRMwsuKouZVtLgdAApZ4NHU_wNETGlYbAlGzrmmJ9gMy-N_j1nhdzthqlwkl6F9ayDqBJFDMSpjDGZrAOrntxz2OP7FFK0)

#### QRY_EX: Відхилення запиту користувача на обрані маніпуляції над обраним запитом

![Scen9](http://www.plantuml.com/plantuml/png/lPB5cTqm58Ntha9rnDMaWV0kP0WECsC5XaTcj_2VZkQJFSoiZV0UqZNT-COMZJmo-GeKaXBhxpV7d8xFNzv--d9k_yQmIynGFXabiLOC4s9QCWM6cjZGaCWZfjQQeUeNj0efDQy_MjDwzv3XkQTaLEUGQAXSvqJZOQ-FaKNxTb7DdW9vjbhX1ItkkMSNAvR8D4zgrTYAcX653K6UNIcmShiuPix1ARm9qEAHqZ0awujQ6bAjCRGkA1bHKslUw7_tgZ7zhNwJdRizpzNbyxJid7jyi7Dpa3UQe9NtIXREntrxArnqiavCoaYU_lLUKeki5IgRlzOqvrxeyFSVNES8)
