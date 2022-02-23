# Requests of stakeholders

## Introduction

_This document provides introductory information to project stakeholders on "Project Management Systems", under development._

### Goal

<ul>
    <li>Analyze the requirements for creating a project</li>
    <li>Create documentation of project</li>
    <li>Analyze the target audience of the project, productivity and technical capacity capabilities and functionality of the future project management platform</li>
    <li>To create and implement a system for comfortable management projects</li>
</ul>

### Context

_This document describes the functionality and features of the project. The context of the project gives stakeholders the opportunity to learn more about the functionality of our project._

### Basic terms and abbreviations

<ol>
    <li>Stakeholders - organizations that provide services for the development of software, websites, mobile applications</li>
</ol>

### Links

**[Wikipedia](https://en.wikipedia.org/wiki/English_Wikipedia)**

_Tg channel of ODB_

### Short content

<ul>
    <li>Characteristics of working processes</li>
    <li>Short view of product</li>
    <li>Functionality</li>
    <li>Usability</li>
    <li>Reliability</li>
    <li>Performance</li>
    <li>Supportability</li>
</ul>

### Characteristics of working processes

_[В цьому розділі визначаються зовнішні фактори, що впливають на бізнес (бізнес-актори),
та внутрішні фактори (робітники), дається загальна характеристика діяльності бізнес-акторів
та робітників, яка здійснюється за допомогою бізнесу._

_Дається опис бізнес-сценаріїв взаємодії бізнес-акторів, робітників і, можливо, інформаційної системи за допомогою наступної
специфікації:_

***ID:***
01

***НАЗВА:***
View progress    
***УЧАСНИКИ:***
Project Manager, Team Leader

***ПЕРЕДУМОВИ:***

***РЕЗУЛЬТАТ:***
Project manager has insights about progress and estimation.
***ВИКЛЮЧНІ СИТУАЦІЇ:***

***ОСНОВНИЙ СЦЕНАРІЙ:***
1. Project manager choses project to see insight.

   
***ID:***
02
    
***НАЗВА:***
Create task.
    
***УЧАСНИКИ:***
Project Management, 
Team Leader - Edit.
Team Member - View.

***ПЕРЕДУМОВИ:***
Project Manger must open a Project.

***РЕЗУЛЬТАТ:***
Task

***ВИКЛЮЧНІ СИТУАЦІЇ:***
Junior Developer can't create a project

***ОСНОВНИЙ СЦЕНАРІЙ:***
1. Project manager creates new task.
2. Project manager or team leader assign team for a task.
3. Team leader adds description to the task.


  
***ID:***
03
    
***НАЗВА:***
Create subtask.
    
***УЧАСНИКИ:***
Team Leader, Team Member

***ПЕРЕДУМОВИ:***
Task.
***РЕЗУЛЬТАТ:***

***ВИКЛЮЧНІ СИТУАЦІЇ:***
Team member assignes subtask to another team member
Team leader assignes subtask to memeber of another team.

***ОСНОВНИЙ СЦЕНАРІЙ:***
1. Team member creates subtask.
2. Team leader assignes subtask to team member.
3. When Developer finishes his job he adds artifacts to the description of subtask.

*Кількість сценаріїв визначається у відповідності до специфіки завдання та необхідного 
рівня деталізації (зазвичай, 5-6 сценаріїв).*



***ID:***
04

***НАЗВА:***
Finish subtask.
***УЧАСНИКИ:***
Team Leader

***ПЕРЕДУМОВИ:***
***РЕЗУЛЬТАТ:***
Subtask is marked as finished.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

***ОСНОВНИЙ СЦЕНАРІЙ:***
1. Team member finishes subtask.
2. System updates project progress.

## Короткий огляд продукту

*[Визначається границя системи та категорії її користувачів. Дається загальна характеристика категорій користувачів
системи]*

*[Нижче йде опис FURPS:]*

*Кількість сценаріїв визначається у відповідності до специфіки завдання та необхідного 
рівня деталізації (зазвичай, 5-6 сценаріїв).*



***ID:***
05
***НАЗВА:***
Create a team.

***УЧАСНИКИ:*** Project Manager.

***ПЕРЕДУМОВИ:***

***РЕЗУЛЬТАТ:***
Team.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

***ОСНОВНИЙ СЦЕНАРІЙ:***

1. Project manager creates new team and assembels people
2. Project manager choses team leader.



**_ID:_**

***ID:***
06
***НАЗВА:***
Create project
    
***УЧАСНИКИ:***
Project Manager

***ПЕРЕДУМОВИ:***

***РЕЗУЛЬТАТ:***
Team player who creates a project becomes Project Manager

***ВИКЛЮЧНІ СИТУАЦІЇ:***
Junior Developer can't create a project

***ОСНОВНИЙ СЦЕНАРІЙ:***
1. Project manager creates new project. It is visible for all teams.



## Short view of product

_[Визначається границя системи та категорії її користувачів. Дається загальна характеристика категорій користувачів
системи]_


## Functionality

Project manager interface (project manager):

The functionality of the project manager involves creating a project and its tasks, without the mediation of interaction with teams and tracking the results of work.

Opportunities:



<ol>
    <li>Create project</li>
    <li>Delete project</li>
    <li>Create a task</li>
    <li>Change a task</li>
    <li>Delete a task</li>
    <li>Set deadline</li>
    <li>Look at the progress</li>
    <li>Get acces to the project for developers</li>
</ol>


Developer interface:

The functionality of the developer involves viewing the content of the tasks assigned to him.

Opportunities:

<ol>
    <li>Accept a task from the manager</li>
    <li>Gain acces to project</li>
    <li>Show status of the task</li>
</ol>

## Usability

*navigation*         
*familiarity*          
*consistency*          
*error prevention*      
*feedback*                
*visual clarity*      
*flexibility & efficiency*

## Reliability

The system must:

- have the means to protect user data and projects
- back up data
- serve a large number of users and withstand heavy loads


## Performance

	requirements: 
	response time, 
	resource utilization, 
	efficiency, power, 
	scalability.


## Supportability

- We will fix bugs and security issues if you report them.
- We will support the old API for backward compatibility and give enough time to upgrade to a new API.
