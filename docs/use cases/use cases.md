# Модель Use case

## Відношення узагальнення

Користувач" as User and "Адміністратор" as Admin

Як це виглядає у вигляді коду

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

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

</center>


Як це виглядає у вигляді діаграми

![Realtion](http://www.plantuml.com/plantuml/png/dPJBwjf05CRtynI3-xGl845HKS7IDgcb1K6YPb7G51Apwy8Bj9k2fTWikchV85YjuaLVuSmRzSmuXtQOj8N_GWYVy_tEvKkcaao3U9fEnem5m-dRc9UwIHYNU91m-K1YTJHv4obLFJ6M9k4mI49UAW_ShkyzyXhDykE1sulW6-p4Mip5GimW5-z59bRAg4zPpivJSdw2ZLZ05Nq7s5jUF6Tvdtkl-pLFsx-ZUQFiExZ0HQnw4PSSkC41krbg4haAOOswXdt5AMPYYS2y00PNE6iS-OfnhvvftXSuYZcQhqXT84jrkSS29_4HUJascC66c6GkXBvi-nhw6JsIaICb-xso_-89O-5RZGurlCOPRt9E_Fs079bOPWjdv5n4Hldgl7959W9ZyjNXpjXnANMjfAXGbeP2cTWYRjOKQJMsYXDfDPOgTMDCMQq_KMTzh_QlfBVm4sMvn1FAPpYe0VymMr0ir_VQpTOB_szS3ZUvAXGKKPOvtjzsjKrrKdpGkpIHLZKAwY4naPynzIrpP-IuncY6RBHX_cDIKkUTUxypM2MCHl9AuRy0)