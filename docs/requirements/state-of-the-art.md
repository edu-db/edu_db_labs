# Project management system. State of the art

## Introduction

This document analyzes project management systems. The basic definitions are specified, approaches and ways of the decision of a problem are considered, comparative characteristics of existing means of the decision of a problem are carried out and the conclusions are formed.

## Main definitions

- **Project management** - is the process of managing the team, project resources using special methods and techniques in order to successfully achieve the aim.

- **Project management software** - is software used for project planning, scheduling, resource allocation, tasks, and change management.

- **API** (*Application Programming Interface*) - is a set of ways and rules by which various programs communicate with each other and exchange data.

- **Artifact** - is the result of certain work that can be used in the software development process, or that is the ultimate goal of development. This concept is quite abstract, but in practice, artifacts are understood as diagrams, and libraries that are needed to develop a project, and the modules that make up the project, and the project itself in a ready-to-use form is also considered an artifact.

- **Millestone** - a term used in project management and means an important place, a key stage, the transition to a new stage of project development.

- **Kanban** - is a concept of supporting a continuous flow of tasks and their efficient execution due to the maximum efficiency of the team. At the same time, a team is never given more work than it can do. Briefly: you make a to-do list and people do it.

- **Version control** - is a system that records changes to a file or set of files over time so that you can recall specific versions later.

- **Cross-platform** - the property of software to run on more than one software (including operating system) or hardware platforms.

- **FAQ**(*Frequently Asked Questions*) - підбірка часто задаваних питань на певну тему та відповідей на них

## Approaches and ways to solve the problem

When developing software from scratch, there are some specific steps that software engineers have to take. Collectively, these are called software development cycles; they usually include planning, designing, producing, testing, etc. This article will explore eight different software development life cycles (SDLCs) that have become widely applied in software development companies worldwide.

Like said above, SDLCs are the essential steps that all engineers have to undertake, from the beginning to the end, when developing software. As a general rule, the SDLC process includes six steps:

1. Requirement analysis
2. UI/UX Design
3. Software development
4. Testing and Run Quality Assurance 
5. Deployment of final code
6. Maintenance

***Types of SDLC Models***

Types of SDLC models are *Waterfall, V Model, Incremental Model, Spiral Model, RUP, Scrum, XP, Kanban.*

**Waterfall**
The Waterfall model follows through all development stages: analysis, design, coding/implementation, testing, deployment, maintenance, respectively. Each phase has specific delivery deliverables and is strictly documented. The next step cannot start before the previous one is completed.

This model can be used in: 

- Small and medium-sized simple projects (developing small companies’ websites) with clearly defined and unchanging requirements. 
- Projects that require tighter controls, predictable budgets, and timelines like government projects.
- Projects that adhere to a variety of rules and regulations like healthcare projects.
- Projects using well-known technology stacks and tools.

**V-Model** (*Validation and Verification Model*)
The V-model is a linear model with each stage has a corresponding test run. Workflow organization means excellent quality control, but at the same time, it makes the V-model among the most expensive and time-consuming models.

Additionally, although defects in the requirements specification, code, and architecture errors can be found early, changes during the development process are still expensive and challenging. Like the Waterfall model, all requirements are gathered and summarized from the beginning and cannot be changed.

This model can be used in:

- Projects that require no errors and downtime like medical software or flight management software.

**Iterative and Incremental model**
The SDLC, which is based on the Incremental model, is divided into multiple iterations. New software modules will be added in each iteration with no or little changes in the previously added modules. The development cycle can be sequential or parallel. Parallel development adds to delivery speed, while multiple iterative development cycles can make the project lengthy and costly.

This model can be used in:

- A large-scale and lengthy development project that required basic functionality delivery fast like microservices, or web services. 

**Spiral model**
This model focuses on a comprehensive risk assessment. Therefore, to make the most out of the Spiral model, you’ll have to engage people with s solid background in conducting a risk assessment. Typically, the Spiral cycle lasts around six months and starts with four key activities - comprehensive planning, risk analysis, prototyping, and review of previously delivered parts. The repeated spiral cycle significantly extended the project timeframes.

This is the model with a lot of customer involvement. They can participate in the exploration and review phase of each cycle. During the development phase, customer modifications are not acceptable.

This model can be used in:

- Projects with unclear business needs/innovations or too ambitious 
- Large and complex projects
- Research and development (R&D) or introduce new services or products.

**RUP** (*The Rational Unified Process*)
The Rational Unified Process (RUP) is a combination of a linear framework and an iterative framework. This model divides the software development process into four phases - inception, elaboration, construction, and conversion. Except for the first phase, each step usually has multiple iterations. All basic operations ( requirements, design, etc.) of the development process are executed parallel across the four RUP stages, although the intensity is different.

This model can be used in:

- Large-scale and high-risk projects, use-case-based development, and fast development of high-quality software.

***Agile Methodologies*** 
The next three SDLC methodologies are falling under the umbrella of Agile methodologies.Each Agile iterative process usually takes several weeks to deliver a complete software version. This group’s models focus more on providing a functioning part of the application and software testing activities rather than detailed software documentation (detailed requirement specification, detailed architecture description).

This enables rapid development, but because there is no detailed software description, the maintenance phase is complicated as more time is needed to find out the problem. 

Another thing about the Agile model is that it’s all about working closely both across the team and with customers. Stakeholders can review the development progress and give revaluation of the priority of tasks for the future iteration to increase the ROI and make sure business goals and user needs align.

Agile models can be used in:

- Any startup initiatives where end-users early feedback is indispensable.
- Medium-sized projects in the custom development phase and their business requirement can’t be converted into detailed software requirements.
- Large-scale projects can be divided into small functional parts easily and can be gradually developed in each iteration.

**Scrum**

This is one of the most popular Agile models. The sprint/iterations usually take from 2 - 4 weeks to finish. Therefore, they required careful planning and evaluation in advance. Once the sprint operation is confirmed, no changes are allowed.

**XP** (*Extreme Programming*)
Using Extreme  Programming (XP), the regular repetition lasts 1-2 weeks. If the team has not worked with similar software, it even allows for changes after the iteration’s launches. This flexibility creates a significantly complicated delivery of quality software. To alleviate the problem, XP requires pair programming, test-oriented development and test automation, continuous integration (CI), small releases, simple software design, and regulations compiled with coding standards.

**Kanban**
As for Kanban SDLC, the key distinguishing feature is the lack of apparent iterations. If used, they will be kept extremely short, known as a daily sprint. The focus is placed on visualizing the plan. The team uses the Kanban board tool to present all the project activities, the quantity, the person in charge, and their progress.

Such transparency helps to estimate the most pressing tasks more accurately.

Furthermore, the model does not have a separate planning phase so that a new change requirement can be introduced at any time. Kanban also allows the team to communicate with the customer frequently, this allows the customer to check the result of their work at any time, and they can even hold meetings with the project team every day.

## Comparative characteristics of the relevant means of solving the problem

[**Git Project**](https://github.com/features/issues) - is a GitHub issues management feature that helps you organize issues and post pull requests on the Kanban style board for better visualization and prioritization. You can create as many projects as you want in the repository. The GitHub Projects interface allows you to visualize project progress and tasks, which can be used in conjunction with issues and pull requests to track the work that needs to be done. The system is easy to use and easy for users to understand.


[**Trello**](https://trello.com/) - is free multi-platform project management system. Projects are represented by boards containing lists. The lists contain cards depicting tasks. Cards must move from the previous list to the next (by dragging), thus depicting the movement of a function from idea to testing. The card can be assigned to the users responsible for it. Users and boards can be combined into teams. Trello has limited support for tags in the form of six colored labels. Cards can contain comments, attachments, end dates, and lists (lists of subtasks). The program interface works in drag-and-drop format, all data is updated dynamically in the background.

[**Basecamp**](https://basecamp.com/) - is an online service management service with a user-friendly interface. Basecamp allows creative and not only teams to increase productivity and organize work on projects. This is the material of the kata log of startpack.ru. The service combines tools for communication, task tracking, scheduling and file transfer. Users have available versions in the browser and on mobile devices.
Work in Basecamp takes place in a single space, where the common tasks and chat of the company, teams and projects are located. These components include 6 elements for project management: project news feed, task sheet, documents and files, shared chat, calendar and automatic check-in. The company tab contains general elements related to the entire team, the "Teams" tab contains elements related to the work of a particular department.

[**Nifty**](https://niftypm.com/) -  a project management tool that shortens project development cycles and improves team productivity by combining all important project management functions into one software. The end result is milestone-driven progress that inspires teams to ensure that organizational goals stay on schedule. Nifty software allows you to manage tasks both in Kanban format and in the form of a list, has a built-in calendar that can be integrated with Google, as well as the exchange of files and documents.

[**Backlog**](https://backlog.com/) -  a cloud-based project management and tracking solution designed for development teams working with teams of designers, marketers and IT. Key features of the solution include project and problem management, subtasks, bug tracking, and exhausted charts. Backlog offers features such as watchlists, file sharing, and comment streams. It integrates with Git and SVN, which helps developers manage project source code along with project tasks. Backlog allows users to visualize their daily schedule and project workflows using Gantt charts. It also helps users suggest and compare changes to the project, comment on extraction requests, track changes to the project, and document changes.

[**Asana**](https://asana.com/) - online service for team work on projects, task tracking, team communication and document exchange. Each team can create a comfortable workspace. The workspace can include many projects, and each project, in turn, many tasks. Authorized users can add tasks, add comments and tags, and attach files to the task. A distinctive feature of Asana from other project management programs is its flexibility. The system can be used to track current work and long-term projects, as well as to coordinate teams and distribute the workload among employees. A wide range of system features provides freedom of use for the needs of users.



|   | GitHub Projects | Trello | Basecamp | Nifty | Backlog | Asana | Our system |
|:------| :-------------: | :----: | :------: | :---: | :-----: | :---: | :--------: |
| **Functionality** |
|   *Artifacts* | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
|   *Reminder system* | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   *Deadline* | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   *API* | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   *Offline access* | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
|   *Search filter* | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Usability** |
|   Integration with GitHub | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
|   User interface | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   Cross-platform | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   Mobile application | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Reliability** |
|   Backup | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
|   Regular system updates | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
|   Confidentiality of information | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Performance** |
|   Failure resistance | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   JIT-synchronization | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Supportability** |
|   FAQ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|   Online support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |


## Сonclusion

After analyzing the subject area, it can be noted that among the existing tools there is no one that would completely solve the problem. None of the options support artifacts. Therefore, when developing our system, all points will be taken into account, as a basis as an option with the least number of shortcomings, we will use Git Project.

## Link

[wikipedia: Comparison_of_project_management_software](https://en.wikipedia.org/wiki/Comparison_of_project_management_software)

[proofhub: project-management-app-comparison](https://www.proofhub.com/articles/project-management-app-comparison)

[alphaservesp: what-is-project-management-software ](https://www.alphaservesp.com/blog/what-is-project-management-software/)

[wikipedia: API](https://en.wikipedia.org/wiki/API)

[tpptechnology: software-development-models-and-methodologies](https://www.tpptechnology.com/blog/8-basic-software-development-models-and-methodologies-you-should-know/)