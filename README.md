# HOPE THE APP

We have created an app called Hope. It puts those in need of food directly in touch with retailers that find themselves with excess stock at the end of the day. We are building Hope as our Tech for Better Project for [Founders & Coders FAC26](https://github.com/fac26).

Contributors [Laura Keating](https://github.com/LauraK0), [Iman Ghellache](https://github.com/ighellache), [Dominic Simpson](https://github.com/DominicSimpson), [Gal K Jones](https://github.com/GalKJ)

We have kept a [daily log](https://hackmd.io/SumkcfMyTmSD-zuLZZk1uQ) that goes into detail on how the app evolved. 

## Deployment

Please follow this link to our [deployed site](https://week-10-12-tfb-eric-gild.vercel.app)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone Repo

If you want to run this locally, the app depends on some environmental variables. Please let us know if require these.

Please `clone` this repo to your local machine

Please run `npm install` to install all dependencies

Please run `npm run dev` to run the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

    React - JavaScript library

    Next.JS - Framework

    VsCode - The code editor used

    Airtable - database

    Vercel - The deployment platform used

# PROJECT DOCUMENTATION

## Introduction

<details>

#### What are you building?

A web app to put those in need of food directly in touch with retailers that find themselves with excess stock at the end of the day.

#### Why are you building it?

We are building it because there is a cost of living crisis and more and more find themselves unable to buy food while the amount of food waste generated by the take away food industry continues to grow.

</details>

## Project Scope

<details>

#### What are you not building?

We are not building a React Native app nor are we building a delivery/ geolocation app.

#### How did you decide what features were important?

We consulted the Product Owner and then during sprint planning creating issues pulled from two main and essential user stories.

</details>

## Project plan

<details>

#### How are you going to structure your sprints?

First week we decided to target completing one user story. That story being the vendor user story. The second week we are targeting the users user story and any stretch goals that we find ourselves having time to incorporate. We tracked our progress using the kanban board and issue estimation.

#### What order are you going to build in?

Our tech stack includes:

- React
- Next.js
- Supabase for authentication
- Airtable (for database)
- Cypress for testing

#### How did user research inform your plan?

We conducted user research and usability testing. Our users gave us valuable feedback which helped us refine our initial concept. In some instances that meant intergrating new features which we hadn't considered before and in other instances removing features that we had initialy thought essential.

</details>

## Requirement analysis

<details>

#### How will you ensure your project is accessible to as many users as possible?

We will ensure our project is accessible to as many users as possible by:

- ensuring our app is responsive
- using lighthouse feature to check accessibility
- using a colour contrast checker to ensure our colour scheme is accessible
- using semantic HTML to ensure our app is accessible to screen readers

#### Are there any legal or regulatory requirements you should consider?

Safe and secure storage of data ie. GDPR.

</details>

## Project learnings

<details>

#### Did your team work effectively?

Clear communication when creating the Kanban board made us more effective at meeting tasks and completing them, timeboxing tasks enabled us to laser focus and not fall down rabbit holes, pair programming meant we could rely on one another when hitting challenges.

#### What would you do differently next time?

Ask for help earlier rather then struggle by ourselves and make best use of mentors and Discord help and soloutions channel. Read documentation more thourougly before starting work rather than being put off by it's dense and sometimes messy nature.

</details>

## Research and findings

<details>

#### What did you find out from user testing?

We learned that:

- the colour palette was not good for colour blind users.
- Some of our icons in the navbar were not clear.
- Categorizing food items would be helpful if there are loads of food items for both vendor and user
- An incentive system is required to ensure that reserved food items are picked up, such as limiting reservations to three items or penalties.
- It is suggested to include a profile page to see my reservations / cancel reservations and a basket icon for reservation and vendor information.
- The picture on the front page should be changed to focus more on sharing/giving food instead of a delivery app.
- The app should emphasize "stigma-free" and offer an alternative to "ready for food?"
- Verification and confidentiality messages should be included for users who feel embarrassed asking for food.
- "Support us" rather than “Donate Now” would feel better.

</details>

## Project outcomes

<details>

#### Were your assumptions right or wrong?

We assumed correctly that the team would not have enough time during the 2 week build to add geolocation and delivery features. We also assumed correctly that the team would not have enough time to build a React Native app.

</details>

## Recommendations and conclusions

<details>

#### What features would you prioritise to build next?

We would prioritise building a React Native app and geolocation and delivery features.

#### Was the project a success?

The project was a success in that we were able to build a functioning MVP for our product owner and we were able to learn a lot about the software development lifecycle and the tech stack we used.

</details>

## Software Development Lifecycle stages

### Planning

<details>

#### What roles did your team take on?

Eric - Product Owner

Gal - Scrum Facilitator

Gal, as the scrum facilitator, was responsible for creating the Kanban board, issues, user stories, estimating issues, keeping the team on track, facilitating standups, retrospectives, and sprint planning, as well as maintaining clear communication between the team and the product owner.

Laura - UX/UI Designer

As the UX lead on the project, Laura was responsible for guiding the user experience strategy and design. She collaborated with the team and product owner during the design phase to create wireframes, conduct user research, and develop high-fidelity prototypes using Figma. During the build phase, Laura configured Tailwind CSS and maintained consistency in the project's style.

Dominic - QA

Dominic's proficiency in Quality Assurance was evident in his adept use of Cypress Testing while working on the HOPE app, as well as ensuring that the code generally was not only clean and legible but also functional and reliable.

Iman - DevOps

As a DevOps lead, Iman was responsible for installing Prettier and ESLint configurations to improve the code quality. Iman resolved merge conflicts on VSCode when doing Git merges from the main branch to their branch. Iman also reviewed pull requests from other team members to ensure the code made sense before merging to main. Additionally, Iman deployed the code to Vercel and set up the initial file structure of the codebase.

#### Did these roles help your team work effectively?

Teams produce software effectively by collaborating and utilizing each member's skills to achieve their goals. To contribute appropriately, team members need to understand their role and responsibilities, communicate effectively, and maintain clear goals and expectations. The requirements of a software development team vary based on the project, but it's crucial to have a diverse range of skills, maintain open communication, and prioritize teamwork to ensure success.

</details>

### Analysis

<details>

#### What might be the intended and unintended consequences of building this product?

The intended consequences of building this product are to help people who are struggling to get food and to help people who have food to give. The unintended consequences of building this product are that it could be used by people who are not in need of food and could be used by people who are not giving food but the team doesn't expect this to be the case.

</details>

### Design

<details>

#### How did you plan a user experience?

We planned a user experience by:

- conducting user research
- conducting usability testing
- creating wireframes
- creating high fidelity prototypes

#### What technical decisions did you make?

We decided to use the following tech stack:

- React
- Tailwind CSS
- Supabase
- Cypress
- Vercel
- Airtable

The team had used the tech stack before and were comfortable with it therefore allowing us to focus on the project rather than learning a new tech stack. We wanted to use a CSS framework to speed up the styling process so chose Tailwind CSS as it is a utility-first CSS framework. We used Airtable as a database since we felt it would an accessible choice for our product owner moving forward with the product. Airtable is a spreadsheet-database hybrid that allows users to create databases without having to learn SQL.

#### Server-render vs client-render vs both

#### Relational or non-relational or no DB

#### Self-hosted or platform-as-a-service

#### Frontend first vs DB first

#### Did you create a technical specification?

`Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)`

</details>

### Implementation/Build

<details>

#### How did you ensure your code was good?

`Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)`

#### What interesting technical problems did you have to solve?

`Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)`

#### How did you debug issues that arose?

`Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)`

</details>

### Test

#### How did you verify your project worked correctly?

- We used Cypress end-to-end testing to verify that our project functions correctly. We ran tests on the vendor Sign-In and Vendor Details upload form; both passed successfully. 

#### Did writing automated tests catch any bugs?

- No bugs were picked up. 

### Deploy

<details>

#### Where/how did you deploy your application?

`Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)`

We deployed to vercel. Vercel was chosen because it is a next.js app. Vercel provides a simple and easy-to-use deployment process for Next.js applications. We were able to deploy the application in just a few clicks with Vercel taking care of the rest, including building and deploying the application. As Vercel integrates seamlessly with Git, we could utilise automatic deployments and preview builds of feature branch.

#### What problems did you encounter during deployment?

We didn't encounter any issues with deployment. With the preview feature on branches, we could check whether the deployment succeeded and integrate any fixes before merging with the production branch.

</details>

### Maintain

<details>

#### Is it easy for someone make changes to the codebase?

#### Could a new person quickly be onboarded to contribute?

`
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)

Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)
`

</details>
