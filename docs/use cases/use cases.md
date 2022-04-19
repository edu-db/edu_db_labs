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

