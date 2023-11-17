# Проєктування бази даних

## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

entity User
entity User.nickname #ffffff
entity User.password #ffffff
entity User.email #ffffff
entity User.picture #ffffff
entity User.id #ffffff
entity User.name #ffffff
entity User.surname #ffffff

entity Quiz
entity Quiz.name #ffffff
entity Quiz.description #ffffff
entity Quiz.id #ffffff

entity Question
entity Question.description #ffffff
entity Question.number #ffffff
entity Question.type #ffffff
entity Question.id #ffffff

entity Role
entity Role.name #ffffff
entity Role.description #ffffff

entity Answer
entity Answer.text #ffffff
entity Answer.option #ffffff
entity Answer.file #ffffff
entity Answer.id #ffffff

entity Option
entity Option.description #ffffff
entity Option.number #ffffff
entity Option.id #ffffff

entity SelectedOption

entity Respondent
entity Respondent.id #ffffff

User.nickname --u-* User
User.password --u-* User
User.email --u-* User
User.picture --u-* User
User.id --u-* User
User.name --u-* User
User.surname --u-* User

Quiz.name --u-* Quiz
Quiz.description --u-* Quiz
Quiz.id --u-* Quiz

Question.description --u-* Question
Question.number --u-* Question
Question.type --u-* Question
Question.id --u-* Question

Role.description --* Role
Role.name --* Role

Answer.text --d-* Answer
Answer.option --d-* Answer
Answer.file --d-* Answer
Answer.id --d-* Answer

Option.description --d-* Option
Option.number --d-* Option
Option.id --d-* Option

Respondent.id --d-* Respondent

User "0,*" -- "1,1" Role
User "1,1" -u- "0,*" Respondent
Respondent "0,*" -l- "1,1" Answer
Question "1,1" -- "0,*" Answer
Quiz "1,1" -- "0,*" Question
Question "1,1" -u- "0,*" Option
Answer "1,1" -u- "0,*" SelectedOption
Option "1,1" -- "0,*" SelectedOption

@enduml

</center>
