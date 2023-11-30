# Проєктування бази даних

В рамках проекту розробляється:

- модель бізнес-об'єктів

@startuml

entity User  #190482
entity User.password  #C2D9FF
entity User.email #C2D9FF
entity User.username #C2D9FF
entity User.id #C2D9FF

entity Attributes  #190482
entity Attributes.description  #C2D9FF
entity Attributes.value #C2D9FF
entity Attributes.type #C2D9FF
entity Attributes.name #C2D9FF
entity Attributes.id #C2D9FF

entity DataFolder  #190482
entity DataFolder.description  #C2D9FF
entity DataFolder.date #C2D9FF
entity DataFolder.owner #C2D9FF
entity DataFolder.name #C2D9FF
entity DataFolder.id #C2D9FF

entity Permissions  #190482
entity Permissions.id  #C2D9FF
entity Permissions.name #C2D9FF
entity Permissions.description #C2D9FF
entity Permissions.level #C2D9FF

entity Filter  #190482
entity Filter.parameters  #C2D9FF
entity Filter.status  #C2D9FF
entity Filter.id  #C2D9FF

entity Request  #190482
entity Request.status  #C2D9FF
entity Request.date  #C2D9FF
entity Request.type #C2D9FF
entity Request.target #C2D9FF
entity Request.id #C2D9FF

entity Data  #190482
entity Data.size  #C2D9FF
entity Data.date  #C2D9FF
entity Data.type #C2D9FF
entity Data.name #C2D9FF
entity Data.id #C2D9FF
entity Data.description #C2D9FF
entity Data.tags #C2D9FF

entity UserAttributes  #190482
entity UserAttributes.UserID  #C2D9FF
entity UserAttributes.AttributeID #C2D9FF

User.password -d-* User
User.email -d-* User
User.username -d-* User
User.id -d-* User

Request.status -u-* Request
Request.type -u-* Request
Request.target -u-* Request
Request.date -u-* Request
Request.id -u-* Request

Filter.parameters -l-* Filter
Filter.status -l-* Filter
Filter.id -l-* Filter

Data.size -d-* Data
Data.date -d-* Data
Data.type -d-* Data
Data.id -d-* Data
Data.name -d-* Data
Data.description -d-* Data
Data.tags -d-* Data

DataFolder.description -d-* DataFolder
DataFolder.date -d-* DataFolder
DataFolder.owner -d-* DataFolder
DataFolder.name -d-* DataFolder
DataFolder.id -d-* DataFolder


UserAttributes.UserID -u-* UserAttributes
UserAttributes.AttributeID -u-* UserAttributes

Attributes.description -d-* Attributes
Attributes.value -d-* Attributes
Attributes.type -d-* Attributes
Attributes.name -d-* Attributes
Attributes.id -d-* Attributes

Permissions.description -u-* Permissions
Permissions.level -u-* Permissions
Permissions.name -u-* Permissions
Permissions.id -u-* Permissions

User "1,*" --d- "0,*" UserAttributes
User "1,1" --d- "0,*" Request
User "1,1" --r- "0,*" DataFolder
Request "1,1" --u- "0,*" Filter
Filter "1,*" --u- "0,*" Data
UserAttributes "0,*" --r- "1,*" Attributes
Attributes "1,1" --r- "0,*" Permissions
DataFolder "0,*" --u- "0,*" Data 


@enduml

- ER-модель

@startuml

	entity User  {
		id: UUID
		password: TEXT
		nickname: TEXT
		email: TEXT
	}

	entity UserAttributes  {
		UserID: UUID
		AttributeID: UUID
	}

	entity Request  {
		id: UUID
		status: TEXT
		date: DATETIME 
		type: TEXT
		target: INT
	}

	entity Filter  {
		id: UUID
		parameters: TEXT
		status: TEXT
	}

	entity DataFolder  {
		id: UUID
		description: TEXT
		date: DATETIME 
		owner: TEXT
		name: TEXT
	}

	entity Data  {
		id: UUID
		size: DOUBLE
		date: DATETIME 
		type: TEXT
		name: TEXT
		description: TEXT
		tags: TEXT
	}

	entity Attributes  {
		id: UUID
		description: TEXT
		value: TEXT
		type: TEXT
		name: TEXT
	}

	entity Permissions  {
		id: UUID
		description: TEXT
		level: INT
		name: TEXT
	}

	entity DataLink  {
		link: TEXT
	}

User "1,1" --> "0,*" UserAttributes
User "1,1" --> "0,*" Request
User "1,1" --> "0,*" DataFolder
Request "1,1" --> "0,*" Filter
Filter "1,1" --> "0,*" Data
UserAttributes "0,*" --> "1,1" Attributes
Attributes "1,1" --> "0,*" Permissions

DataFolder "0,*" --> "0,*" DataLink
DataLink "0,*" --> "0,*" Data

@enduml

- реляційна схема
