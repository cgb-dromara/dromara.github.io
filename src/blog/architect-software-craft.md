---
title: "The Architect: Master Craftsmen in the Software Edifice"
author: Cat Lord is Annoyed
date: 2024-12-26
cover: /assets/img/blog/architect-software-craft-0.webp
head:
  - - meta
    - name: Blog
---

In this era driven by software and artificial intelligence, our daily lives are inextricably linked with software. In this skyscraper of the software world, architects are like those master builders. They are not only proficient in stacking code but also understand how to use the bricks and tiles of code and logic to construct skyscrapers that are both sturdy and aesthetically pleasing, ensuring these structures can withstand the test of time. This article explores how architects, wielding keyboards and mice in the software world, play multiple roles in the process of building software. Let's read with a light heart, think with a smile, and feel free to offer your valuable opinions after a knowing chuckle.

## Requirements Analysis (Project Manager)

When a new engineering project is initiated, the project manager first needs to clarify the project's budget, timeline, and requirements. At this stage, objective, rational, and scientific analysis is crucial.
The project manager needs to negotiate for more resources with the boss based on facts and the timeline, and determine reasonable deliverables and deadlines.

*   Humorous Case


Boss: "We need to build an e-commerce skyscraper, just like Taobao would be best."
Xiao Wang: "Boss, what's your budget?"
Boss: "100,000, not a penny more. Finish it within a month."
Xiao Wang: "Okay, got it, OKK, guaranteed completion." *Mutters to himself: Guess I'll have to use plastic and foam as building materials (Better buy a set online or find one in an open-source community to modify).*
Boss: "Can you show me the design drawings later?"
Xiao Wang: "What, we need design drawings too? Okay, no problem," *turns around and sends over some materials found online.*
Boss: "Xiao Wang, quality and safety must be guaranteed; we need maintenance later too."
Xiao Wang: "OKK, no problem"
After the project goes live: Quality? Impossible. Safety? Nonsense. Maintenance? Dream on. Unit tests, integration tests, performance tests? Not a chance.
Further development? Impossible. Lack the skill and energy. Just delete the database and run away.

## Site Selection & Technology Selection (Feng Shui Master)

When a new engineering project is initiated, the project manager first needs to clarify the project's budget, timeline, and requirements.
At this stage, objective, rational, and scientific analysis is crucial. The project manager needs to negotiate for more resources with the boss based on facts and the timeline, and determine reasonable deliverables and deadlines.
For example:

*   Programming Language Selection: Choose Java for its stability and mature ecosystem, Python for its flexibility, or PHP, hailed as the best language in the world?
*   Database Selection: Choose MySQL, reputed to struggle beyond 20 million rows per table, or PostgreSQL with its more powerful features and higher scalability?
*   Message Queue Selection: Choose Kafka, known for being extremely fast but potentially losing messages, or the recently popular Pulsar?

Every selection needs concrete implementation, guided by the `first principle of pursuing efficiency`.
For instance, can using Java enable rapid development and easier maintenance later?
Does MySQL really fail at 20 million rows per table?
Why is Kafka so fast, what's its principle, does it really lose messages, what features does it have?
These questions require in-depth study. Don't follow blindly; you must delve into the principles, consult experts, and even examine the source code implementation—after all, there are no secrets in front of the source code.

## Design Drawings & Architecture Diagrams (Architect)

Architects use pencils and rulers to draw blueprints, while software architects use code and logic to build architecture diagrams.
This is not random scribbling; every stroke relates to the software's survival.
If the diagram is wrong, the disaster is unimaginable. Architects should have a high degree of technical foresight in their designs, adhering to the principle of `staying one step ahead`.

During the design process, it's not about immediately designing for trillions-level traffic or multi-site disaster recovery from the start. Instead, architecture diagrams should be drawn according to the actual situation and team resources, adapting to local conditions.
Every component in the diagram—its purpose, the scenarios for its use, its fault tolerance, the interaction protocols and interfaces between them—needs careful consideration.
Then, draw the lines and trajectories; plainly put, it's a logical flow diagram of data movement.

Of course, during this process, the architect also needs to reserve some space to consider the system's extensibility for adding more features later. Secondly, in case the boss is dissatisfied one day, the cost of replacement can be minimized as much as possible.
Finally, the architect needs to communicate and review with the project team members in an easy-to-understand manner, ensuring everyone understands what they are doing and how to do it.

## Construction & Management (Foreman)

If developing a software edifice is compared to a small battle, then the architect is undoubtedly the general on the battlefield.
Understanding the combat effectiveness, technical level, and temperaments of the people below is key to deploying troops and utilizing their strengths.
This way, even when faced with constantly changing requirements, flexible adjustments can be made. When encountering technical challenges, the architect's motto should be: `"Brothers, follow me!" (not "Brothers, charge for me!")`, leading the charge to overcome technical difficulties.
Don't浮躁 (be impetuous) floating on "PPT," drawing a diagram here, connecting a line there, and thinking the problem is solved. When it comes to actual development, you'll find it's completely different—how difficult it is and how much time it really takes.

*   During the development process:
    1.  First, the architect should estimate the工期 (timeline) for each module reasonably and scientifically based on the requirements and architectural design. Always reserve some buffer time. (Sometimes, encountering a single problem can take developers days to solve).
    2.  Write core code, establish coding standards, complete interface protocol design, define unit tests, integration tests, E2E tests, etc. Simultaneously, communicate with team members about why this is done and what the benefits are.
    3.  Secondly, the architect should constantly monitor the project's progress. When bricklaying (coding) is slow, consider encapsulating some wheels (reusable components) or leveraging AI capabilities to speed up the bricklaying.
    4.  Finally,验收 (acceptance) needs to be done for each feature, code needs to be reviewed, and an obsession with quality must be maintained.
      When there are disagreements in understanding the code, you might even need to personally refactor the code and then communicate and discuss with the team members.

*   In management and communication:
    1.  A good technical team doesn't really need management. The ancients said, 文人相轻 (scholars tend to despise each other). Actually, the programmer community is similar. They won't follow you because of your title or various management tactics,
        but rather, based on what they can learn and how they can improve by working with you. Only then will they truly unite and genuinely love the work.
    2.  Regarding communication: internally, you are a whole, a team. Problems must be communicated clearly face-to-face, ensuring every member understands your thoughts. Externally,
        you must have your own technical convictions and personality. When faced with unreasonable demands, communicate promptly, even argue, to ensure the project stays on track. Don't let people think you are a
        pushover or a soft persimmon (easy to bully). Of course, this might also give the impression that you are difficult to communicate with. So what? The responsibility is to get the project done well.

## Delivery & Operations (Property Management)

Now the building is constructed. How to safely hand over the house to the owner and let the owner live安心 (with peace of mind)? In this process, the architect should play
the role of property management and should clarify the following:

*   Documentation
    Documentation is the most critical and core deliverable in the entire handover process.
    First, be responsible for managing documentation and knowledge, ensuring all important architectural decisions, design documents, and operational manuals are properly recorded and managed.
    Ensure the documentation `is like a recipe; even if the chef changes, the same flavor can be produced`.

*   DevOps
    Imagine if the building needs repairs or parts replacement,
    architects can quickly respond to needs and iterate continuously through automated CI/CD (Continuous Integration/Continuous Deployment) processes.
    If encountering a problem like a broken elevator, besides considering fault-tolerant strategies, you also need to consider how to perform rolling, canary updates.

*   Observability
    The community's operational status needs to be constantly monitored and observed. Ensure that everything that should be monitored *is* monitored, and that monitoring data can reconstruct the entire chain when needed.
    Predict system risks in advance and proactively avoid abnormal situations.

In this era full of changes, architects need to continuously learn new technologies, adapt to new environments, and solve new problems. They also need to maintain curiosity, be full of desire to explore the unknown, and be passionate about new technologies. Be brave in innovation, dare to try, and don't fear failure. This work is full of challenges but also full of fun. This architects' alliance is a collision of ideas,更像 (even more like) a meeting of heroes. Borrowing the quote from Master Yi in League of Legends (LOL): `"A true master is an eternal student."` Hope all architects and engineers aspiring to become architects can contribute their bricks and tiles to China's software edifice.